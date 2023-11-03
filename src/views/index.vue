<script setup>
import { ref } from "vue";
import {showToast} from "vant";

const active = ref(0);

const loading = ref(false);

const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <div class="index">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <RouterView />
    </van-pull-refresh>
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#F5F5F5"
      route
    >
      <van-tabbar-item to="/home">
        <span class="material-symbols-outlined"> home </span>
        <br />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/trade">
        <span class="material-symbols-outlined"> monitoring </span>
        <br />
        <span>交易</span>
      </van-tabbar-item>
      <van-tabbar-item to="/wallet">
        <span class="material-symbols-outlined"> account_balance_wallet </span>
        <br />
        <span>钱包</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span class="material-symbols-outlined"> person </span>
        <br />
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.index {
  width: auto;
  height: 100%;
  background: #102030;
  color: #f5f5f5;
}
.van-tabbar {
  background: #0b1622;
  height: 65px;
}
.van-tabbar-item {
  background: #0b1622;
}
.van-tabbar-item__text {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
</style>
