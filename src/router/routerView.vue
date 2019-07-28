
<script>
export default {
  name: 'routerView',
  computed: {
    // routerComponets() {
    //   return require('../pages/' + this.url + '.vue').default
    // }
  },
  data() {
    return {
      path: this.$router.path
    }
  },
  watch: {
    'path': {
      handler: () => console.log('waw')
    } 
  },
  render(h, context) {
    return h(this.$router.current)
  }
}
</script>

