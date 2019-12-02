<template>
  <div>
    <h3>招标详情</h3>
    <!-- <div>
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="招标详情"></el-step>
        <el-step title="是否中标"></el-step>
        <el-step title="施工阶段"></el-step>
        <el-step title="圆满完工"></el-step>
      </el-steps>
    </div> -->
    <div class="lis">
      <p>招标编号：{{newList.tenderNum}}</p>
      <p>联系方式：{{newList.phone}}</p>
      <p>动工时间：{{newList.startTime}}</p>
      <p>工期：{{newList.timeForProject}}</p>
      <p>装修面积：{{newList.area}}</p>
      <p>项目名称：{{newList.calusename}}</p>
      <p>地点：{{newList.location}}</p>
      <p>招标开始时间：{{newList.tenderStartTime}}</p>
      <p>招标结束时间：{{newList.tenderEndTime}}</p>
      <p>户型结构：{{newList.familyStructure}}</p>
      <p>房屋状态：{{newList.houseSituation}}</p>
      <p>装修预算：{{newList.decorationBudget}}</p>
      <p>装修要求：{{newList.fitmenRequest}}</p>
      <p>中标商家：</p>
      <p>此标状态：{{newList.state}}</p>
    </div>
    <el-table :data="newList" style="width: 100%" max-height="250">
    <el-table-column prop="merName" label="商家名称" width="120">
    </el-table-column>
    <el-table-column
      prop="freeBudget"
      label="免费上门做预算"
      width="120">
    </el-table-column>
    <el-table-column
      prop="freeDesign"
      label="免费设计"
      width="120">
    </el-table-column>
    <el-table-column
      prop="initialOffer"
      label="报价"
      width="100">
    </el-table-column>
    <el-table-column
      prop="quoteExplain"
      label="报价及方案说明"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, newList)"
          type="text"
          size="small">
          允许中标
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      newList:""
    }
  },
  created () {
      this.axios.post('/showTenderAndMerInfo', {
      tenderId: sessionStorage.getItem("tenderId")
    }) // 后台请求地址
    .then(res => {
      console.log('获取用户信息：', res.data.data.bids)
      this.newList = res.data.data.tender
    })
    .catch(err => {
      console.log(err)
    })
  },
}
</script>

<style lang="less" scoped>

  .lis{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    p{
      width: 360px;
    }
  }

</style>