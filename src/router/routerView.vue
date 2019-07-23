
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
    console.log('from router-view:', this.$router.getCurrent())
    return  h(this.$router.getCurrent())
  }
}
</script>

