<template>
  <AppNavigation />
  <RouterView />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppNavigation from './components/AppNavigation.vue'
import AppFooter from './components/AppFooter.vue'

import {
  getArticles
} from './services/article/getArticles'

export default defineComponent({
  name: 'App',
  components: {
    AppNavigation,
    AppFooter,
  },
  async setup() {
    //todo test code
    let responsePromise: null | Promise<ArticlesResponse> = null
    responsePromise = getArticles(1)
    if (responsePromise !== null) {
      const response = await responsePromise
      console.log(response)
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
