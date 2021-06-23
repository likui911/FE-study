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
import { postLogin } from './services/auth/postLogin'

export default defineComponent({
  name: 'App',
  components: {
    AppNavigation,
    AppFooter,
  },
  async setup() {
    let responsePromise: null | Promise<UserResponse> = null
    responsePromise = postLogin({ email: '', password: "" })

    //todo 错误数据的处理
    responsePromise.then(r => { console.log(r) }).catch(errors => {
      errors.then((er: any) => {
        console.log(er?.errors)
      })
    })
    return {}
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
