<script setup>
import { ref } from "vue";
import { showToast } from "vant";
import list from "@/components/list.vue";
import { useMyStore } from "../../stores/myStore";
import i18n from "@/lang/index.js";

const myStore = useMyStore();

const listData = ref([
  {
    type: "IOTA",
    price: "0.154",
    parcent: "+1.18%",
  },
  {
    type: "BTC",
    price: "23461",
    parcent: "+0.18%",
  },
  {
    type: "ETH",
    price: "1568",
    parcent: "+3.8%",
  },
]);

const typeList = ref([
  {
    type: "BTC",
    price: "26431",
    parcent: "2.3%",
    up: 1,
  },
  {
    type: "ETH",
    price: "1634",
    parcent: "1.3%",
    up: 1,
  },
  {
    type: "ETH",
    price: "1634",
    parcent: "1.3%",
    up: 1,
  },
  {
    type: "ETH",
    price: "1634",
    parcent: "1.3%",
    up: 1,
  },
  {
    type: "ETH",
    price: "1634",
    parcent: "1.3%",
    up: 1,
  },
]);

const langList = ref([
  {
    lang: "zh",
  },
  {
    lang: "zh_hk",
  },
  {
    lang: "en",
  },
]);

const show = ref(false);

const showPopup = () => {
  show.value = true;
};

const changeLang = (item)=>{
  i18n.global.locale = item
  show.value = false
}

const showLeft = ref(false);

const showPopupLeft = () => {
  showLeft.value = true;
};


</script>

<template>
  <div class="home">
    <div class="header">
      <span class="material-symbols-outlined" @click="showPopupLeft">
        menu
      </span>
      <van-popup
        v-model:show="showLeft"
        position="left"
        :style="{ width: '50%', height: '100%' }"
      >
        <div class="list_left">
          <list />
        </div>
      </van-popup>
      <span>{{$t('home.title')}}</span>
      <span class="material-symbols-outlined" @click="showPopup">
        language
      </span>
      <van-popup v-model:show="show" position="top" :style="{ height: '30%' }">
        <div class="lang">
          <span v-for="(item,index) in langList" :key="index"  @click="changeLang(item)">{{item.lang}}</span>
        </div>
      </van-popup>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img src="http://127.0.0.1:5173/banner1.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://127.0.0.1:5173/banner2.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://127.0.0.1:5173/banner3.png" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        background="#102030"
        color="#F5F5F5"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <div class="type">
      <div v-for="(item, index) in listData" :key="index">
        <p class="p1">{{ item.type }}<span>/USDT</span></p>
        <p class="p2">{{ item.price }}</p>
        <p class="p3">{{ item.parcent }}</p>
      </div>
    </div>
    <div class="quick">
      <div class="left">
        <p>法币交易</p>
        <span>支持USDT、ETH等</span>
      </div>
      <div class="right">
        <div class="top">
          <div>
            <img src="@/assets/img/img_2.png" alt="" /> <span>快捷充币</span>
          </div>
        </div>
        <div class="bottom">
          <div>
            <img src="@/assets/img/img_3.png" alt="" /> <span>活动中心</span>
          </div>
        </div>
      </div>
    </div>
    <div class="increase">
      <span>涨幅榜</span>
      <span>成交额榜</span>
      <span>新币榜</span>
    </div>
    <div class="box">
      <div class="title">
        <span>名称</span>
        <span>最新价(US)</span>
        <span>涨幅榜</span>
      </div>
      <div class="list" v-for="(item, index) in typeList" :key="index">
        <div>
          <span>{{ item.type }}</span>
          <p>/USDT</p>
        </div>
        <div>
          <span>{{ item.price }}</span>
        </div>
        <div>
          <button>{{ item.parcent }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
  padding: 15px 15px 80px 15px;
  background: #102030;
  .header {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .lang {
      width: auto;
      height: 100%;
      background: #102030;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      span {
        padding: 10px 0px;
      }
      span:hover {
      }
    }
  }
  .banner {
    width: auto;
    height: 160px;
    padding: 20px 0px;
    img {
      width: 100%;
      height: 160px;
      border-radius: 5px;
    }
  }
  .notice {
    margin: 5px 0px;
  }
  .van-popup {
    background: #102030;
    padding: 15px;
  }
  .type {
    width: auto;
    height: auto;
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 30%;
      text-align: center;
      background: #364f6b;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 15px;
      p {
        padding: 5px 0px;
      }
      .p1 {
        font-size: 15px;
        font-weight: 600;
        span {
          font-weight: 500;
        }
      }
      .p2 {
        color: #02c289;
        font-weight: 600;
      }
      .p3 {
        color: #02c289;
        font-size: 15px;
      }
    }
  }
  .quick {
    display: flex;
    justify-content: space-between;
    height: 160px;
    padding: 10px 0px;
    .left {
      width: 60%;
      height: 100%;
      background-color: #364f6b;
      background-image: url("@/assets/img/img_1.png");
      background-size: cover;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 40px 20px;
      position: relative;
      img {
        position: absolute;
        right: 10;
        top: 50%;
      }
      p {
        font-size: 22px;
        font-weight: 600;
        padding-bottom: 10px;
      }
      span {
        font-size: 14px;
      }
    }
    .right {
      width: 35%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .top {
        height: 45%;
        background: #364f6b;
        border-radius: 5px;
        padding: 25px 15px;
        box-sizing: border-box;
        div {
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
          span {
            font-size: 14px;
            padding-left: 5px;
          }
        }
      }
      .bottom {
        height: 45%;
        background: #364f6b;
        border-radius: 5px;
        padding: 25px 15px;
        box-sizing: border-box;
        div {
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
          span {
            font-size: 14px;
            padding-left: 5px;
          }
        }
      }
    }
  }
  .increase {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    font-weight: 600;
    font-size: 15px;
    padding: 5px 30px;
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .title {
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      color: #ccc;
      padding: 10px 0px;
      span {
        width: 33%;
        text-align: center;
      }
    }
    .list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 15px 0px;
      font-size: 15px;
      div {
        text-align: center;
        width: 33%;
        span {
          font-weight: 600;
        }
        p {
          display: inline-block;
          font-size: 14px;
          color: #ccc;
        }
        button {
          width: 70px;
          height: 35px;
          background: #02c289;
          color: #fff;
          border: 0;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>