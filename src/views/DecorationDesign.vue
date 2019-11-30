<template>
  <div class="decorationdesign">
    <div class="inv-nav">
      <div class="clearfix">
        <ul>
          <li>信息类型:</li>
          <li
            v-for="item in hx"
            :key="item.h_id"
            @click="msgclick(item.h_id)"
            :class="{on:hx_id === item.h_id}"
          >
            <label :for="item.h_id">
              <input type="radio" name="hx" :id="item.h_id" />
              {{item.text}}
            </label>
          </li>
        </ul>
      </div>

      <!-- <div class="clearfix">
        <ul>
          <li>选择时间:</li>
          <li
            v-for="item in time"
            :key="item.id"
            @click="timeclick(item.id)"
            :class="{on:time_id === item.id}"
          >
            <label :for="item.id">
              <input type="radio" name="time" :id="item.id" />
              {{item.msg}}
            </label>
          </li>
        </ul>
      </div> -->


    </div>
  </div>
</template>

<script>
export default {
  name: "decorationDesign",

  data() {
    return {
      hx_id: 0,
      hx: [
        { h_id: 0, text: "全部" },
        { h_id: 1, text: "一居室" },
        { h_id: 2, text: "二居室" },
        { h_id: 3, text: "三居室" },
        { h_id: 4, text: "四居室" },
        { h_id: 5, text: "五居室" },
        { h_id: 6, text: "六居室" }
      ]
    };
  },
  methods:{
      msgclick(item) {
      this.hx_id = item;

      this.axios
        .post("/tender/findAll", {
          name: this.hx_id
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
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.decorationdesign {
  width: 1366px;
  margin: 0 auto;
  height: 500px;
  // background: yellow;
  // border: 1px solid black;
}

.inv-nav {
  width: 90%;
  max-width: 1200px;
  height: 60px;
  border: 1px solid #dddddd;
  margin: 0 auto;
  padding: 10px;
  color: #5291d7;

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
  ul li:not(1):hover {
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
</style>