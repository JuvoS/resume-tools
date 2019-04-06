<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider collapsible :collapsed-width="60" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <span class="logo-txt">TIME</span>
          <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="ios-navigate"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="ios-navigate"></Icon>
            <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
        <Content class="lay-content">
          <div class="lay-content-right">
            <Affix :offset-top="80" class="lay-content-affix">
              <Timeline>
                <TimelineItem color="green">发布1.0版本</TimelineItem>
                <TimelineItem color="green">发布2.0版本</TimelineItem>
                <TimelineItem color="red">严重故障</TimelineItem>
                <TimelineItem color="blue">发布3.0版本</TimelineItem>
              </Timeline>
            </Affix>
          </div>
          <div class="lay-content-aritcle">
            <Row>
              <Col span="4" v-for="(item,key) in resumeList" :key="key">
                <Card style="width:100%">
                  <div style="text-align:center">
                    <img src="../assets/logo.png" style="height:30px;">
                    <h3>{{item.title}}</h3>
                  </div>
                </Card>
              </Col>
            </Row>
            <div>
              <reForm></reForm>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import reForm from "../components/form";
export default {
  components: { reForm },
  data() {
    return {
      isCollapsed: true,
      resumeList: [
        {
          title: "基本信息"
        },
        {
          title: "个人经历"
        },
        {
          title: "工作经历"
        },
        {
          title: "项目经验"
        },
        {
          title: "奖项荣誉"
        },
        {
          title: "自我评价"
        }
      ]
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  mounted() {
    // this.$http.get("data/basic.json").then(res => {
    // console.log("json数据为:", res.body);
    // });
  }
};
</script>
<style lang="less" scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 60px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}

.ivu-menu-vertical .ivu-menu-item,
.ivu-menu-vertical .ivu-menu-submenu-title {
  padding: 10px;
}
.logo-txt {
  height: 64px;
  line-height: 64px;
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
}
.lay-content {
  position: relative;
  padding: 16px;
  width: 100%;
  &-right {
    float: right;
    width: 180px;
    overflow: hidden;
    padding-left: 30px;
  }
  &-aritcle {
    margin-right: 180px;
  }
  &-affix {
    z-index: 99;
  }
}
</style>