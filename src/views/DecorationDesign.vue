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
      <span style="color:#f76d4e;font-size:20px;">&nbsp;6327 &nbsp;</span>个适合的装修方案
    </div>

    <div class="content">
      <div class="box" v-for="(item,index) in boxtext" :key="index">
        <div class="box-left" @click="getin(index)">
          {{index}}
          <img src alt />
        </div>
        <div class="box-right">
          <div class="rig-top" @click="getin(index)"></div>
          <div class="rig-bottom" @click="getin(index)"></div>
        </div>

        <p
          style="font-weight:bold;font-size:14px;cursor: pointer;"
          @click="getin(index)"
        >{{item.title}}</p>
        <p>
          设计者：
          <a href>{{item.projector}}</a>
        </p>
        <p>
          风格：{{item.title}}&nbsp;&nbsp;
          户型：{{item.styles}}&nbsp;&nbsp;
          面积：{{item.area}}&nbsp;&nbsp;
          造价：{{item.price}}&nbsp;&nbsp;
          小区：{{item.address}}
        </p>
        <p>提供的服务：暂无</p>
        <p>
          发布时间：
          <span style="color:#f76d4e;font-size:14px;">{{item.time}}</span>
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
  </div>
</template>

<script>
import index from "@/components/index";

export default {
  name: "decorationDesign",

  data() {
    return {
      pagesize: 3, // 每页显示三条
      currpage: 1, // 默认开始页面
      totalCount: 10, // 总页数

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
      boxtext: [
        {
          title: "文化产品体验中心",
          projector: "北京瑞祥嘉怡装饰有限公司第一分公司",
          styles: "现代",
          houseType: "其他",
          area: "1000㎡",
          price: "20万元",
          time: "2019-11-27",
          address: "文化产品体验中心"
        },
        {
          title: "文化产品体验中心",
          projector: "北京瑞祥嘉怡装饰有限公司第一分公司",
          styles: "现代",
          houseType: "其他",
          area: "1000㎡",
          price: "20万元",
          time: "2019-11-27",
          address: "文化产品体验中心"
        },
        {
          title: "文化产品体验中心",
          projector: "北京瑞祥嘉怡装饰有限公司第一分公司",
          styles: "现代",
          houseType: "其他",
          area: "1000㎡",
          price: "20万元",
          time: "2019-11-27",
          address: "文化产品体验中心"
        },
        {
          title: "文化产品体验中心",
          projector: "北京瑞祥嘉怡装饰有限公司第一分公司",
          styles: "现代",
          houseType: "其他",
          area: "1000㎡",
          price: "20万元",
          time: "2019-11-27",
          address: "文化产品体验中心"
        },
        {
          title: "文化产品体验中心",
          projector: "北京瑞祥嘉怡装饰有限公司第一分公司",
          styles: "现代",
          houseType: "其他",
          area: "1000㎡",
          price: "20万元",
          time: "2019-11-27",
          address: "文化产品体验中心"
        },
        {
          title: "文化产品体验中心",
          projector: "北京瑞祥嘉怡装饰有限公司第一分公司",
          styles: "现代",
          houseType: "其他",
          area: "1000㎡",
          price: "20万元",
          time: "2019-11-27",
          address: "文化产品体验中心"
        }
      ]
    };
  },
  components: {
    index
  },
  methods: {
    handleSizeChange(val) {
      // 分页-每页条数
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      // 当前页
      this.currpage = val;

      // this.axios
      //   .post("/tender/findAll", {
      //     currentPage: this.currpage,
      //     pageSize: this.pagesize,
      //     state: this.msgs_id,
      //     chooseTime: this.time_id
      //   })
      //   .then(res => {
      //     if (res.data.code == 200) {
      //       console.log(res.data.data.tenders);
      //       this.tables = res.data.data.tenders;
      //       console.log(this.tables);
      //       this.totalCount = res.data.data.totalCount;
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      console.log(val);
    },
    houseTypeClick(item) {
      // 户型的点击事件
      this.h_id = item;

      this.axios
        .post("/tender/findAll", {
          roomType:this.houseType.text
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data);
            this.tables = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    areaClick(item) {
      // 面积点击事件
      this.a_id = item;
    },
    priceClick(item) {
      // 总价点击事件
      this.p_id = item;
    },
    stylesClick(item) {
      // 风格点击事件
      this.s_id = item;
    },
    getin(i) {
      console.log(i);
      this.$router.push("/design?" + i);
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
  width: 1366px;
  height: 1800px;
  margin: 0 auto;

  // background: yellow;
  // border: 1px solid black;

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
    height: 1250px;
    border: 1px solid #dddddd;
    margin: 0 auto;
    padding-left: 15px;
    color: black;
    background: #ddd;
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
        background: black;

        .rig-top {
          width: 100%;
          height: 135px;
          margin-bottom: 10px;
          background: #f76d4e;
          cursor: pointer;
        }
        .rig-bottom {
          width: 100%;
          height: 135px;
          cursor: pointer;
          background: lawngreen;
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