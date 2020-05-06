import gallery from './gallery.vue'

gallery.install = function (Vue) {
  Vue.component(gallery.name, gallery)
}

// if ( typeof window !== 'undefined' && window.Vue ) {
//   install(window.Vue);
// }

export default gallery
 