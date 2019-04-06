<template>
  <div class="book">
    <div class="book-content" id="bookContent">
      <con-form :dataInfo="dataInfo"></con-form>
    </div>
    <div class="book-footer">
      <div class="book-footer-menu">
        <div
          class="book-footer-item"
          @mouseover="colorState = true"
          @mouseleave="colorState = false"
        >
          <a class="book-footer-color"></a>
          <div class="book-color-paint" v-show="colorState">
            <color-paint></color-paint>
          </div>
        </div>
        <a class="book-footer-menu-item" @click="onDraClick('basic')">
          <Icon color="#00ff00" size="18" type="ios-checkmark-circle-outline"/>基本信息
        </a>
        <div class="book-footer-menu-item">个人技能</div>
        <div class="book-footer-menu-item">工作经历</div>
        <div class="book-footer-menu-item">项目经验</div>
        <div class="book-footer-menu-item">奖项荣誉</div>
        <div class="book-footer-menu-item">自我评价</div>
      </div>
      <div class="book-footer-bar">
        <a class="book-footer-btn">模板选择</a>
        <a class="book-footer-item">
          <Icon :size="20" type="ios-cloud-upload-outline"/>
        </a>
        <a class="book-footer-item">
          <Icon :size="20" type="ios-cloud-download" @click="toPdf('bookContent')"/>
        </a>
      </div>
    </div>
    <Drawer :title="draTitle" v-model="draState"></Drawer>
  </div>
</template>

<script>
import ColorPaint from "../components/colorPaint";
import ConForm from "../components/conForm";
export default {
  components: { ColorPaint, ConForm },
  data() {
    return {
      colorState: true,
      draTitle: "Basic Drawer",
      draState: false,
      basicData: {
        name: "JuvoS",
        sex: "男",
        both: "1995.09.02"
      },
      dataInfo: "all",
      htmlTitle: "qwerdf" //这个是pdf文件的名字
    };
  },
  watch: {
    draState(v) {
      if (!v) return (this.dataInfo = "all");
    }
  },
  methods: {
    onDraClick(v) {
      this.draState = !this.draState;
      this.draTitle = v;
      this.dataInfo = v;
    }
  }
};
</script>

<style lang="less" scoped>
.book {
  height: 100%;
  width: 100%;
  position: relative;
  &-content {
    height: calc(100% - 50px);
    width: 100%;
  }
  &-footer {
    width: 100%;
    height: 50px;
    box-shadow: #666 0px 10px 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &-menu {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      &-item {
        margin: 15px 0;
        padding: 0 10px;
        height: 20px;
        line-height: 20px;
        border-right: 1px solid #efefef;
        color: #666;
      }
      &-item:last-child {
        border-right: none;
      }
    }
    &-bar {
      width: 220px;
      padding-right: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    &-btn {
      border: 1px solid #cccccc;
      border-radius: 4px;
      height: 30px;
      padding: 5px 10px;
      margin: 10px;
      display: block;
    }
    &-item {
      border: 1px solid #cccccc;
      border-radius: 4px;
      height: 30px;
      line-height: 30px;
      width: 30px;
      margin: 10px;
    }
    &-color {
      height: 20px;
      width: 20px;
      margin: 4px;
      border-radius: 2px;
      background: #666;
      display: block;
    }
  }
}
.book-color-paint {
  position: absolute;
  bottom: 45px;
  left: 10px;
}
</style>
