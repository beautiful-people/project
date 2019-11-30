<template>
  <div>
    <div>
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="已完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>
    <div class="lis">
      <p>招标编号：{{}}</p>
      <p>手机号码：{{}}</p>
      <p>装修类型：{{}}</p>
      <p>招标类型：{{}}</p>
      <p>动工时间：{{}}</p>
      <p>详细地址：{{}}</p>
      <p>装修面积：{{}}</p>
      <p>量房时间：{{}}</p>
      <p>装修空间：{{}}</p>
      <p>户型结构：{{}}</p>
      <p>房屋状态：{{}}</p>
      <p>装修预算：{{}}</p>
      <p>装修要求：{{}}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  
}
</script>