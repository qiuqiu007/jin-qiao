<template>
  <div class="app-container">
    lll
  </div>
</template>

<script>
import { getStoreView } from '@/api/home';
export default {
  components: { },
  data() {
    return {
    }
  },
  mounted() {
    getStoreView().then(res =>{
      console.log(res)
    }).catch(err=>{})
  },
  methods: {
  }
}
</script>
<style lang="scss">

</style>
