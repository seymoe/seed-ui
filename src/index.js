import Button from '~/button'
import Calendar from '~/calendar'

const SEED_UI_VERSION = '0.0.1'
const components = [
  Button,
  Calendar
]

const install = function (Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(Window.Vue)
}

export default {
  version: SEED_UI_VERSION,
  install,
  ...components
}
