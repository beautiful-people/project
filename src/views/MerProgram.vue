<template>
  <div>
    <el-form
      :inline="true"
      :label-position="labelPosition"
      label-width="150px"
      :model="ruleForm"
      ref="ruleForm"
    >
      <el-form-item label="方案名" prop="schemeName">
        <el-input v-model="ruleForm.schemeName"></el-input>
      </el-form-item>
      <el-form-item label="装修面积" prop="roomArea">
        <el-input v-model="ruleForm.roomArea"></el-input>
      </el-form-item>
      <el-form-item label="造价" prop="roomCost">
        <el-input v-model="ruleForm.roomCost"></el-input>
      </el-form-item>
      <el-form-item label="小区" prop="quarters">
        <el-input v-model="ruleForm.quarters"></el-input>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-form-item prop="releaseTime">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.releaseTime"
            style="width: 190px;"
          ></el-date-picker>
        </el-form-item>
      </el-form-item>
      <el-form-item label="户型" prop="roomType">
        <el-select v-model="ruleForm.roomType" placeholder="未选择" style="width: 202px;">
          <el-option label="小型户" value="小型户"></el-option>
          <el-option label="两居室" value="两居室"></el-option>
          <el-option label="三居室" value="三居室"></el-option>
          <el-option label="四居室" value="四居室"></el-option>
          <el-option label="复式" value="复式"></el-option>
          <el-option label="别墅" value="别墅"></el-option>
          <el-option label="跃层" value="跃层"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="装修风格" prop="roomStyle">
        <el-select v-model="ruleForm.roomStyle" placeholder="未选择" style="width: 202px;">
          <el-option label="中式" value="中式"></el-option>
          <el-option label="欧式" value="欧式"></el-option>
          <el-option label="美式" value="美式"></el-option>
          <el-option label="现代" value="现代"></el-option>
          <el-option label="古典" value="古典"></el-option>
          <el-option label="田园" value="田园"></el-option>
          <el-option label="地中海" value="地中海"></el-option>
          <el-option label="混搭" value="混搭"></el-option>
          <el-option label="东南亚" value="东南亚"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="提供服务" prop="servicesProvided">
        <el-input v-model="ruleForm.servicesProvided"></el-input>
      </el-form-item>

      <el-form-item label="设计理念" prop="designConcept">
        <el-input type="textarea" rows="4" v-model="ruleForm.designConcept" style="width: 560px;"></el-input>
      </el-form-item>

      <el-upload
        class="upload-demo"
        ref="upload"
        action="insertdecordOnes"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
        :on-change="imgBroadcastChange"
        :onSuccess="uploadSuccess"
        :headers="headers"
        list-type="picture-card"
        multiple
        name="photo"
        style="text-align: center"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      </el-upload>

      <el-form-item style="margin-left: 140px">
        <el-button type="primary" @click="startUpload()">立即发布</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],//上传图片的
      labelPosition: "right",
      ruleForm: {},
      headers:{
            "Content-Type":"multipart/form-data"
        },
        photo:[],//选中图片的列表
    };
  },
  methods: {
    // 提交数据
    imgBroadcastChange(file,fileList) {
          this.photo.push(file.raw);
          /* this.fileName = file.name; */
          console.log(fileList);
          console.log(this.photo)
      },
      uploadSuccess(res, photo) {
          console.log(res);
          console.log(photo);
      },
      startUpload() {
          const formData = new FormData();
          formData.append("schemeName",this.ruleForm.schemeName);
          formData.append("roomArea",this.ruleForm.roomArea);
          formData.append("roomCost",this.ruleForm.roomCost);
          formData.append("quarters",this.ruleForm.quarters);
          formData.append("releaseTime",this.ruleForm.releaseTime);
          formData.append("roomType",this.ruleForm.roomType);
          formData.append("roomStyle",this.ruleForm.roomStyle);
          formData.append("servicesProvided",this.ruleForm.servicesProvided);
          formData.append("designConcept",this.ruleForm.designConcept);
          for(let i = 0;i<this.photo.length;i++) {
              formData.append('photo', this.photo[i]);
          }
          this.axios
            .post("/insertdecordOnes",formData,{
            headers: {
              "content-type": "application/json",
              "token": sessionStorage.getItem("token")
            }
          })
            .then(res => {
            console.log(res.data);
            if(res.data.code == '200') {
              this.ruleForm=[];
              this.fileList=[];
              this.photo = [];
            }
          })
          .catch(err => {
          console.log(err);
          });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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