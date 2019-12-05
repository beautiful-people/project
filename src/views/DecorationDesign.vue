<template>
  <div class="decorationdesign">
    <index></index>
    <div class="inv-nav">
      <div class="clearfix">
        <ul>
          <li>户型:</li>
          <li
            v-for="item in houseType"
            :key="item.h_id"
            @click="houseTypeClick(item.h_id)"
            :class="{on:h_id === item.h_id}"
          >
            <label :for="item.h_id">
              <input type="radio" name="houseType" :id="item.text" />
              {{item.text}}
            </label>
          </li>
        </ul>
      </div>

      <div class="clearfix">
        <ul>
          <li>面积:</li>
          <li
            v-for="item in area"
            :key="item.a_id"
            @click="areaClick(item.a_id)"
            :class="{on:a_id === item.a_id}"
          >
            <label :for="item.a_id">
              <input type="radio" name="area" :id="item.text" />
              {{item.text}}
            </label>
          </li>
        </ul>
      </div>

      <div class="clearfix">
        <ul>
          <li>总价:</li>
          <li
            v-for="item in price"
            :key="item.p_id"
            @click="priceClick(item.p_id)"
            :class="{on:p_id === item.p_id}"
          >
            <label :for="item.p_id">
              <input type="radio" name="price" :id="item.text" />
              {{item.text}}
            </label>
          </li>
        </ul>
      </div>

      <div class="clearfix">
        <ul>
          <li>风格:</li>
          <li
            v-for="item in styles"
            :key="item.s_id"
            @click="stylesClick(item.s_id)"
            :class="{on:s_id === item.s_id}"
          >
            <label :for="item.s_id">
              <input type="radio" name="styles" :id="item.text" />
              {{item.text}}
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="msg">
      为你找到了
      <span style="color:#f76d4e;font-size:20px;">&nbsp;{{totalCount}} &nbsp;</span>个适合的装修方案
    </div>

    <div class="content clearfix">
      <div class="box" v-for="(item,index) in boxtext" :key="index">
        <div class="box-left" @click="getin(item.schemeId)">
          <img :src="item.deimglist[0].imgPath" style="width:325px;height:280px;" alt />
        </div>
        <div class="box-right">
          <div class="rig-top" @click="getin(item.schemeId)">
            <img :src="item.deimglist[1].imgPath" style="width:100%;height:135px;" alt />
          </div>
          <div class="rig-bottom" @click="getin(item.schemeId)">
            <img :src="item.deimglist[2].imgPath" style="width:100%;height:135px;" alt />
          </div>
        </div>

        <p
          style="font-weight:bold;font-size:14px;cursor: pointer;"
          @click="getin(item.schemeId)"
        >{{item.schemeName}}</p>
        <p>
          设计者：
          <a href>{{item.merchantmany.merName}}</a>
        </p>
        <p>
          风格：{{item.roomStyle}}&nbsp;&nbsp;
          户型：{{item.roomType}}&nbsp;&nbsp;
          面积：{{item.roomArea}}㎡&nbsp;&nbsp;
          造价：{{item.roomCost}}&nbsp;&nbsp;
          小区：{{item.quarters}}
        </p>
        <p>提供的服务：暂无</p>
        <p>
          发布时间：
          <span style="color:#f76d4e;font-size:14px;">{{getTime(item.releaseTime)}}</span>
        </p>

        <!-- Form -->
      </div>
    </div>

    <el-pagination
      style="text-align:center;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currpage"
      :page-size="pagesize"
      :total="totalCount"
      background
      layout="prev, pager, next"
    ></el-pagination>
    <footerr class="footer"></footerr>
  </div>
</template>

<script>
import index from "@/components/index";
import footerr from '@/components/Footer'

