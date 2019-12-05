<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="ind=0">类型1</el-menu-item>
      <el-menu-item index="2" @click="fn">类型2</el-menu-item>
      <el-menu-item index="3" @click="fnn">类型3</el-menu-item>
    </el-menu>
    <div v-show="ind===0">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="消息内容">
                <span>{{ props.row.messageContent }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="开始时间" prop="startTime" width="90px"></el-table-column>
        <el-table-column label="结束时间" prop="tenderEndTime" width="90px"></el-table-column>
        <el-table-column label="项目名称" prop="calusename" row-style="height: 57px; overflow: hidden"></el-table-column>
        <el-table-column label="项目面积" prop="area" width="90px"></el-table-column>
        <el-table-column label="招标状态" prop="state" width="120px"></el-table-column>
      </el-table>
    </div>
    <div v-show="ind===1">
      <el-table :data="tableDatas" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="消息内容">
                <span>{{ props.row.messageContent }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="开始时间" prop="startTime" width="90px"></el-table-column>
        <el-table-column label="结束时间" prop="tenderEndTime" width="90px"></el-table-column>

        <el-table-column label="项目名称" prop="calusename" row-style="height: 57px; overflow: hidden"></el-table-column>
        <el-table-column label="项目面积" prop="area" width="90px"></el-table-column>
        <el-table-column label="招标状态" prop="state" width="120px"></el-table-column>
      </el-table>
    </div>

    <div v-show="ind===2">
      <el-table :data="tableDatass" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="消息内容">
                <span>{{ props.row.messageContent }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="开始时间" prop="startTime" width="90px"></el-table-column>
        <el-table-column label="结束时间" prop="tenderEndTime" width="90px"></el-table-column>
        <el-table-column label="项目名称" prop="calusename" row-style="height: 57px; overflow: hidden"></el-table-column>
        <el-table-column label="项目面积" prop="area" width="90px"></el-table-column>
        <el-table-column label="招标状态" prop="state" width="120px"></el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
export default {
  methods: {

  },
  data() {
  },
  created() {
    
  },
};
</script>

<style lang="less" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 80%;
}
</style>