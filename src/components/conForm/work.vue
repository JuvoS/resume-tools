<template>
  <div>
    <Form :model="addInfo" :label-width="80">
      <FormItem label="时间">
        <DatePicker
          format="yyyy/MM/dd"
          type="daterange"
          placement="bottom-end"
          placeholder="Select date"
          style="width: 200px"
          v-model="addInfo.time"
        ></DatePicker>
      </FormItem>
      <FormItem label="名称">
        <Input v-model="addInfo.name" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="内容">
        <Input
          v-model="addInfo.content"
          type="textarea"
          :autosize="{minRows: 2,maxRows: 5}"
          placeholder="Enter something..."
        ></Input>
      </FormItem>
      <FormItem>
        <Button @click="onAddInfo">增加</Button>
      </FormItem>
    </Form>

    <Table :columns="columns" :data="workInfo">
      <template slot-scope="{ row, index }" slot="time">
        <Input type="text" v-model="editTime" v-if="editIndex === index"/>
        <span v-else>{{ row.time }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="name">
        <Input type="text" v-model="editName" v-if="editIndex === index"/>
        <span v-else>{{ row.name }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="content">
        <Input type="text" v-model="editContent" v-if="editIndex === index"/>
        <span v-else>{{ row.content }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="action">
        <div v-if="editIndex === index">
          <Button @click="handleSave(index)">保存</Button>
          <Button @click="editIndex = -1">取消</Button>
        </div>
        <div v-else>
          <Button @click="handleEdit(row, index)">操作</Button>
        </div>
      </template>
    </Table>
  </div>
</template>
<script>
export default {
  props: {
    initInfo: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      workInfo: [],
      addInfo: {},
      columns: [
        {
          title: "时间",
          slot: "time"
        },
        {
          title: "名称",
          slot: "name"
        },
        {
          title: "内容",
          slot: "content"
        },
        {
          title: "操作",
          slot: "action"
        }
      ],
      editIndex: -1,
      editTime: "",
      editName: "",
      editContent: ""
    };
  },
  watch: {
    workInfo(v) {
      this.$emit("info-out", this.workInfo);
    }
  },
  mounted() {
    if (this.initInfo != []) this.workInfo = this.initInfo;
  },
  methods: {
    handleSave() {},
    handleEdit() {},
    onAddInfo() {
      console.log(this.addInfo);
      this.workInfo.push(this.addInfo);
    }
  }
};
</script>

