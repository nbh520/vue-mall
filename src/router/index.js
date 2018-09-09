import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title.vue'
import Image from '@/views/Image.vue'
import Cart from '@/views/cart.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'GoodsList',
      components: {
        default: GoodsList,
        title: Title,
        img: Image
      },
    },
    {
      path: '/cart/:carted',
      name: 'cart',
      component: Cart
    }
  ]
})
