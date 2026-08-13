export default {
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:5173/mf-manifest.json'
  },
  shared: {
    'shared-lib': {
      eager: true,
      singleton: true
    }
  },
  dts: false
}
