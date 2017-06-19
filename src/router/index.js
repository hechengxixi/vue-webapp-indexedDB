import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import edit from '@/view/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    }
  ]
})
