export const formatTimeRemaining = (timestamp: number): string => {
  const now = Date.now();
  const millisecondsRemaining = timestamp * 1000 - now;

  if (millisecondsRemaining <= 0) {
    return 'Expired';
  }

  const seconds = Math.floor(millisecondsRemaining / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return days === 1 ? '1 day' : `${days} days`;
  } else if (hours > 0) {
    return hours === 1 ? '1 hour' : `${hours} hours`;
  } else if (minutes > 0) {
    return minutes === 1 ? '1 minute' : `${minutes} minutes`;
  } else {
    return seconds === 1 ? '1 second' : `${seconds} seconds`;
  }
};
