
<script>
export default {
  name: 'routerView',
  props: ['url'],
  computed: {
    // routerComponets() {
    //   return require('../pages/' + this.url + '.vue').default
    // }
  },
  render(h, context) {
    console.log('222', this.url, this.$router)
    return  h(this.$router.current)
  }
}
</script>

