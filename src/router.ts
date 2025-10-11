import { createRouter, createWebHashHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'
import QRCodePage from '@/pages/QRPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Index Page',
    },
  },
  {
    path: '/qr-code',
    component: QRCodePage,
    meta: { title: 'QR Code Component' },
  },
]

const router = createRouter({
  history: createWebHashHistory('/FrontendMentorChallenges/'),
  routes,
})

export default router
