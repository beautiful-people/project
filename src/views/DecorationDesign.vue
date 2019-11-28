<template>
  <div class="decorationdesign">
    <div class="left_top">
      <p>
        当前位置：
        <a href="javascript:;">
          <span class="adr">
            成都
            <span>装修网</span>
          </span>>
        </a>
        <span class="adr">成都</span>装修设计
      </p>
    </div>

    <div class="content">
      <div class="content-top">
        <a href="javascript:;">
          <span class="adr">成都</span>
          装修设计
        </a>
        >
        <span>
          符合条件
          <span>{{numm}}</span> 篇
        </span>
      </div>

      <div class="content-bottom">
        <div class="content-bottom-t">
          <div class="content-bottom-c">户型</div>
          <div class="content-bottom-m">
            <ul>
              <li
                v-for="(item, index) in houseTaye"
                :key="index"
                @click="t = index"
                :class="{ck:t === index}"
              >{{item.text}}</li>
            </ul>
          </div>
        </div>

        <div class="content-bottom-t">
          <div class="content-bottom-c">面积</div>
          <div class="content-bottom-m">
            <ul>
              <li
                v-for="(item, index) in area"
                :key="index"
                @click="q = index"
                :class="{ck:q === index}"
              >{{item.text}}</li>
            </ul>
          </div>
        </div>

        <div class="content-bottom-t">
          <div class="content-bottom-c">总价</div>
          <div class="content-bottom-m">
            <ul>
              <li
                v-for="(item, index) in price"
                :key="index"
                @click="m = index"
                :class="{ck:m === index}"
              >{{item.text}}</li>
            </ul>
          </div>
        </div>

        <div class="content-bottom-t">
          <div class="content-bottom-c">风格</div>
          <div class="content-bottom-m">
            <ul>
              <li
                v-for="(item, index) in styles"
                :key="index"
                @click="n = index"
                :class="{ck:n === index}"
              >{{item.text}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cont">
      <p>
        为您找到
        <span class="num">{{numm}}</span> 个适合的装修方案
      </p>
    </div>

    <!-- 方案 -->
    <div class="all-case">
      <div class="case">
        <div class="pic">
          <div class="pic-left"></div>
          <div class="pic-right">
            <div class="pic-right-top"></div>
            <div class="pic-right-bottom"></div>
          </div>
        </div>
        <div class="decs">
          <h2>xxxxxxxxxxxxxxxxxxxxx</h2>
          <p>设计者：xxxxxxxxxxxxxxx</p>
          <p>
            风格：
            <span></span> 户型：暂无
            <span></span> 面积：
            <span></span> 造价：
            <span></span> 小区：
            <span></span>
          </p>
          <p>提供的服务:暂无</p>
          <p>
            发布时间：
            <span>xxxxx</span>
          </p>
          <el-button type="warning" size="medium">免费询问</el-button>
        </div>
      </div>
      <div class="case">
        <div class="pic">
          <div class="pic-left"></div>
          <div class="pic-right">
            <div class="pic-right-top"></div>
            <div class="pic-right-bottom"></div>
          </div>
        </div>
        <div class="decs">
          <h2>xxxxxxxxxxxxxxxxxxxxx</h2>
          <p>设计者：xxxxxxxxxxxxxxx</p>
          <p>
            风格：
            <span></span> 户型：暂无
            <span></span> 面积：
            <span></span> 造价：
            <span></span> 小区：
            <span></span>
          </p>
          <p>提供的服务:暂无</p>
          <p>
            发布时间：
            <span>xxxxx</span>
          </p>
          <el-button type="warning" size="medium">免费询问</el-button>
        </div>
      </div>
      <div class="case">
        <div class="pic">
          <div class="pic-left"></div>
          <div class="pic-right">
            <div class="pic-right-top"></div>
            <div class="pic-right-bottom"></div>
          </div>
        </div>
        <div class="decs">
          <h2>xxxxxxxxxxxxxxxxxxxxx</h2>
          <p>设计者：xxxxxxxxxxxxxxx</p>
          <p>
            风格：
            <span></span> 户型：暂无
            <span></span> 面积：
            <span></span> 造价：
            <span></span> 小区：
            <span></span>
          </p>
          <p>提供的服务:暂无</p>
          <p>
            发布时间：
            <span>xxxxx</span>
          </p>
          <el-button type="warning" size="medium">免费询问</el-button>
        </div>
      </div>


    </div>
        <!-- 分页 -->
        <div class="fenye">
          <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
              </el-pagination>
        </div>
              
      
    

    <div class="why">
      <h1>为什么选择FTT</h1>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <span class="num">600</span>
            <span>个</span>
            <p>全城已开通分站城市</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <span class="num">30000</span>
            <span>家</span>
            <p>入驻商家会员超</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <span class="num">500</span>
            <span>万</span>
            <p>已服务业务数</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <span class="num">18</span>
            <span>亿</span>
            <p>2018年平台交易额超</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "decorationDesign",

  data() {
    return {
      numm: 3333,
      t: 0,
      m: 0,
      n: 0,
      q: 0,
      houseTaye: [
        { cid: "0", text: "全部" },
        { cid: "1", text: "一居室" },
        { cid: "2", text: "二居室" },
        { cid: "3", text: "三居室" },
        { cid: "4", text: "四居室" },
        { cid: "5", text: "五居室" },
        { cid: "6", text: "六居室" }
      ],
      area: [
        { mid: "0", text: "全部" },
        { mid: "1", text: "40^2以下" },
        { mid: "2", text: "41^2到60^2" },
        { mid: "3", text: "61^2到90^2" },
        { mid: "4", text: "91^2到120^2" },
        { mid: "5", text: "121^2到150^2" }
      ],
      price: [
        { nid: "0", text: "1-5万" },
        { nid: "1", text: "5-10万" },
        { nid: "1", text: "10-20万" }
      ],
      styles: [
        { aid: "0", text: "东欧" },
        { aid: "1", text: "北欧欧" },
        { aid: "2", text: "南欧" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #666;
  &:hover {
    color: orangered;
  }
}
li {
  list-style: none;
}
.ck {
  color: orangered;
  cursor: pointer;
  font-size: 16px;
}
.decorationdesign {
  width: 80%;
  margin: 0 auto;
  height: auto;
  /*  background: #999; */

  .left_top {
    color: #666;
    font-size: 14px;
    margin-top: 30px;
    margin-bottom: 50px;
    a {
      color: #666;
      &:hover {
        color: orangered;
      }
    }
  }

  .content {
    width: 100%;

    .content-top {
      width: 100%;
      height: 80px;
      border: 1px solid #ddd;
      border-radius: 0px;
      padding-left: 10px;
      line-height: 80px;
    }
    .content-bottom {
      width: 100%;
      height: 320px;
      border: 1px solid #ddd;
      border-radius: 0px;

      .content-bottom-t {
        width: 100%;
        height: 80px;

        .content-bottom-c {
          float: left;
          width: 100px;
          height: 80px;
          text-align: center;
          line-height: 80px;
          background: #f8f8f8;
        }
        .content-bottom-m {
          height: 80px;
          float: left;
          line-height: 80px;
          text-align: center;
          width: 80%;
          ul {
            width: 100%;
            height: 80px;
          }
          li {
            height: 50px;
            /* width: 40px; */
            float: left;
            font-size: 14px;
            margin: 0 10px 0;
          }
          li:hover {
            color: orangered;
            cursor: pointer;
          }
        }
      }
    }

    /*  margin: 0 auto;
    text-align: center */
  }
  .fenye{
    width: 50%;
    margin: 0 auto;

  }
  /* case */
  .all-case {
    width: 100%;
    height: 1000px;

    .case {
      width: 540px;
      height: 400px;
      background: lightcyan;
      margin-top: 30px;
      margin-right: 30px;
      margin-left: 30px;
      float: left;
      position: relative;
      .pic {
        background: pink;
        .pic-left {
          background: blue;
          float: left;
          width: 290px;
          height: 260px;
          margin-right: 10px;
        }
        .pic-right {
          background: burlywood;
          width: 240px;
          height: 260px;
          float: left;
          .pic-right-top {
            background: red;
            width: 240px;
            height: 125px;
            margin-bottom: 10px;
          }
          .pic-right-bottom {
            background: gray;
            width: 240px;
            height: 125px;
          }
        }
      }
    }
    .decs {
      width: 100%;
      height: 140px;
      p,
      h2 {
        margin-top: 3px;
        margin-bottom: 3px;
      }
    }
    button {
      position: absolute;
      right: 30px;
      bottom: 10px;
      width: 140px;
      height: 40px;
    }
  }

  .cont {
    margin-top: 60px;
    padding: 5px;
    padding-left: 30px;
    background: #f8f8f8;
    span {
      color: orangered;
      font-size: 26px;
    }
  }
  .why {
    margin-top: 200px;

    text-align: center;
    h1 {
      font-weight: 500;
      margin: 30px 0 30px;
    }

    .num {
      font-size: 36px;
    }
  }
}
.grid-content {
  span {
    color: orangered;
  }
}
</style>