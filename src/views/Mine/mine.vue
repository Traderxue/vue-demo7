<script setup>
import { ref } from "vue";

const navList = ref([
    {
        title:"团队",
        num:"7"
    },
    {
        title:"委托收益",
        num:"77152 USDT"
    },
    {
        title:"佣金收益",
        num:"3316 USDT"
    },
    {
        title:"排行榜",
        num:"1"
    }
])
</script>

<template>
  <div class="mine">
    <div class="header">
      <span>我的</span>
    </div>
    <div class="top">
      <div class="title">
        <div>
          <span>白银</span>
          <span class="material-symbols-outlined"> award_star </span>
        </div>
        <div>
          <span>余额</span>
          <span>6564.00</span>
        </div>
      </div>
      <div class="income">
        <div class="left">
          <span>总收益(USDT)</span>
          <div>
            <span>7764.15</span>
            <span class="material-symbols-outlined"> arrow_forward_ios </span>
          </div>
        </div>
        <div class="right">
          <span>今日收益(USDT)</span>
          <div>
            <span>55.63</span>
            <span class="material-symbols-outlined"> arrow_forward_ios </span>
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <div>
        <span style="color: #00adb5">7</span>
        <span>邀请人数</span>
      </div>
      <div>
        <span style="color: #e23e57">8</span>
        <span>团队人数</span>
      </div>
      <div>
        <span style="color: #3ec1d3">0</span>
        <span>今日新增</span>
      </div>
    </div>
    <div class="box">
      <div class="per" v-for="(item,index) in navList" :key="index">
        <span>{{item.title}}</span>
        <div>
          <span>{{item.num}}</span>
          <span class="material-symbols-outlined"> arrow_forward_ios </span>
        </div>
      </div>
      <button>邀请好友</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  width: auto;
  height: auto;
  padding: 15px;
  .header {
    height: 25px;
    width: auto;
    text-align: center;
  }
  .top {
    width: auto;
    height: 160px;
    background: #203141;
    border-radius: 5px;
    margin: 10px 0px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 15px;
    .title {
      padding: 5px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        font-size: 14px;
        padding: 5px 0px;
        span {
          padding-left: 5px 0px;
        }
      }
    }
    .income {
      display: flex;
      justify-content: space-around;
      .left,
      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          padding: 5px 0px;
          font-size: 14px;
        }
        div {
          display: flex;
          align-items: center;
          span {
            padding: 5px 2px;
          }
        }
      }
    }
  }
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      background: #203141;
      border-radius: 5px;
      padding: 25px;
      font-size: 14px;
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #203141;
    border-radius: 5px;
    padding: 25px 0px;
    .per {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      span {
        font-size: 14px;
        padding-right: 5px;
      }
      div {
        display: flex;
        align-items: center;
      }
    }
    button{
        height: 40px;        
        width: 80%;
        background: #276AF5;
        color: #FFF;
        font-size: 14px;
        border: 0;
        border-radius: 20px;
        margin: 10px auto;
    }
  }
}
</style>