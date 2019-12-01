<template>
  <div>
    <div class="noLis"><p>暂无招标信息</p></div>
    <div class="lis"  v-for="(item ,index) in newList" :key="index">
      <p>{{item.area}}平米装修招标</p>
      <p>招标编号：{{item.tenderNum}}</p>
      <p>联系电话：{{item.phone}}</p>
      <p>装修面积：{{item.area}}</p>
      <button @click="getTenderId(item.tenderId)">an</button>
      <!-- <router-link to="/personalCenter/tenderInfor" @click='getTenderId(item.tenderId)'>查看招标信息</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newList:"",
      tnderId:""
    }
  },
  created () {
    this.axios.post('/showTenderInfo', {
      accId: 1/* sessionStorage.getItem('userId') */,
      accPower: 2
    }) // 后台请求地址
    .then(res => {
      console.log('获取用户信息：', res.data.data.tenders)
      this.newList = res.data.data.tenders;
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    getTenderId(oldTenderId) {      
      this.tenderId = sessionStorage.setItem("tenderId",oldTenderId);
      this.$router.push("/personalCenter/tenderInfor")
    } 
  }
};
</script>

<style lang="less" scoped>
.noLis{
  display: none;
}
.lis {
  text-align: left;
  width: 100%;
  height: 140px;
  position: relative;
  // background: #ddd;
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