<template>
  <div>
    <h3>修改密码</h3>
    <el-form
      :inline="true"
      :label-position="labelPosition"
      label-width="150px"
      :model="formLabelAlign"
    >
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.userName"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="formLabelAlign.realName"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="formLabelAlign.userPhone"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="formLabelAlign.userSex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-input v-model="formLabelAlign.userBirthday"></el-input>
      </el-form-item>
      <el-form-item label="座机电话">
        <el-input v-model="formLabelAlign.Telephone"></el-input>
      </el-form-item>
      <el-form-item label="QQ号码">
        <el-input v-model="formLabelAlign.userQQ"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="formLabelAlign.userEmail"></el-input>
      </el-form-item>
      <div class="Btn">
        <el-form-item>
          <el-button class="confirmBtn" @click="onSubmit">保存修改</el-button>
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
        userName: '',
        realName: '',
        userPhone: '',
        userSex: '',
        userBirthday: '',
        Telephone: '',
        userQQ: '',
        userEmail: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>