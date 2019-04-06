<template>
  <div>
    <div v-show="dataInfo=='basic' || dataInfo =='all'">basic Info</div>
    <div v-show="dataInfo=='skill' || dataInfo =='all'">skill Info</div>
    <div v-show="dataInfo=='work' || dataInfo =='all'">work Info</div>
    <div v-show="dataInfo=='project' || dataInfo =='all'">project Info</div>
    <div v-show="dataInfo=='prize' || dataInfo =='all'">prize Info</div>
    <div v-show="dataInfo=='eval' || dataInfo =='all'">evaluate Info</div>
  </div>
</template>

<script>
export default {
  props: {
    dataInfo: {
      type: String,
      default: "all"
    }
  },
  watch: {
    dataInfo(v) {
      console.log(v);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
