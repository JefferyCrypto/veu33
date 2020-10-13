import table from './table/table.vue'

const Compoents = [
  table,
]

// register vue plugin
export default {
  version: '1.0.0',
  install (vm, option) {
    Compoents.forEach(com => {
      vm.component(com.name, com)
    })
  }
}