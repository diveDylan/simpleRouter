<template>
  <div id="app">
   <button @click="nav('index')">index</button>
   <button @click="nav('travel')">travel</button>
   <button @click="replace('index')">replace</button>
   <router-view :key="current" v-if="current"></router-view>
  </div>
</template>

<script>
import RouterView from '@/router/routerView.vue'
export default {
  name: 'app',
  components: {
    RouterView
  },
  data() {
    return {
      current: this.$router.path,
    }
  },
  mounted() {
  },
  methods: {
    async nav(params) {
      await this.$router.push(params)
      this.current = params
    },
    async replace(params) {
      await this.$router.replace(params)
      this.current = params
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
