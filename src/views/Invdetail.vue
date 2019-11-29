<template>
  <div id="invdetail">
    <div class="content">
      <table
        class="tab"
        v-for="(item,index) in tableData"
        :key="index"
        cellspacing="0"
        cellpadding="0"
      >
        <tr>
          <th colspan="4" style="font-size:40px;color:black;text-align:center">{{item.address}}</th>
        </tr>
        <tr>
          <td>招标编号：{{item.id}}</td>
          <td>发布时间：{{item.date}}</td>
          <td>预计开工时间：{{item.begin}}</td>
          <td>面积：{{item.size}}</td>
        </tr>
        <tr>
          <td>房屋现状</td>
          <td>装修预算：{{item.price}}</td>
          <td>审核人：{{item.people}}</td>
          <td style="color:red;">当前状态：{{item.state}}</td>
        </tr>
        <tr>
          <td colspan="4">量房时间</td>
        </tr>
        <tr>
          <td colspan="4">
            装修招标详细要求：
            <br />
            {{item.claim}}
          </td>
        </tr>
        <tr>
          <td colspan="4">
            投标公司要求：
            <br />
            <span style="color:red">
              1、经工商注册的正规本地公司
              <br />2、已通过装信通认证的无业主投诉与差评的精品装修公司！
            </span>
          </td>
        </tr>
        <tr>
          <td colspan="4" style="text-align:center">
            <button type="button">我要投标</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  name: "invdetail",

  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          begin: "2016-06-01",
          address: "上海市普陀区金沙江路 1518 弄",
          size: "186(平方米)",
          price: "50万至100万",
          people: "管理员",
          state: "招标中",
          claim:
            "我注重的是：高端设计，叠墅，地下室是90，轻奢风格，不超过100万之类，小孩子婚房，环保材料，明年拿房，隔壁有样板间，可以带设计师去看看……"
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
.content {
 

  width: 90%;
  height: 640px;
  margin: 10px auto;
  // border: 1px solid #dddddd;
  padding: 10px;
  max-width: 1200px;
  position: relative;

  .tab {
    width: 1200px;
    height: 500px;
    // border: 1px solid #dddddd;
    color: #62727f;
    font-weight: bold;
    text-align: left;
    td,
    th {
      padding-left: 10px;
      border: 1px solid #dddddd;
    }

    button {
      width: 200px;
      height: 50px;
      background: #f18c20;
      border-radius: 20px;
      border: none;
      color: white;
      font-size: 20px;
      font-weight: bold;
      box-shadow: 0px 2px #f57915;
      outline: none;
    }
    button:hover {
      background: #f18c20dc;
      cursor: pointer;
    }
  }
}
</style>