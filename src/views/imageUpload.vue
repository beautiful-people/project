<template>
    <div class="imageUpload">
        <div class="gettype">
            <span>请选择上传类型：</span>
            <el-select v-model="typeValue" placeholder="请选择" @change="getTypeValue">
                <el-option v-for="(item,index) in typeList" :key="index" :label="item.typeName" :value="item.value">
            </el-option>
            </el-select>
        </div>
        <div>
            <span>请选择上传样式：</span>
            <el-select v-model="styleValue" placeholder="请选择">
                <el-option v-for="(item,index) in styleList" :key="index" :label="item" :value="item">
                </el-option>
            </el-select>
        </div>
        <div class="describe">
            <span>请输入图片描述:</span><br>
            <textarea placeholder="请输入图片描述" v-model="content"></textarea>
        </div>
        <form>
            <el-upload
            class="upload-demo"
            ref="upload"
            action="addImagsAndCollections"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
            :on-change="imgBroadcastChange"
            :onSuccess="uploadSuccess"
            :headers="headers"
            list-type="picture-card"
            multiple
            name="file">
                <el-button slot="trigger" size="small" type="primary" class="getImg">选取图片集</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="startUpload()">上传到服务器</el-button>
            </el-upload>
        </form>        
    </div>
</template>

<script>
var product = [
    {
        typeName:'空间',
        value:'空间',
        styleName:[
            '客厅','餐厅','卧室','厨房','阳台','卫生间'
        ]
    },
    {
        typeName:'局部',
        value:'局部',
        styleName:[
            '隔断','吊顶','窗帘','门框','酒柜','背景墙'
        ]
    },
    {
        typeName:'户型',
        value:'户型',
        styleName:[
            '二居','三居','四居','跃层','复式','小户型'
        ]
    },
    {
        typeName:'风格',
        value:'风格',
        styleName:[
            '中式','欧式','地中海','简约','田园','东南亚'
        ]
    }
]
export default {
    name:"imageUpload",
    data() {
      return {
        fileList: [],//上传图片的
        typeList:[],//类型列表
        styleList:"",//样式列表
        typeValue:"",//选取类型的value值
        styleValue:"",//选取风格的value值
        content:"",
        
        headers:{
            "Content-Type":"multipart/form-data"
        },
        file:[],
        /* fileName:"", */
        resData:{}
      };
    },
    methods: {
      imgBroadcastChange(file,fileList) {
          this.file.push(file.raw);
          /* this.fileName = file.name; */
          console.log(fileList);
          console.log(this.file)
      },
      uploadSuccess(res, file) {
          console.log(res);
          console.log(file);
      },
      startUpload() {
          const formData = new FormData();
          formData.append("styles",this.typeValue);
          formData.append("styleType",this.styleValue);
          formData.append("imgsContext",this.content);
          /* formData.append("fileName",this.fileName); */
          for(let i = 0;i<this.file.length;i++) {
              formData.append('file', this.file[i]);
          }
          this.axios
            .post("/uploadState",formData)
            .then(res => {
            console.log(res.data);
            if(res.data.code == '200') {
                this.open();
                this.typeValue="";
                this.styleValue="";
                this.content="";
                this.fileList=[];
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
      getTypeValue() {//获取选中类型的值
        this.styleList = "";
        console.log(this.typeValue);
            product.forEach((item) => {
                if(item.typeName == this.typeValue) {
                    this.styleList = item.styleName;
                }
            })
      },
      open() {
        this.$message({
          message: '上传成功',
          type: 'success'
        });
      },
    },
    created() {
        this.typeList = product;
    }
}
</script>

<style lang="less" scoped>
.upload-demo {
    margin-top: 20px;
    line-height: 150px;
}
.gettype {
    margin-bottom: 10px;
}
.el-button--success {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    &:hover {
        color: #606266;
        background-color: rgba(64, 160, 255, 0.315);
    }
}
.getImg {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    &:hover {
        color: #606266;
        background-color: rgba(64, 160, 255, 0.315);
    }
}
.imageUpload {
    margin-left: 50px;
    margin-top: 30px;
}
.describe {
    width: 100%;
    margin-top: 10px;
    textarea {
        -webkit-appearance: none;
        background-color: #FFF;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #DCDFE6;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 100px;
        outline: 0;
        padding: 0 15px;
        -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 300px;
        margin-left: 11px;
        margin-top: 10px;
    }
}
</style>