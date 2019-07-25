
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
      handler: 'getCurrent',
      immediate: true
    }
  },
  methods: {
    getCurrent() {
      this.$router.getCurrent()
    }
  },
  render(h, context) {
    return  h(this.$router.getCurrent())
  }
}
</script>

