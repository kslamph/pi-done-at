# pi-timestamp

A Pi extension that shows the local date and time when an agent run finishes:

```text
Completed at 2026-10-20 16:42:31
```

The timestamp uses the local timezone of the machine running Pi and appears as
an `info` notification after the agent has fully settled, including automatic
retries, compaction recovery, and queued follow-ups. Aborted runs do not show a
completion timestamp.

## Try it

From this directory:

```bash
pi -e .
```

To install it for future sessions:

```bash
pi install .
```

## Test

```bash
npm test
```
