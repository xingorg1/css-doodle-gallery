<template>
  <Header />
  <!-- <axe-button @click="axeFn" type="primary">下载图片</axe-button> -->
</template>

<script>
import Header from './Header'
export default {
  components: {
    Header
  },
  setup: (props, context) => {
    console.log(props, context)
    function axeFn() {
      console.log(1231)
    }
    return {
      msg: '1232',
      axeFn
    }
  }
}
</script>

<style scoped>

</style>
