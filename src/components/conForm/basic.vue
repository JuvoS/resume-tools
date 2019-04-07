<template>
  <div>
    <Form :model="basicInfo" :label-width="80">
      <FormItem label="姓名">
        <Input v-model="basicInfo.name" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="性别">
        <RadioGroup v-model="basicInfo.sex">
          <Radio label="男">男</Radio>
          <Radio label="女">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="出生年月">
        <DatePicker type="date" placeholder="请选择" v-model="basicInfo.both"></DatePicker>
      </FormItem>
      <FormItem label="民族">
        <Input v-model="basicInfo.nation" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="籍贯">
        <Input v-model="basicInfo.place" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="政治面貌">
        <Input v-model="basicInfo.politics" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="学历">
        <Input v-model="basicInfo.education" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="毕业院校">
        <Input v-model="basicInfo.academy" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="联系电话">
        <Input v-model="basicInfo.tel" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="邮箱">
        <Input v-model="basicInfo.email" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="地址">
        <Input v-model="basicInfo.address" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="就业方向">
        <Input v-model="basicInfo.direction" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="图片地址">
        <Input v-model="basicInfo.imgurl" placeholder="请输入"></Input>
      </FormItem>
    </Form>
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
      basicInfo: this.initInfo
    };
  },
  watch: {
    basicInfo(v) {
      this.$emit("info-out", this.basicInfo);
    }
  }
};
</script>

