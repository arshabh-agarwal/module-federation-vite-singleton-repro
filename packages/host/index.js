console.log('[host] importing shared-lib')
import 'shared-lib'
import('remote').then(() => {
  console.log('[host] remote loaded')
})
console.log('[host] evaluated')
