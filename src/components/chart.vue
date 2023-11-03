<script setup>
import { onMounted, onUnmounted } from "vue";
import { init, dispose } from "klinecharts";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const route = useRoute()

let chart;
const option = {
  // 网格线
  grid: {
    show: false,
  },
};

const type = route.query._value

onMounted(() => {
  chart = init("chart");

  // 为图表添加数据
  chart.applyNewData([
    {
      close: 4976.16,
      high: 4977.99,
      low: 4970.12,
      open: 4972.89,
      timestamp: 1587660000000,
      volume: 204,
    },
    {
      close: 4977.33,
      high: 4979.94,
      low: 4971.34,
      open: 4973.2,
      timestamp: 1587660060000,
      volume: 194,
    },
    {
      close: 4977.93,
      high: 4977.93,
      low: 4974.2,
      open: 4976.53,
      timestamp: 1587660120000,
      volume: 197,
    },
    {
      close: 4966.77,
      high: 4968.53,
      low: 4962.2,
      open: 4963.88,
      timestamp: 1587660180000,
      volume: 28,
    },
    {
      close: 4961.56,
      high: 4972.61,
      low: 4961.28,
      open: 4961.28,
      timestamp: 1587660240000,
      volume: 184,
    },
    {
      close: 4964.19,
      high: 4964.74,
      low: 4961.42,
      open: 4961.64,
      timestamp: 1587660300000,
      volume: 191,
    },
    {
      close: 4968.93,
      high: 4972.7,
      low: 4964.55,
      open: 4966.96,
      timestamp: 1587660360000,
      volume: 105,
    },
    {
      close: 4979.31,
      high: 4979.61,
      low: 4973.99,
      open: 4977.06,
      timestamp: 1587660420000,
      volume: 35,
    },
    {
      close: 4977.02,
      high: 4981.66,
      low: 4975.14,
      open: 4981.66,
      timestamp: 1587660480000,
      volume: 135,
    },
    {
      close: 4985.09,
      high: 4988.62,
      low: 4980.3,
      open: 4986.72,
      timestamp: 1587660540000,
      volume: 76,
    },
  ]);

  chart.setStyles(option);
  chart.createIndicator("VOL");
});

const goBack = () => {
  dispose("chart");
  router.back();
};

onUnmounted(()=>{
  dispose("chart");
})

const buy = () =>{
  router.push({
    path:"/trade",
    query:type
  })
}

const sell = () =>{
  router.push("/trade")
}
</script>

<template>
  <div class="box">
    <div class="header">
      <span class="material-symbols-outlined arrow" @click="goBack">
        arrow_back_ios
      </span>
      <span>{{type}}/USDT</span>
    </div>
    <div class="banner">
      <div style="color: #e23e57">
        <span class="title">3242</span>
        <span>0.18%</span>
      </div>
      <div>
        <span>最高价</span>
        <span>最低价</span>
        <span>成交量</span>
      </div>
      <div style="color: #00adb5">
        <span>32160</span>
        <span>39161</span>
        <span>162</span>
      </div>
    </div>
    <div id="chart" style="width: 100%; height: 500px; padding: 10px 0px"></div>
    <div class="btn">
      <button class="buy" @click="buy">买入做多</button>
      <button class="sell" @click="sell">卖出做空</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: auto;
  height: 100%;
  padding: 15px;
  background: #102030;
  color: #fff;
  .header {
    height: 25px;
    line-height: 25px;
    text-align: center;
    position: relative;
  }
  .arrow {
    position: absolute;
    left: 0;
  }
  .banner {
    width: auto;
    height: 120px;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      font-size: 15px;
      .title {
        font-size: 22px;
      }
    }
  }
  .btn{
    margin-top: 30px;
    width: auto;
    height: 40px;
    display: flex;
    justify-content: space-around;
    button{
      width: 45%;
      height: 40px;
      border: 0;
      border-radius: 2px;
      font-size: 14px;
    }
    .buy{
      background: #1CAD90;
    }
    .sell{
      background: #FF5F56;
    }
  }
}
</style>