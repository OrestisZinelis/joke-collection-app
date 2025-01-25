import { createRouter, createWebHistory } from 'vue-router'
import JokesView from '@/views/Jokes/JokesView.vue'
import CollectionView from '@/views/Collection/CollectionView.vue'
import ErrorView from '@/views/ErrorView.vue'

export const RouteNames = {
  Jokes: 'jokes',
  Collection: 'collection',
  Error: 'error',
}

const routes = [
  {
    path: '/',
    name: RouteNames.Jokes,
    component: JokesView,
  },
  {
    path: '/collection',
    name: RouteNames.Collection,
    component: CollectionView,
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all for 404 errors
    name: RouteNames.Error,
    component: ErrorView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
