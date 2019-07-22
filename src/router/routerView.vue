
<script>
export default {
  name: 'routerView',
  props: ['url'],
  computed: {
    routerComponets() {
      return require('../pages/' + this.url + '.vue').default
    }
  },
  render(h) {
    return  h(this.routerComponets)
  }
}
</script>

