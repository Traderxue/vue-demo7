<script setup>
import { ref } from "vue";

const list = ref([
    {
        lang:"zh"
    },
    {
        lang:"zh_hk"
    },
    {
        lang:'cn'
    }
])
</script>

<template>
  <div class="lang">
    <span>简体中文</span>
    <span>繁体中文</span>
    <span>English</span>
  </div>
</template>

<style lang="scss" scoped>
.lang {
  width: auto;
  height: 100%;
  background: #102030;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  span{
    padding: 10px 0px;
  }
  span:hover{
    
  }
}
</style>