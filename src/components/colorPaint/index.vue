<template>
  <div class="color-picker">
    <div class="color-picker-tangle"></div>
    <div class="color-picker-tangle2"></div>
    <div class="color-picker-pane">
      <div class="color-picker-pane-item" v-for="(item,key) in colorData" :key="key">
        <a class="color-picker-pane-color" :style="{background: item.color}"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colorData: []
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.colorData.push({ color: "#ff" + i });
    }
  }
};
</script>

<style lang="less" scoped>
.color-picker {
  width: 290px;
  background: rgb(255, 255, 255);
  border: 0px solid rgba(0, 0, 0, 0.25);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  border-radius: 2px;
  position: relative;
  &-tangle {
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 10px 9px 0px;
    border-color: rgba(0, 0, 0, 0.1) transparent transparent;
    position: absolute;
    bottom: -11px;
    left: 6px;
  }
  &-tangle2 {
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 10px 9px 0px;
    border-color: rgb(255, 255, 255) transparent transparent;
    position: absolute;
    bottom: -10px;
    left: 6px;
  }
  &-pane {
    display: grid;
    grid-template-columns: 40px 40px 40px 40px 40px 40px 40px;
    grid-row-gap: 0px;
    padding: 5px;
    &-item {
      border: 1px solid #eeeeee;
      border-radius: 4px;
      height: 30px;
      line-height: 30px;
      width: 30px;
      margin: 5px;
    }
    &-color {
      height: 20px;
      width: 20px;
      margin: 4px;
      border-radius: 2px;
      display: block;
    }
  }
}
</style>

