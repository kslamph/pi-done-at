# pi-done-at

Shows the local completion time after a Pi agent run settles:

```text
※ Done at 08:23:30
```

## What's included

| Extension | Command / shortcut | What it does |
|---|---|---|
| `timestamp.js` | (no command) | Displays the local completion time as a Pi `info` notification after the agent fully settles |

It waits for Pi's `agent_settled` event, so automatic retries, compaction recovery,
and queued follow-ups are included. Aborted runs do not display a completion time.

## Install

```bash
pi install npm:pi-done-at
pi install git:github.com/kslamph/pi-done-at
pi install ./pi-done-at
```

Try it for one invocation without installing:

```bash
pi -e npm:pi-done-at
pi -e ./timestamp.js
```

## Usage

Run Pi normally. After a completed agent run, the TUI shows a notification like:

```text
※ Done at 08:23:30
```

The time is the local wall-clock time of the machine running Pi and uses 24-hour
format with second precision. The date is intentionally omitted so the message
is easy to recognize after returning to an idle Pi session.

## Configuration

Zero config. No environment variables or settings keys are used.

## Security note

The extension runs in-process with Pi's OS permissions. It only listens for the
agent lifecycle event and reads the local clock. It makes no network requests,
reads no files, and writes no files.

## Update / remove / enable-disable

```bash
pi update --extensions
pi update npm:pi-done-at
pi remove pi-done-at
pi list
pi config
```

## Compatibility

Requires Pi's `@earendil-works/pi-coding-agent` extension API with the
`agent_settled` lifecycle event and `ctx.ui.notify`.

## Development

```bash
git clone https://github.com/kslamph/pi-done-at.git
cd pi-done-at
npm test
pi install ./
pi -e ./timestamp.js
```

No build step is needed; Pi loads `timestamp.js` directly.

## Release

Releases use the same tag-driven GitHub Actions workflow as the other kslamph
Pi extensions. After updating the version in `package.json` and committing it:

```bash
git tag v1.0.0
git push origin main v1.0.0
```

The `v*` tag starts `.github/workflows/release.yml`, which verifies the tag,
runs tests, creates a GitHub Release, and publishes the package to npm through
npm trusted publishing (OIDC). Before the first release, configure the npm
trusted publisher once:

```bash
npm trust github pi-done-at --repo kslamph/pi-done-at --file release.yml --allow-publish
```

## License + credits

MIT — see [LICENSE](./LICENSE). Created by kslamph.
