<script setup>
import { ref } from "vue";

const active = ref(1);
</script>

<template>
  <div class="wallet">
    <div class="header">
      <span>钱包</span>
    </div>
    <div class="top">
      <span>总账户资产折合</span>
      <span class="span1">0.000 USDT</span>
      <span class="span2">≈0.00 US</span>
    </div>
    <div class="banner">
      <div>
        <img src="http://127.0.0.1:5173/card_1.png" alt="" />
        <span>充币</span>
      </div>
      <div>
        <img src="http://127.0.0.1:5173/card_2.png" alt="" />
        <span>提币</span>
      </div>
      <div>
        <img src="http://127.0.0.1:5173/card_3.png" alt="" />
        <span>划转</span>
      </div>
    </div>
    <div class="list">
      <van-tabs
        v-model:active="active"
        background="#102030"
        title-inactive-color="#FFF"
        title-active-color="#1989fa"
        color="#1989fa"
      >
        <van-tab title="币币">币币</van-tab>
        <van-tab title="合约">合约</van-tab>
        <van-tab title="法币">法币</van-tab>
        <van-tab title="充提">充提</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wallet {
  width: auto;
  height: auto;
  padding: 15px;
  .header {
    width: auto;
    height: 25px;
    text-align: center;
    line-height: 25px;
  }
  .top {
    width: auto;
    height: 180px;
    box-sizing: border-box;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    color: #f5f5f5;
    span {
      padding: 10px 0px;
      font-size: 15px;
    }
    .span1 {
      font-size: 26px;
      font-weight: 600;
    }
    .span2 {
      font-size: 13px;
    }
  }
  .banner {
    width: auto;
    height: 80px;
    display: flex;
    justify-content: space-around;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      img {
        width: 60px;
        height: 60px;
      }
      span {
        font-size: 14px;
      }
    }
  }
  .list {
    padding: 20px 0px;
    .van-tab{
        padding-top: 15px;
    }
  }
}
</style>