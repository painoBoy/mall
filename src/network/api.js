import axios from './axios'

export function getHomeMultidata() {//获取首页轮播图菜单数据
    return axios({
      url: '/home/multidata'
    })
  }

  export function getGoodsData(type,page) {//获取tab数据
    return axios({
      url: '/home/data',
      params: {
        type,
        page
      }
    })
  }