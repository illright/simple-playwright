# Running

```
pnpm i
pnpm exec playwright install
pnpm exec playwright test --ui
```

Then enable Chromium and Setup projects and hit F5

# Observe

During the runtime of the test, the timeline and live preview are empty.

This only seems to happen the first time you run the test after Playwright was started. If you rerun, then the timeline is behaving as expected. 

# Expected

The live preview shows where Playwright is stuck
