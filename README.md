# Module Federation (Vite) — shared singleton module evaluated twice

## Setup

```
pnpm install
```

## Run

```
pnpm --filter remote dev   # http://localhost:5173
pnpm --filter host dev     # http://localhost:5174
```

## Reproduce

Open http://localhost:5174 in a browser with devtools console open.

## Configuration

`host` declares `shared-lib` as an eager singleton:

```js
shared: {
  'shared-lib': {
    eager: true,
    singleton: true
  }
}
```

`remote` declares `shared-lib` as a (lazy) singleton:

```js
shared: {
  'shared-lib': {
    singleton: true
  }
}
```

Both `host` and `remote` resolve `shared-lib` to the same `1.0.0` version (a pnpm
workspace package).

## Expected

`[shared-lib] evaluated` printed once.

## Actual

`[shared-lib] evaluated` printed twice, from two different URLs:

```
[shared-lib] evaluated  (http://localhost:5174/@fs/.../packages/shared-lib/index.js:1)
[shared-lib] evaluated  (http://localhost:5173/@fs/.../packages/shared-lib/index.js:1)
```

Full console output when loading http://localhost:5174:

```
[vite] connecting...
[vite] connected.
[shared-lib] evaluated                 (localhost:5174)
[vite] connecting...
[vite] connected.
[shared-lib] evaluated                 (localhost:5173)
[remote] importing shared-lib
[remote] evaluated
[host] importing shared-lib
[host] evaluated
[host] remote loaded
```

No shared-module version-mismatch warning is logged by the federation runtime.

## Note on `eager`

The same double-evaluation occurs regardless of whether `remote` sets `eager: true`
for `shared-lib` or not. This repo uses the more conventional pattern (host eager,
remote lazy) shown above. A version with `eager: true` on both `host` and `remote`
produces the identical result.
