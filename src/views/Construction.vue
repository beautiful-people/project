<template>
  <div class="construction">
    <index></index>
    <div class="onLine">
      <div class="onLine-head clear">
        <ul>
          <li @click="inex=0 ">施工阶段</li>
          <li @click="inex=1 ">不限</li>
          <li @click="inex=2 ">开工大吉</li>
          <li @click="inex=3 ">水电改造</li>
          <li @click="inex=4 ">泥瓦阶段</li>
          <li @click="inex=5 ">木工阶段</li>
          <li @click="inex=6 ">油漆阶段</li>
          <li @click="inex=7 ">安装阶段</li>
          <li @click="inex=8 ">验收完成</li>
        </ul>
      </div>
      <div class="onLine-main" v-show="inex===0">
        <p>文字</p>
      </div>
      <div class="onLine-main" v-show="inex===1">
        <p>文字1</p>
      </div>
    </div>
  </div>
</template>

<script>
import index from "@/components/index";

export default {
  name: "Construction",
  components: {
    index
  },
  data: function() {
    return {
      inex: 0
    };
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
.onLine{
  width: 100%;
  height:1000px;;
   position: relative;
  .onLine-head {
    // width:50%;
    //   position: absolute;
    //   top:0;
    //   left: 300px;
      
    ul {
      width: 80%;
      li {
        width: 100px;
        height: 40px;
        line-height: 40px;
        float: left;
      }
    }
  }
}

</style>