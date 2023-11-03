<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const userCenter = () =>{
    router.push("/mine")
}

const accountCenter = () =>{
    router.push("/wallet")
}
</script>

<template>
  <div class="list">
    <h3>火神</h3>
    <div class="top">
      <span>UID: 5505761</span>
      <span class="material-symbols-outlined icon_file"> file_copy </span>
    </div>
    <div class="box">
      <div class="per" @click="userCenter">
        <span class="material-symbols-outlined"> person </span>
        <span>用户中心</span>
      </div>
      <div class="per" @click="accountCenter">
        <span class="material-symbols-outlined"> lock </span>
        <span>账户中心</span>
      </div>
      <div class="per">
        <span class="material-symbols-outlined"> face </span>
        <span>咨询客服</span>
      </div>
      <div class="per">
        <span class="material-symbols-outlined"> help </span>
        <span>帮助中心</span>
      </div>
      <div class="per">
        <span class="material-symbols-outlined"> info </span>
        <span>关于我们</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-size: 15px;
  padding: 40px 0px;
  h3 {
    padding: 20px 0px;
  }

  .top {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    .icon_file {
      font-size: 18px;
      padding-left: 5px;
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .per {
      padding: 20px 0px;
      display: flex;
      align-items: center;
      span {
        padding: 5px;
      }
    }
  }
}
</style>