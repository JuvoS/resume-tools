<template>
  <div class="large">
    <div class="large-back">
      <span class="large-back-txt">PERSONAL GREAT</span>
    </div>
    <button class="large-back-btn">BRAND</button>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.large {
  width: 22rem;
  background: #aeaab8;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #ffffff;
  &-back {
    z-index: 8;
    &-txt {
      font-size: 3rem;
      line-height: 2.8rem;
      font-weight: 900;
      margin: 2rem auto;
    }
    &-btn {
      border-radius: 1rem;
      border: none;
      background: #fbc620;
      height: 1.5rem;
      width: 5rem;
      padding: 0.2rem;
      margin: 0.5rem auto;
    }
  }
}
</style>