export default {
  name: "decorationDesign",

  data() {
    return {
      pagesize: 4, // 每页显示三条
      currpage: 1, // 默认开始页面
      totalCount: 0, // 总页数

      h_id: 0,
      houseType: [
        { h_id: 0, text: "全部" },
        { h_id: 1, text: "一居室" },
        { h_id: 2, text: "二居室" },
        { h_id: 3, text: "三居室" },
        { h_id: 4, text: "四居室" },
        { h_id: 5, text: "复式" },
        { h_id: 6, text: "跃层" },
        { h_id: 7, text: "别墅" }
      ],
      a_id: 0,
      area: [
        { a_id: 0, text: "全部" },
        { a_id: 1, text: "40㎡以下" },
        { a_id: 2, text: "41㎡到60㎡" },
        { a_id: 3, text: "61㎡到90㎡" },
        { a_id: 4, text: "91㎡到120㎡" },
        { a_id: 5, text: "121㎡到150㎡" },
        { a_id: 6, text: "151㎡到200㎡" },
        { a_id: 7, text: "200㎡以上" }
      ],
      p_id: 0,
      price: [
        { p_id: 0, text: "全部" },
        { p_id: 1, text: "1-5万" },
        { p_id: 2, text: "5-10万" },
        { p_id: 3, text: "10-20万" },
        { p_id: 4, text: "20-30万" },
        { p_id: 5, text: "30-50万" },
        { p_id: 6, text: "50-100万" },
        { p_id: 7, text: "100-200万" },
        { p_id: 8, text: "200万以" }
      ],
      s_id: 0,
      styles: [
        { s_id: 0, text: "全部" },
        { s_id: 1, text: "中式" },
        { s_id: 2, text: "欧式" },
        { s_id: 3, text: "美式" },
        { s_id: 4, text: "现代" },
        { s_id: 5, text: "古典" },
        { s_id: 6, text: "田园" },
        { s_id: 7, text: "地中海" },
        { s_id: 8, text: "混搭" },
        { s_id: 9, text: "东南亚" }
      ],
      boxtext: []
    };
  },
  components: {
    index,
    footerr
  },
  created() {
    this.axios
      .post("/selectdecordByrandom", {
        currentPage: 1,
        pageSize: this.pagesize,
        roomtypes: this.h_id,
        roomareas: this.a_id,
        roomcosts: this.p_id,
        roomstyles: this.s_id
      })
      .then(res => {
        if (res.data.code == 200) {
          console.log(res.data.data);
          this.totalCount = res.data.data.totolCount;
          this.boxtext = res.data.data.schemeOfmerVoList;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleSizeChange(val) {
      // 分页-每页条数
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      // 当前页
      this.currpage = val;

      console.log(this.currpage);
      this.axios
        .post("/selectdecordByrandom", {
          currentPage: this.currpage,
          pageSize: this.pagesize
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data.data.totolCount);
            this.boxtext = res.data.data.schemeOfmerVoList;
            console.log(this.boxtext);
            this.totalCount = res.data.data.totolCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
      console.log(val);
    },
    houseTypeClick(item) {
      // 户型的点击事件
      this.h_id = item;
      console.log(this.boxtext);
      this.axios
        .post("/selectdecordByrandom", {
          roomtypes: this.h_id,
          currentPage: 1,
          pageSize: this.pagesize
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data);
            this.boxtext = res.data.data.schemeOfmerVoList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    areaClick(item) {
      // 面积点击事件
      this.a_id = item;
      this.axios
        .post("/selectdecordByrandom", {
          roomareas: this.a_id,
          currentPage: 1,
          pageSize: this.pagesize
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data);
            this.boxtext = res.data.data.schemeOfmerVoList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    priceClick(item) {
      // 总价点击事件
      this.p_id = item;

      this.axios
        .post("/selectdecordByrandom", {
          roomcosts: this.p_id,
          currentPage: 1,
          pageSize: this.pagesize
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data);
            this.boxtext = res.data.data.schemeOfmerVoList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    stylesClick(item) {
      // 风格点击事件
      this.s_id = item;

      this.axios
        .post("/selectdecordByrandom", {
          roomstyles: this.s_id,
          currentPage: 1,
          pageSize: this.pagesize
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data);
            this.boxtext = res.data.data.schemeOfmerVoList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getin(i) {
      console.log(i);
      this.$router.push("/design?" + i);
    },
    getTime(time) {
      /**
       * 时间对象的格式化;
       */
      Date.prototype.format = function(format) {
        /*
         * eg:format="YYYY-MM-dd hh:mm:ss";
         */
        var o = {
          "M+": this.getMonth() + 1, // month
          "d+": this.getDate(), // day
          "h+": this.getHours(), // hour
          "m+": this.getMinutes(), // minute
          "s+": this.getSeconds(), // second
          "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
          S: this.getMilliseconds() // millisecond
        };
        if (/(y+)/.test(format)) {
          format = format.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        }
        for (var k in o) {
          if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length)
            );
          }
        }
        return format;
      };

      var jsDate = new Date(time).toLocaleDateString();
      var date = jsDate.split("/");
      var times = date.join("-");
      return times;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/base.less";

* {
  margin: 0;
  padding: 0;
}
.decorationdesign {
  // width: 1366px;
  // height: 1800px;
  margin: 0 auto;
  position: relative;

  // background: yellow;
  // border: 1px solid black;

.footer {
  position: absolute;
  bottom: -80px;
}
  .inv-nav {
    width: 90%;
    max-width: 1200px;
    height: 120px;
    border: 1px solid #dddddd;
    margin: 0 auto;
    padding: 10px;
    color: black;
    color: #5291d7;
    background: #f8f8f8;

    ul,
    li {
      list-style: none;
    }
    ul li {
      float: left;
      margin: 3px 5px;
      padding: 2px 4px;
      font-size: 14px;
      cursor: pointer;
    }
    ul li:not(:first-child):hover {
      background: #4f94cd;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

    label {
      cursor: pointer;
    }
    input[type="radio"] {
      display: none;
    }
    .on {
      background: #4f94cd;
      color: white;
      font-weight: bold;
    }
  }
  .msg {
    width: 90%;
    max-width: 1200px;
    text-align: left;
    height: 20px;
    line-height: 20px;
    background: #f8f8f8;
    margin: 10px auto;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #dddddd;
  }

  .content {
    width: 90%;
    max-width: 1200px;
    height: 900px;
    // border: 1px solid #dddddd;
    margin: 0 auto;
    padding-left: 15px;
    color: black;
    // background: #ddd;
    text-align: left;

    p {
      margin: 5px 0px;
      font-size: 12px;
    }

    .box {
      width: 585px;
      height: 400px;
      background: white;
      float: left;
      margin: 10px 10px 0px 0px;
      position: relative;
      border: 1px solid #7791dd;

      .box-left {
        width: 325px;
        height: 280px;
        // margin-right: 10px;
        float: left;
        background: aqua;
        cursor: pointer;
      }
      .box-right {
        width: 250px;
        height: 280px;
        float: left;
        margin-left: 10px;
        // background: black;

        .rig-top {
          width: 100%;
          height: 135px;
          margin-bottom: 10px;
          // background: #f76d4e;
          cursor: pointer;
        }
        .rig-bottom {
          width: 100%;
          height: 135px;
          cursor: pointer;
          // background: lawngreen;
        }
      }
    }
    .btn {
      width: 120px;
      height: 45px;
      background: #f76d4e;
      position: absolute;
      right: 10px;
      bottom: 10px;
      color: white;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .js-btn {
    position: absolute;
    top: 5px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    left: 35%;
    top: 120px;
    cursor: pointer;
    box-shadow: 1px 1px #ec7a03;
    padding: 5px;
    color: white;
    font-weight: bold;
    font-size: 25px;
    background: #ff9f05bd;
  }
  .js-btn:hover {
    background: #ff9f05;
  }
}
</style>