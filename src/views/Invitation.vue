<template>
  <div class="invitation">
    <p>这是项目招标页面</p>
    <div class="nav">
      <div class="clearfix">
        <ul>
          <li>信息类型:</li>
          <li
            v-for="item in msgs"
            :key="item.id"
            @click="msgs_id = item.id"
            :class="{on:msgs_id === item.id}"
          >
            <label :for="item.id">
              <input type="radio" name="msgs" :id="item.id" />
              {{item.msg}}
            </label>
          </li>
        </ul>
      </div>

      <div class="clearfix">
        <ul>
          <li>选择时间:</li>
          <li
            v-for="item in time"
            :key="item.id"
            @click="time_id = item.id"
            :class="{on:time_id === item.id}"
          >
            <label :for="item.id">
              <input type="radio" name="time" :id="item.id" />
              {{item.msg}}
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "invitation",
  data() {
    return {
      msgs_id: 1,
      time_id: 1,
      msgs: [
        { id: 1, msg: "全部" },
        { id: 2, msg: "招标" },
        { id: 3, msg: "中标" }
      ],
      time: [
        { id: 1, msg: "不限" },
        { id: 2, msg: "近一周" },
        { id: 3, msg: "近一个月" },
        { id: 4, msg: "近三个月" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import '../assets/style/base.css';


.nav {
  width: 90%;
  max-width: 1200px;
  height: 400px;
  border: 1px solid #272822;
  margin: 0 auto;

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
  ul li:hover {
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