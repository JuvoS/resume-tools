<template>
  <div class="book">
    <div class="book-content" id="bookContent">
      <con-form :dataInfo="dataInfo" :basicInfo="basicInfo"></con-form>
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
        <div class="book-footer-menu-item" @click="onDraClick('skill')">个人技能</div>
        <div class="book-footer-menu-item" @click="onDraClick('work')">工作经历</div>
        <div class="book-footer-menu-item" @click="onDraClick('project')">项目经验</div>
        <div class="book-footer-menu-item" @click="onDraClick('prize')">奖项荣誉</div>
        <div class="book-footer-menu-item" @click="onDraClick('eval')">自我评价</div>
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
    <Drawer :title="draTitle" v-model="draState" width="400" :mask="false">
      <div class="drawer-form">
        <div v-show="dataInfo=='basic' || dataInfo =='all'">
          <basic-info :initInfo="basicInfo" @info-out="onBasicInfo"></basic-info>
        </div>
        <div v-show="dataInfo=='skill' || dataInfo =='all'">
          <skill-info :initInfo="skillInfo" @info-out="onSkillInfo"></skill-info>
        </div>
        <div v-show="dataInfo=='work' || dataInfo =='all'">
          <work-info :initInfo="workInfo" @info-out="onWorkInfo"></work-info>
        </div>
        <div v-show="dataInfo=='project' || dataInfo =='all'">project Info</div>
        <div v-show="dataInfo=='prize' || dataInfo =='all'">prize Info</div>
        <div v-show="dataInfo=='eval' || dataInfo =='all'">evaluate Info</div>
      </div>
      <div class="drawer-footer">
        <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
        <Button type="primary" @click="value3 = false">Submit</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
import ColorPaint from "../components/colorPaint";
import ConForm from "../components/conForm";
import BasicInfo from "../components/conForm/basic";
import SkillInfo from "../components/conForm/skill";
import WorkInfo from "../components/conForm/work";
import localForage from "localforage";
export default {
  components: { ColorPaint, ConForm, BasicInfo, SkillInfo, WorkInfo },
  data() {
    return {
      lforage: undefined,
      colorState: false,
      draTitle: "Basic Drawer",
      draState: false,
      basicData: {
        name: "JuvoS",
        sex: "男",
        both: "1995.09.02"
      },
      dataInfo: "all",
      htmlTitle: "qwerdf", //这个是pdf文件的名字
      basicInfo: {},
      skillInfo: {},
      workInfo: []
    };
  },
  watch: {
    draState(v) {
      if (!v) return (this.dataInfo = "all");
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.lforage = localForage.createInstance({
        name: "resume"
      });
      this.lforage.getItem("basic").then(res => {
        console.log("getItem", res);
        this.basicInfo = res;
      });
      this.lforage.getItem("work").then(res => {
        console.log("getItem", res);
        this.workInfo = res;
      });
    },
    onDraClick(v) {
      this.draState = !this.draState;
      this.draTitle = v;
      this.dataInfo = v;
    },
    onBasicInfo(v) {
      this.basicInfo = v;
      this.lforage.setItem("basic", v).then(res => {
        this.$Message.success("更新基本信息成功");
      });
    },
    onSkillInfo(v) {
      this.skillInfo = v;
    },
    onWorkInfo(v) {
      this.workInfo = v;
      this.lforage.setItem("work", v).then(res => {
        this.$Message.success("更新工作经历成功");
      });
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
.drawer-form {
  height: calc(100% - 60px);
  overflow-y: auto;
  padding-right: 5px;
}
.drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
</style>
