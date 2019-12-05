<template>
  <div>
    <h3>个人资料</h3>
    <el-form
      :inline="true"
      :label-position="labelPosition"
      label-width="150px"
      :model="formLabelAlign"
    >

      <el-form-item label="商家全称">
        <el-input v-model="formLabelAlign.merName" disabled>{{formLabelAlign.realName}}</el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="formLabelAlign.merFourPhone" disabled></el-input>
      </el-form-item>
      <el-form-item label="服务区域">
        <!-- <el-radio-group v-model="formLabelAlign.userSex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group> -->
        <el-input v-model="formLabelAlign.merServeArea" disabled></el-input>
      </el-form-item>
      <el-form-item label="业务范围">
        <el-input v-model="formLabelAlign.merCoverage" disabled></el-input>
      </el-form-item>
      <el-form-item label="经营模式">
        <el-input v-model="formLabelAlign.merPattern" disabled></el-input>
      </el-form-item>
      <el-form-item label="商家类型">
        <el-input v-model="formLabelAlign.merType" disabled></el-input>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-input v-model="formLabelAlign.userDate" disabled></el-input>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="formLabelAlign.merAddress" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {

      }
    };
  },
  methods: {
  
  },
  created () {
    this.axios.post('/showMerchantInfo', {
      // accId: 1
      // userId: sessionStorage.getItem('userId'),
      /* sessionStorage.getItem('userId') */
    }) // 后台请求地址
    .then(res => {
      console.log(res)
      // console.log('获取用户信息：', res.data.data.users)
      this.formLabelAlign = res.data.data.merchants[0]
    })
    .catch(err => {
      console.log(err)
    })
  },
  rules: {
    name: {
      required: true, 
      message: '请输入正确手机号'
    }
  }
};
</script>

<style lang="less" scoped>
  .Btn{
    margin-left: 100px;
    .confirmBtn{
      background: #53C380;
      color: #fff;
    }
  }
</style>