<template>
  <div class="coins">
    <div class="box">
      <div>
        <span class="btc_span">BTC</span>
        <span class="material-symbols-outlined arrow"> arrow_forward_ios </span>
      </div>
      <div>
        <span>可用额度</span>
        <span style="text-align: center;">锁定</span>
        <span style="text-align: right;">折合</span>
      </div>
      <div class="right_div">
        <span>0.0000</span>
        <span style="text-align: center;">0.0000</span>
        <span style="text-align: right;">0.0000</span>
      </div>
    </div>
    <div class="box">
      <div>
        <span class="btc_span">BTC</span>
        <span class="material-symbols-outlined arrow"> arrow_forward_ios </span>
      </div>
      <div>
        <span>可用额度</span>
        <span style="text-align: center;">锁定</span>
        <span style="text-align: right;">折合</span>
      </div>
      <div class="right_div">
        <span>0.0000</span>
        <span style="text-align: center;">0.0000</span>
        <span style="text-align: right;">0.0000</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coins{
    padding-top: 20px;
    .box{
        display: flex;
        align-content: space-around;
        flex-direction: column;
        background: #364F6B;
        border-radius: 5px;
        margin: 20px 0px;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
            font-size: 15px;
            padding: 10px;
            .btc_span{
                color: #1989FA;
                font-weight: 600;
            }
            .arrow{
                font-size: 18px;
                text-align: right;
            }
            span{
                width: 33%;
            }
        }
    }
}
</style>