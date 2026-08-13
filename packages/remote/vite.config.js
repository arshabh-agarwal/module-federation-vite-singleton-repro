import { federation } from "@module-federation/vite"
import moduleFederationConfig from './module-federation.config.js'

export default {
  server: {
    origin: 'http://localhost:5173'
  },
  plugins: [federation(moduleFederationConfig)]
}
