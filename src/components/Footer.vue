<template>
  <div class="footer">
    <ul>
      <li>
        <a href="/javascript:;">装信通</a>
      </li>
    </ul>
    <ul>
      <li>装修就选装修通，省钱省心好轻松</li>
    </ul>
    <ul>
      <li>
        <el-button type="text" @click="centerDialogVisible = true">
          <i class="el-icon-mobile-phone"></i>
        </el-button>

        <el-dialog title="联系我们" :visible.sync="centerDialogVisible" width="20%" center style="text-align:center;">
          <div style="margin:0 auto;">
            <img src="../assets/tel.png"  alt />
          </div>
        </el-dialog>
      </li>
      <li>
        <el-button type="text" @click="centerDialOG = true">
          <i class="el-icon-s-check"></i>
        </el-button>

        <el-dialog title="微信关注" :visible.sync="centerDialOG" width="20%" center>
          <img src="../assets/weixin.png" style="width:260px;height:260px;" alt />
        </el-dialog>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footerr",
  data() {
    return {
      centerDialogVisible: false,
      centerDialOG: false
    };
  }
};
</script>

<style lang="less" scoped>
// @import "../assets/style/base.less";

.footer {
  width: 100%;
  height: 80px;
  background: black;
  box-sizing: border-box;
  line-height: 80px;
  margin-top: 20px;  
<<<<<<< HEAD
  // margin-bottom: -10px
  // flex: 1;
=======
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
>>>>>>> 444
}
.footer ul{
  height: 75px;
  line-height: 75px
}
.footer ul:nth-of-type(1) {
  list-style: none;
  float: left;
  width: 30%;
  text-align: left;
  // line-height: 30px;
  
}
.footer ul:nth-of-type(1) a {
  text-decoration: none;
}
.footer ul:nth-of-type(2) {
  list-style: none;
  float: left;
  width: 40%;
  text-align: center;
  color: #a0968b;
  // line-height: 30px;
}
.footer ul:nth-of-type(3) {
  list-style: none;
  float: right;
  width: 20%;
  text-align: right;
  color: rgba(255, 255, 255, 0.562);
  // line-height: 60px;
  
}
.footer ul li a {
  color: #948b71;
}
.footer ul li a:hover {
  color: #ffffff;
}
.footer ul li {
  display: inline-block;
  margin: 0 20px;
}
.footer-son {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.footer ul li:nth-of-type(1) a {
  font-size: 25px;
  color: #ffffff;
}
.footer ul li:nth-of-type(4) {
  margin-left: 62%;
}
.hr {
  margin: 0 auto;
  width: 91%;
  margin-bottom: 10px;
  background: #9b9b9ba9;
}
.footer .icon-zu {
  font-size: 25px;
}
.footer .el-icon-mobile-phone {
  font-size: 24px;
  color: #fff;
  
}
.footer .el-icon-mobile-phone:hover {
  color: rgba(255, 255, 255, 0.671);
  cursor: pointer;
}
.footer .el-icon-s-check {
  font-size: 24px;
  color: #fff;
}
.footer .el-icon-s-check:hover {
  color: rgba(255, 255, 255, 0.671);
  cursor: pointer;
}
</style>