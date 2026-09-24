---
title: "Battlemetrics & Trackers"
pageTitle: "Battlemetrics and Trackers"
description: "Since 19/07/2026, Battlemetrics has discontinued free usage of its service and now requires an active subscription to use the API )."
order: 6
upstream: "https://github.com/alexemanuelol/rustplusplus/blob/8f7300e4e3dd68392f2b01ead5d711697f63ac63/docs/battlemetrics_and_trackers.md"
upstreamPath: "docs/battlemetrics_and_trackers.md"
upstreamSha: "8f7300e4e3dd68392f2b01ead5d711697f63ac63"
syncedAt: "2026-09-24T02:27:31.680Z"
license: GPL-3.0
ads: false
---
## Authentication Token

Since 19/07/2026, Battlemetrics has discontinued free usage of its service and now requires an active subscription to use the API ([source](https://discord.com/channels/202199157224636417/270701413972049921/1528494637675708417)).

Because the tracker functionality relies heavily on the Battlemetrics API, you are required to [obtain an API key](https://www.battlemetrics.com/subscription). The Basic plan should be sufficient. It was never the intention for people to have to pay to use rustplusplus, so this is unfortunate. This will remain the solution until a more permanent one is in place.

Once you've obtained your Battlemetrics token, copy it into the config file located at `config/index.js`.

The config file should look something like this (NOTE: key below is invalid):

    battlemetrics: {
        token: process.env.RPP_BATTLEMETRICS_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjM5NzE4MDE2ZjZlYjY1NmMiLCJpYXQiOjE0NzgwMzc1MjQsIm5iZiI6MTQ3ODAzNzUyNCwiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjoxIn0.iwwHt2lvBxlBqcEm7HrX1b1Rb9MXcMghUY5xspluWgw'
    }

If no token is obtained, tracker functionality will be disabled.
