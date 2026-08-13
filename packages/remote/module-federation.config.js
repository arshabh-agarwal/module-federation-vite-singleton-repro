export default {
  name: "remote",
  manifest: true,
  exposes: {
    ".": "./index.js"
  },
  shared: {
    'shared-lib': {
      singleton: true
    }
  },
  dts: false
}
