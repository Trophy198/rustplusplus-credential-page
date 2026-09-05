import { getStore } from '@netlify/blobs';

/**
 * Credential issuance counters stored in Netlify Blobs (store: "credential-stats").
 *
 * Keys:
 *   daily/YYYY-MM-DD -> { issued, failed }
 *   total            -> { issued, failed }
 *
 * Increments are read-modify-write and therefore not atomic; a small undercount
 * under concurrent requests is acceptable for trend tracking. Any failure here
 * must never break credential issuance, so every call is wrapped in try/catch.
 *
 * Read the numbers in the Netlify UI (Project -> Blobs -> credential-stats)
 * or with `netlify blobs:get credential-stats total`.
 */

export type CredentialOutcome = 'issued' | 'failed';

interface Counter {
  issued: number;
  failed: number;
}

const STORE_NAME = 'credential-stats';

const emptyCounter = (): Counter => ({ issued: 0, failed: 0 });

const todayKey = (): string => `daily/${new Date().toISOString().slice(0, 10)}`;

async function increment(store: ReturnType<typeof getStore>, key: string, outcome: CredentialOutcome) {
  const current = ((await store.get(key, { type: 'json' })) as Counter | null) ?? emptyCounter();
  current[outcome] = (current[outcome] ?? 0) + 1;
  await store.setJSON(key, current);
}

export async function recordCredentialEvent(outcome: CredentialOutcome): Promise<void> {
  try {
    const store = getStore({ name: STORE_NAME, consistency: 'strong' });
    await Promise.all([increment(store, todayKey(), outcome), increment(store, 'total', outcome)]);
  } catch (error) {
    // Blobs are unavailable outside the Netlify runtime (e.g. `next dev`).
    console.warn('credential-stats: failed to record event', outcome, (error as Error)?.message);
  }
}
