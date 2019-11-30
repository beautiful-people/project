<template>
  <div class="membership">
    <!-- 顶部搜索框 -->
    <div class="main-top-header">
      <div class="main-top-center">
        <div class="main-top-header-logo">
          <!-- LOGO图片 -->
          <img src="img/index-img/logo.png" class="main-top-img" alt />
          <!-- 切换定位 -->
          <div class="main-top-location">
            <!-- 定位 -->
            <img src="img/index-img/land_01.png" width="19px" style="float:left;" height="23px" alt />
            <div class="main-top-city">
              <span>成都</span>
              <div class="main-top-pulldown"></div>
            </div>
          </div>
          <!-- 买得起的高端楼 -->
          <img src="img/index-img/slogan.png" alt />
        </div>
        <!-- 搜索 -->
        <div class="main-search">
          <form action>
            <input type="text" placeholder="搜索设计师、楼盘等信息" />
            <!-- <el-input v-model="input" placeholder="搜索设计师、楼盘等信息"></el-input> -->
            <input class="subsearch" type="image" src="img/index-img/search.jpg" />
          </form>
        </div>
        <!-- 右侧联系 -->
        <div class="main-top-call">
          <img src="img/index-img/tel.png" alt />
          <div class="main-top-phone">
            <span style="font-size:18px;">24</span>小时咨询热线:
            <br />
            <span style="font-size:18px;">028-86618553</span>
          </div>
        </div>
      </div>
    </div>
    <div class="membership-head">
      <div class="membership-main">
        <div class="membership-main-head">
          <p>完善商家会员详细资料</p>
          <p>详细的资料，更容易获得客户的依赖！</p>
        </div>
        <div class="membership-main-one clear">
          <span>免费服务</span>
          <div class="one-main">
            <label for v-for="item in freeService" :key="item.id">
              <input type="checkbox" @click="freeServiceName=item.name" />
              {{item.name}}
            </label>
          </div>
        </div>
        <div class="membership-main-one clear two">
          <span>商家简介</span>
          <div class="one-main">
            <textarea cols="50" rows="10" v-model="textarea"></textarea>
          </div>
        </div>
        <div class="membership-main-one clear three">
          <span>商家全称</span>
          <div class="one-main">
            <input type="text" v-model="Businessname" />
          </div>
        </div>
        <div class="membership-main-one clear three">
          <span>商家简称</span>
          <div class="one-main">
            <input type="text" v-model="Business" />
          </div>
        </div>
        <div class="membership-main-one clear">
          <span>服务区域</span>
          <div class="one-main">
            <label for v-for="item in country" :key="item.id">
              <input type="checkbox" @click="coverageName=item.name" />
              {{item.disName}}
            </label>
          </div>
        </div>
        <div class="membership-main-one clear">
          <span>业务范围</span>
          <div class="one-main">
            <label for v-for="item in scopeBusiness" :key="item.id">
              <input type="checkbox" @click="scopeBusinessName=item.name" />
              {{item.name}}
            </label>
          </div>
        </div>
        <div class="membership-main-one clear">
          <span>承接价位</span>
          <div class="one-main">
            <label for v-for="item in  price" :key="item.id">
              <input type="checkbox" @click="priceName=item.name" />
              {{item.name}}
            </label>
          </div>
        </div>
        <div class="membership-main-one clear">
          <span>行业库</span>
          <div class="one-main">
            <label for v-for="item in  hang" :key="item.id">
              <input type="checkbox" @click=" libraryName=item.name" />
              {{item.tradeName}}
            </label>
          </div>
        </div>
        <div class="membership-main-one clear">
          <span>经营模式</span>
          <div class="one-main">
            <label for v-for="item in  businessmodel" :key="item.id">
              <input type="checkbox" @click="businessmodelName=item.name" />
              {{item.name}}
            </label>
          </div>
        </div>
        <div class="membership-main-one clear">
          <span>商家类型</span>
          <div class="one-main">
            <label for v-for="item in  businesstype" :key="item.id">
              <input type="checkbox" @click="businesstypeName=item.name" />
              {{item.name}}
            </label>
          </div>
        </div>
        <div class="membership-main-one clear three">
          <span>主要资质</span>
          <div class="one-main">
            <input type="text" v-model="Aptitude" />
          </div>
        </div>
        <div class="membership-main-one clear three">
          <span>注册资本</span>
          <div class="one-main">
            <input type="text" v-model="Capital" />
          </div>
        </div>
        <div class="membership-main-one clear two">
          <span>主营产品</span>
          <div class="one-main">
            <textarea cols="50" rows="8" v-model="MainProduct"></textarea>
          </div>
        </div>
        <div class="membership-main-one clear">
          <span>商家性质</span>
          <div class="one-main">
            <label for v-for="item in  businessnature" :key="item.id">
              <input type="radio" @click="businessnatureName=item.name" />
              {{item.name}}
            </label>
          </div>
        </div>
        <div class="membership-main-one clear three">
          <span>商家职务</span>
          <div class="one-main">
            <input type="text" v-model="BusinessPosition" />
          </div>
        </div>
        <div class="membership-main-one clear three">
          <span>详细地址</span>
          <div class="one-main">
            <input type="text" v-model="DetailedAddress" />
          </div>
        </div>
        <div class="membership-main-button">
          <button type="button" @click="getLogin">确认资料</button>
          <button type="button">重置</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "membership",
  data: function() {
    return {
      freeService: [
        {
          name: "免费验房",
          id: 0
        },
        {
          name: "免费量房",
          id: 1
        },
        {
          name: "免费保价",
          id: 2
        },
        {
          name: "免费设计",
          id: 3
        }
      ],
      scopeBusiness: [
        {
          name: "普通住宅",
          id: 0
        },
        {
          name: "别墅",
          id: 1
        },
        {
          name: "办公空间",
          id: 2
        },
        {
          name: "厂房 ",
          id: 3
        },
        {
          name: "展示厅 ",
          id: 4
        },
        {
          name: "展会空间",
          id: 5
        },
        {
          name: "商场超市",
          id: 6
        },
        {
          name: "专卖店",
          id: 7
        },
        {
          name: "酒店宾馆",
          id: 8
        },
        {
          name: " KTV ",
          id: 9
        },
        {
          name: " 餐饮酒吧",
          id: 10
        },
        {
          name: "会所",
          id: 11
        },
        {
          name: "网吧",
          id: 12
        },
        {
          name: "其他",
          id: 13
        }
      ],
      price: [
        {
          name: "2万以上",
          id: 0
        },
        {
          name: "3万以上",
          id: 1
        },
        {
          name: "5万以上",
          id: 2
        },
        {
          name: "8万以上",
          id: 3
        },
        {
          name: "15万以上",
          id: 4
        },
        {
          name: "25万以上",
          id: 5
        },
        {
          name: "50万以上",
          id: 6
        },
        {
          name: "100万以上",
          id: 7
        }
      ],

      businessmodel: [
        {
          name: "生产型",
          id: 0
        },
        {
          name: "贸易型",
          id: 1
        },
        {
          name: "服务型",
          id: 2
        },
        {
          name: "政府或其他机构",
          id: 3
        }
      ],
      businesstype: [
        {
          name: "设计师",
          id: 0
        },
        {
          name: "装修装饰企业",
          id: 1
        },
        {
          name: "供应商",
          id: 2
        }
      ],
      businessnature: [
        {
          name: "企业单位",
          id: 0
        },
        {
          name: "个体经营",
          id: 1
        },
        {
          name: "事业单位或社会团体",
          id: 2
        },
        {
          name: "未经工商注册，个人",
          id: 3
        }
      ],
      hang: {},
      coun: {},
      freeServiceName: "",
      scopeBusinessName: "",
      priceName: "",
      businessmodelName: "",
      businesstypeName: "",
      businessnatureName: "",
      textarea: "",
      Businessname: "",
      Business: "",
      Aptitude: "",
      Capital: "",
      MainProduct: "",
      BusinessPosition: "",
      DetailedAddress: "",
      coverageName: "",
      libraryName: "",
      country: sessionStorage.getItem("countrys")
    };
  },
  created() {
    this.getHang();
    this.getcity();
  },
  methods: {
    getLogin() {
      this.axios
        .post(
          "http://172.16.6.58:8080/register",
          {
           
              merchant:{
                merFreeserve: this.freeServiceName,
                merCoverage: this.scopeBusinessName,
                merPrice: this.priceName,
                merPattern: this.businessmodelName,
                merType: this.businesstypeName,
                merNature: this.businessnatureName,
                merSynopsis: this.textarea,
                merName: this.Businessname,
                merAbbr: this.Business,
                merAptitude: this.Aptitude,
                merAsset: this.Capital,
                merProServe: this.MainProduct,
                merDuty: this.BusinessPosition,
                merAddress: this.DetailedAddress,
                merServeArea: this.coverageName,
                merIndustry: this.libraryName,
              },
              power:3,
              account:{
                 merFreeserve: this.freeServiceName,
                  merCoverage: this.scopeBusinessName,
              }
            },
          
          {
            headers: {
              "content-type": "application/json",
              "data": {
              merchant:{
                merFreeserve: this.freeServiceName,
                merCoverage: this.scopeBusinessName,
                merPrice: this.priceName,
                merPattern: this.businessmodelName,
                merType: this.businesstypeName,
                merNature: this.businessnatureName,
                merSynopsis: this.textarea,
                merName: this.Businessname,
                merAbbr: this.Business,
                merAptitude: this.Aptitude,
                merAsset: this.Capital,
                merProServe: this.MainProduct,
                merDuty: this.BusinessPosition,
                merAddress: this.DetailedAddress,
                merServeArea: this.coverageName,
                merIndustry: this.libraryName,
              },
              power:1,
              account:{
                 merFreeserve: this.freeServiceName,
                  merCoverage: this.scopeBusinessName,
              }
            }
            }
          }
        )
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHang() {
      this.axios
        .post(
          "http://172.16.6.58:8080/datas/tradeData",
          {},
          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == "200") {
            this.hang = res.data.data.tradeList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getcity() {
      this.axios
        .post(
          "http://172.16.6.58:8080/datas/disData",
          {
            cityId: this.country
          },
          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == "200") {
            this.country = res.data.data.disList;
          }
        })
        .catch(err => {
          console.log(err);                                                                                                                                                                  
        });
    }
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.clear::before,
.clear::after {
  display: table;
  content: "";
}
.clear::after {
  clear: both;
}
.membership {
  width: 100%;
  height: 600px;
  .membership-head {
    width: 100%;
    height: 1300px;
    background-image: url(../../public/img/denglu-bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .membership-main {
      width: 700px;
      height: 1290px;
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background-color: rgba(255, 255, 255, 0.63);
      border: 1px solid white;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.315);
      position: relative;
      .membership-main-head {
        width: 100%;
        height: 100px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.267);
        p {
          margin-top: 10px;
          color: black;
          font-size: 16px;
        }
        p:nth-child(1) {
          color: rgba(255, 68, 0, 0.89);
          font-size: 20px;
        }
      }
      .membership-main-one {
        margin-top: 30px;
        span {
          display: inline-block;
          float: left;
          color: black;
          font-size: 18px;
          margin-left: 30px;
        }
        .one-main {
          width: 360px;
          float: left;
          margin-left: 50px;
          padding-left: 12px;
          input {
            display: inline-block;
            padding-right: 4px;
            outline: none;
          }
        }
      }
      .membership-main-button {
        margin-top: 40px;
        button {
          width: 100px;
          height: 50px;
          margin-left: 10px;
          outline: none;
          border: none;
        }
        button:nth-child(1) {
          margin-right: 150px;
          background-color: rgba(255, 68, 0, 0.568);
          color: white;
        }
      }
    }
    .two {
      span {
        display: inline-block;
        padding-top: 50px;
      }
    }
    .three {
      .one-main {
        display: inline-block;
        padding-top: 0;
        padding-left: 0px;
        margin-left: 0px;
        input {
          width: 280px;
          margin-right: 43px;
        }
      }
    }
  }
}
.main-top-header {
  width: 100%;
  height: 103px;
  background: #494949;
  border-top: solid 1px rgb(206, 206, 206);
}
.main-top-center {
  width: 1211px;
  height: 100px;
  // background: red;
  margin: auto;
  overflow: hidden;
}
.main-top-header-logo {
  width: 500px;
  height: 50px;
  // background: aqua;
  margin-top: 30px;
  text-align: left;
  float: left;
}
.main-top-img {
  float: left;
}
.main-top-location {
  width: 90px;
  height: 40px;
  margin-left: 30px;
  margin-top: 10px;
  margin-right: 38px;
  float: left;
  line-height: 20px;
  overflow: hidden;
}
.main-top-city {
  margin-left: 10px;
  margin-top: 0px;
  float: left;
  overflow: hidden;
  color: white;
}
.main-top-city .main-top-pulldown {
  margin-top: 5px;
  margin-left: 5px;
}
.main-top-pulldown {
  width: 0px;
  height: 0px;
  float: right;
  line-height: 50px;
  border-top: 7px solid white;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid transparent;
}
.main-search {
  width: 435px;
  height: 38px;
  float: left;
  margin-top: 35px;
  margin-left: 40px;
}
.main-search input:nth-child(1) {
  width: 415px;
  height: 14px;
  border-radius: 5px;
  border: 0;
  padding: 10px;
  float: left;
}
.subsearch {
  margin-right: 9px;
  float: right;
  margin-top: -27px;
}
.main-top-call {
  width: 180px;
  height: 46px;
  margin-left: 30px;
  float: right;
  // background: red;
  margin-top: 33px;
  text-align: left;
  float: left;
}
.main-top-phone {
  float: right;
  margin-right: 12px;
  font-size: 16px;
  color: white;
}
</style>