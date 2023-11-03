<script setup>
import { ref } from "vue";

const deal = ref([
  {
    price: "24465",
    num: "0.64",
  },
  {
    price: "1654",
    num: "0.3",
  },
  {
    price: "2846",
    num: "3",
  },
  {
    price: "1.35",
    num: "0.3",
  },
]);

const show = ref(false);
const showPopup = () => {
  show.value = true;
};
</script>

<template>
  <div class="trade">
    <div class="header">
      <div class="left" @click="showPopup">
        <span class="material-symbols-outlined"> menu </span>
        <span>BTC/USDT</span>
      </div>
      <div class="mid">
        <span>交易</span>
      </div>
      <div class="right">
        <span class="material-symbols-outlined"> signal_cellular_alt </span>
      </div>
    </div>
    <van-popup
      v-model:show="show"
      position="left"
      :style="{ width: '50%', height: '100%' }"
      >内容</van-popup
    >
    <div class="box">
      <div class="left">
        <div class="btn">
          <button class="buy">买入</button>
          <button class="sell">卖出</button>
        </div>
        <div class="limit">
          <select>
            <option value="10x">10x</option>
            <option value="50x">50x</option>
            <option value="100x">100x</option>
          </select>
        </div>
        <div class="num">
          <van-stepper v-model="value" step="1000" min="1" max="10000000" />
        </div>
        <div class="buy_btn">
          <button>买入BTC</button>
        </div>
      </div>
      <div class="right">
        <div style="color: #12b886" v-for="(item, index) in deal" :key="index">
          <span>{{ item.price }}</span
          ><span>{{ item.num }}</span>
        </div>
        <span class="mid">23641</span>
        <div style="color: #e23e57" v-for="(item, index) in deal" :key="index">
          <span>{{ item.price }}</span
          ><span>{{ item.num }}</span>
        </div>
      </div>
    </div>
    <div class="position">
      <div class="title">
        <span class="entrust">当前委托(0)</span>
        <div>
            <span class="material-symbols-outlined"> feed </span>
            <span>全部</span>
        </div>
      </div>
      <div class="main">
        <div class="main_box">
            <van-empty description="暂无委托" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trade {
  width: auto;
  height: auto;
  padding: 15px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    div {
      width: 33%;
    }
    .left {
      display: flex;
      align-items: center;
    }
    .mid {
      font-size:16px;
      text-align: center;
    }
    .right {
      text-align: right;
    }
  }
  .box {
    margin: 20px 0px;
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    .left {
      width: 48%;
      box-sizing: border-box;
      flex-direction: column;
      padding: 10px;
      .btn {
        width: auto;
        height: 40px;
        border-radius: 5px;
        button {
          width: 50%;
          height: 40px;
          border: 0;
          font-size: 14px;
        }
        .buy {
          background: #12b886;
        }
        .sell {
          background: #e23e57;
        }
      }
      .limit {
        width: auto;
        height: 40px;
        padding: 20px 0px;
        select {
          height: 40px;
          width: 100%;
          outline: none;
          border-radius: 5px;
          box-sizing: border-box;
          padding-left: 5px;
        }
      }
      .num {
        ::v-deep(.van-stepper__input) {
          height: 40px;
          width: 50%;
          margin: 0;
        }
        ::v-deep(.van-stepper__minus) {
          height: 40px;
          width: 25%;
        }
        ::v-deep(.van-stepper__plus) {
          height: 40px;
          width: 25%;
        }
      }
      .buy_btn {
        width: auto;
        height: 40px;
        margin-top: 20px;
        button {
          background: #12b886;
          width: 100%;
          height: 40px;
          border: 0;
        }
      }
    }
    .right {
      width: 48%;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      div {
        display: flex;
        justify-content: space-between;
      }
      .mid {
        font-weight: 600;
        font-size: 18px;
        padding: 5px 0px;
      }
    }
  }
  .position {
    width: auto;
    height: auto;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .entrust{
            font-weight: 600;
            font-size: 15px;
        }
        div{
            display: flex;
            justify-content: space-around;
            font-size: 15px;
        }
    }
  }
}
</style>