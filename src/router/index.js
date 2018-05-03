import Vue from 'vue'
import Router from 'vue-router'

//引入tabbar组件
import Home from "@/components/tabbar/home"
import Member from "@/components/tabbar/member"
import Cart from "@/components/tabbar/cart"
import Search from "@/components/tabbar/search"

// 引入商品页面
import GoodsList from "@/components/goods/list"
import GoodDetail from "@/components/goods/detail"

//引入新闻页面
import NewsList from "@/components/news/list"
import NewsDetail from "@/components/news/detail"

//引入图片页面
import PicList from "@/components/pictures/list"
import PicDetail from "@/components/pictures/detail"

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/goods',
      component: GoodsList
    },
    {
      path: '/goods/detail',
      component: GoodDetail
    },
    {
      path: '/news',
      component: NewsList
    },
    {
      path: '/news/detail/:id',
      component: NewsDetail
    },
    {
      path: '/pics',
      component: PicList
    },
    {
      path: '/pics/detail',
      component: PicDetail
    }
  ],
  linkActiveClass: "mui-active"
})
