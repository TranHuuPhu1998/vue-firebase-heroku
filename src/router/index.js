import Vue from 'vue'
import Router from 'vue-router'
import Daskboard  from '@/components/Daskboard'
import EditEmployess  from '@/components/EditEmployess'
import NewEmployees  from '@/components/NewEmployees'
import ViewEmployess  from '@/components/ViewEmployess'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'daskboard',
      component: Daskboard
    },
    {
      path: '/edit/:emloyee_id',
      name: 'edit-employess',
      component: EditEmployess
    },
    {
      path: '/new',
      name: 'new-employees',
      component: NewEmployees
    },
    {
      path: '/:employee_id',
      name: 'view-employess',
      component: ViewEmployess
    }
  ]
})
