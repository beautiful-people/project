<template>
  <div>
    <el-form
      :inline="true"
      :rules="rules"
      :label-position="labelPosition"
      label-width="150px"
      :model="ruleForm"
      ref="ruleForm"
    >
      <el-form-item label="联系人" prop="linkMan">
        <el-input v-model="ruleForm.linkMan"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="项目名称" prop="calusename">
        <el-input v-model="ruleForm.calusename"></el-input>
      </el-form-item>
      <el-form-item label="装修面积" prop="area">
        <el-input v-model="ruleForm.area"></el-input>
      </el-form-item>
      <el-form-item label="地点" prop="location">
        <el-input v-model="ruleForm.location"></el-input>
      </el-form-item>
      <el-form-item label="工期" prop="timeForProject">
        <el-input v-model="ruleForm.timeForProject"></el-input>
      </el-form-item>
      <el-form-item label="预计开工时间">
        <el-form-item prop="startTime">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.startTime"
            style="width: 190px;"
          ></el-date-picker>
        </el-form-item>
      </el-form-item>
      <el-form-item label="户型结构" prop="familyStructure">
        <el-select v-model="ruleForm.familyStructure" placeholder="未选择" style="width: 202px;">
          <el-option label="一居室" value="一居室"></el-option>
          <el-option label="两居室" value="两居室"></el-option>
          <el-option label="三居室" value="三居室"></el-option>
          <el-option label="四居室" value="四居室"></el-option>
          <el-option label="复式" value="复式"></el-option>
          <el-option label="别墅" value="别墅"></el-option>
          <el-option label="跃层" value="跃层"></el-option>
          <el-option label="其他结构" value="其他结构"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="招标开始时间">
        <el-form-item prop="tenderStartTime">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.tenderStartTime"
            style="width: 190px;"
          ></el-date-picker>
        </el-form-item>
      </el-form-item>

      <el-form-item label="房屋现状" prop="housingSituation">
        <el-select v-model="ruleForm.housingSituation" placeholder="未选择" style="width: 202px;">
          <el-option label="未买房" value="未买房"></el-option>
          <el-option label="未交房" value="未交房"></el-option>
          <el-option label="正准备装修" value="正准备装修"></el-option>
          <el-option label="已定好装修公司" value="已定好装修公司"></el-option>
          <el-option label="已开始装修" value="已开始装修"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="招标结束时间">
        <el-form-item prop="tenderEndTime">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.tenderEndTime"
            style="width: 190px;"
          ></el-date-picker>
        </el-form-item>
      </el-form-item>

      <el-form-item label="装修预算" prop="decorationBudget">
        <el-select v-model="ruleForm.decorationBudget" placeholder="未选择" style="width: 202px;">
          <el-option label="3万以内" value="3"></el-option>
          <el-option label="3至5万" value="3-5"></el-option>
          <el-option label="5至8万" value="5-8"></el-option>
          <el-option label="8至10万" value="8-10"></el-option>
          <el-option label="10至15万" value="10-15"></el-option>
          <el-option label="15至20万" value="15-20"></el-option>
          <el-option label="20至30万" value="20-30"></el-option>
          <el-option label="30至50万" value="30-50"></el-option>
          <el-option label="50至100万" value="50-100"></el-option>
          <el-option label="100至200万" value="100-200"></el-option>
          <el-option label="200万以上" value="200+"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="装修详细要求" style="margin-left: 54px;" prop="fitmentRequest">
        <el-input type="textarea" rows="4" v-model="ruleForm.fitmentRequest" style="width: 560px;"></el-input>
      </el-form-item>
      <el-form-item label="投标公司要求" style="margin-left: 54px;" prop="compayRequest">
        <el-input type="textarea" rows="4" v-model="ruleForm.compayRequest" style="width: 560px;"></el-input>
      </el-form-item>
      <el-form-item style="margin-left: 54px;">
        <el-button type="primary" @click="submitForm('ruleForm')">立即发布</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      ruleForm: {
        linkMan: "",
        phone: "",
        calusename: "",
        area: "",
        location: "",
        timeForProject: "",
        startTime: "",
        familyStructure: "",
        tenderStartTime: "",
        housingSituation: "",
        tenderEndTime: "",
        decorationBudget: "",
        fitmentRequest: "",
        compayRequest: ""
      },
      rules: {
        linkMan: [
          { required: true, message: "请输入联系人名称", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入联系方式", trigger: "blur" },
          {
            pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
            message: "手机号码格式不正确",
            trigger: "blur"
          }
        ],
        calusename: [
          { required: true, message: "请输入项目名称", trigger: "blur" }
        ],
        area: [
          { required: true, message: "请填写装修面积", trigger: "blur" },
          {
            pattern: /[1-9]\d*/,
            message: "请输入一个正整数（平方米）",
            trigger: "blur"
          }
        ],
        location: [{ required: true, message: "请填写地点", trigger: "blur" }],
        timeForProject: [
          { required: true, message: "请填写工期", trigger: "blur" }
        ],
        startTime: [
          {
            type: "date",
            required: true,
            message: "请填写开工时间",
            trigger: "change"
          }
        ],
        familyStructure: [
          { required: true, message: "请选择户型结构", trigger: "change" }
        ],
        tenderStartTime: [
          {
            type: "date",
            required: true,
            message: "请填招标开始时间",
            trigger: "change"
          }
        ],
        housingSituation: [
          { required: true, message: "请选择房屋现状", trigger: "change" }
        ],
        tenderEndTime: [
          {
            type: "date",
            required: true,
            message: "请填写招标结束时间",
            trigger: "change"
          }
        ],
        decorationBudget: [
          { required: true, message: "请选择装修预算费用", trigger: "change" }
        ],
        fitmentRequest: [
          { required: true, message: "请填写装修详细要求", trigger: "blur" }
        ],
        compayRequest: [
          { required: true, message: "请填写投标公司要求", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 提交数据
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("submit!");
          this.axios.post("/releaseTender", {
            linkMan: this.ruleForm.linkMan,
            phone: this.ruleForm.phone,
            calusename: this.ruleForm.calusename,
            area: this.ruleForm.area,
            location: this.ruleForm.location,
            timeForProject: this.ruleForm.timeForProject,
            startTime: this.ruleForm.startTime,
            familyStructure: this.ruleForm.familyStructure,
            tenderStartTime: this.ruleForm.tenderStartTime,
            housingSituation:this.ruleForm.housingSituation,
            tenderEndTime: this.ruleForm.tenderEndTime,
            decorationBudget: this.ruleForm.decorationBudget,
            fitmentRequest: this.ruleForm.fitmentRequest,
            compayRequest: this.ruleForm.compayRequest,
            token: sessionStorage.getItem("token")
          })
          .then(res => {
            console.log(res);
            if(res.data.code == 200) {
              this.$message({
                showClose: true,
                message: '发布成功,已向后台发送审核请求',
                type: 'success'
              });
              this.$router.push({ path: '/personalCenter/mytender' })
            }
          })
          .catch(err => {
            console.log(err);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置输入框
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
</style>