<template>
  <div>
    <h3>个人资料</h3>
    <el-form
      :inline="true"
      :label-position="labelPosition"
      label-width="150px"
      :model="formLabelAlign"
    >

      <el-form-item label="真实姓名">
        <el-input v-model="formLabelAlign.realName" disabled>{{formLabelAlign.realName}}</el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="formLabelAlign.userPhone" clearable validate-event="false"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <!-- <el-radio-group v-model="formLabelAlign.userSex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group> -->
        <el-input v-model="formLabelAlign.userSex" disabled></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-input v-model="formLabelAlign.userBirthday" disabled></el-input>
      </el-form-item>
      <el-form-item label="座机电话">
        <el-input v-model="formLabelAlign.userTelephone" disabled></el-input>
      </el-form-item>
      <el-form-item label="QQ号码">
        <el-input v-model="formLabelAlign.userQQ" disabled></el-input>
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="formLabelAlign.userEmail" disabled></el-input>
      </el-form-item>
      <div class="Btn">
        <el-form-item>
          <el-button class="confirmBtn" @click="onSubmit(formLabelAlign.userPhone)">保存修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </div>
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
    onSubmit(tel) {
      // 验证是否为手机号
      isPhoneAvailable (tel);
      function isPhoneAvailable (tel) {
        var telReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!telReg.test(tel)) {
          alert("请输入正确的手机号码");
        } else {
          console.log(tel);
          this.axios.post('/changeUserPhone', {
            userId: sessionStorage.getItem('userId'),
            userPhone: tel/* sessionStorage.getItem('userId') */
          }) // 后台请求地址
          .then(res => {
            console.log('：', res.data.code)
          })
          .catch(err => {
            console.log(err)
          })
        }
      } 
    }
  },
  created () {
    this.axios.post('/showUserInfo', {
      userId: sessionStorage.getItem('accountId')/* sessionStorage.getItem('userId') */
    }) // 后台请求地址
    .then(res => {
      console.log('获取用户信息：', res.data.data.users)
      this.formLabelAlign = res.data.data.users[0]
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