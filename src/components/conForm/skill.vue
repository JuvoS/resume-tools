<template>
  <div>
    <Form :model="skillInfo" :label-width="80"></Form>
  </div>
</template>
<script>
export default {
  props: {
    initInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      skillInfo: this.initInfo
    };
  },
  watch: {
    skillInfo(v) {
      this.$emit("info-out", this.skillInfo);
    }
  }
};
</script>

