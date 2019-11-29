<template>
  <div>
    <div class="noLis"><p>暂无招标信息</p></div>
    <div class="lis">
      <p>{{}}平米装修招标</p>
      <p>招标编号：{{}}</p>
      <p>联系人：{{}}</p>
      <p>联系电话：{{}}</p>
      <p>装修面积：{{}}</p>
      <router-link to="/personalCenter/mytender/tenderInfor">查看招标信息</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.noLis{
  display: none;
}
.lis {
  width: 100%;
  height: 160px;
  position: relative;
  background: #ddd;
  margin-top: 20px;
  color: #888;
  font-size: 14px;
  p:first-child {
    color: #333;
  }
  a {
    font-size: 16px;
    color: #888;
    text-decoration: none;
    position: absolute;
    right: 40px;
    bottom: 10px;
  }
  a:hover {
    color: #53c380;
  }
}
</style>