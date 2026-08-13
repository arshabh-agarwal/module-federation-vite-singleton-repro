import { federation } from "@module-federation/vite"
import moduleFederationConfig from './module-federation.config.js'

export default {
  plugins: [federation(moduleFederationConfig)]
}
