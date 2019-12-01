<template>
  <div>
    <el-form
      :inline="true"
      :label-position="labelPosition"
      label-width="150px"
      :model="formLabelAlign"
    >
      <el-form-item label="您的称呼">
        <el-input v-model="formLabelAlign.userName"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="formLabelAlign.realName"></el-input>
      </el-form-item>
      <el-form-item label="动工时间">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.realName" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.realName" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="formLabelAlign.Telephone"></el-input>
      </el-form-item>
      <el-form-item label="装修面积">
        <el-input v-model="formLabelAlign.userQQ"></el-input>
      </el-form-item>
      <el-form-item label="装修空间">
        <el-select v-model="formLabelAlign.realName" placeholder="未选择">
          <el-option label="住宅公寓" value=""></el-option>
          <el-option label="别墅" value=""></el-option>
          <el-option label="办公空间" value=""></el-option>
          <el-option label="厂房" value=""></el-option>
          <el-option label="展示厅" value=""></el-option>
          <el-option label="展会空间" value=""></el-option>
          <el-option label="商场超市" value=""></el-option>
          <el-option label="专卖店" value=""></el-option>
          <el-option label="休闲健身" value=""></el-option>
          <el-option label="歌舞厅" value=""></el-option>
          <el-option label="酒店宾馆" value=""></el-option>
          <el-option label="餐饮酒吧" value=""></el-option>
          <el-option label="茶楼" value=""></el-option>
          <el-option label="会所" value=""></el-option>
          <el-option label="学校" value=""></el-option>
          <el-option label="网吧" value=""></el-option>
          <el-option label="其他" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="户型结构">
        <el-select v-model="formLabelAlign.realName" placeholder="未选择">
          <el-option label="一居室" value=""></el-option>
          <el-option label="两居室" value=""></el-option>
          <el-option label="三居室" value=""></el-option>
          <el-option label="四居室" value=""></el-option>
          <el-option label="复式" value=""></el-option>
          <el-option label="别墅" value=""></el-option>
          <el-option label="跃层" value=""></el-option>
          <el-option label="其他结构" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="房屋状态">
        <el-select v-model="formLabelAlign.realName" placeholder="未选择">
          <el-option label="未买房" value=""></el-option>
          <el-option label="未交房" value=""></el-option>
          <el-option label="正准备装修" value=""></el-option>
          <el-option label="已定好装修公司" value=""></el-option>
          <el-option label="已开始装修" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="装修预算">
        <el-select v-model="formLabelAlign.realName" placeholder="未选择">
          <el-option label="3万以内" value=""></el-option>
          <el-option label="3至5万" value=""></el-option>
          <el-option label="5至8万" value=""></el-option>
          <el-option label="8至10万" value=""></el-option>
          <el-option label="10至15万" value=""></el-option>
          <el-option label="15至20万" value=""></el-option>
          <el-option label="20至30万" value=""></el-option>
          <el-option label="30至50万" value=""></el-option>
          <el-option label="50至100万" value=""></el-option>
          <el-option label="100至200万" value=""></el-option>
          <el-option label="200万以上" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="装修要求">
        <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
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