export default {
  name: "remote",
  manifest: true,
  exposes: {
    ".": "./index.js"
  },
  shared: {
    'shared-lib': {
      eager: true,
      singleton: true
    }
  },
  dts: false
}
