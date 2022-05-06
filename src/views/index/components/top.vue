<template>
  <div class="hometop">
      <div class="hometop__leftitem">
        <a href="javascript:;" class="hometop__leftitem__item one">
            <div class="hometop__leftitem__item__left">
                <div>年度总盈亏</div>
                <div><span class="hometop__leftitem__item__left__num">68</span><span>万元</span></div>
            </div>
            <div>
                <span class="iconfont icon-yulebao"></span>
            </div>
        </a>
        <a href="javascript:;" class="hometop__leftitem__item two">
            <div class="hometop__leftitem__item__left">
                <div>年度收益率</div>
                <div><span class="hometop__leftitem__item__left__num">120</span><span>(%)</span></div>
            </div>
            <div>
                <span class="iconfont icon-piechart_2"></span>
            </div>
        </a>
      </div>
      <div class="hometop__leftitem hometop__rightitem">
        <a href="javascript:;" class="hometop__leftitem__item one">
            <div class="hometop__leftitem__item__left">
                <div>潜在投资人</div>
                <div><span class="hometop__leftitem__item__left__num">686</span><span>(人)</span></div>
                <div>Decreased by 10%</div>
            </div>
            <div>
                <span class="iconfont icon-payment"></span>
            </div>
        </a>
        <a href="javascript:;" class="hometop__leftitem__item two">
            <div class="hometop__leftitem__item__left">
                <div>意向投资人</div>
                <div><span class="hometop__leftitem__item__left__num">120</span><span>(%)</span></div>
                <div>Decreased by 50%</div>
            </div>
            <div>
                <span class="iconfont icon-wallet"></span>
            </div>
        </a>
        <a href="javascript:;" class="hometop__leftitem__item three">
            <div class="hometop__leftitem__item__left">
                <div>待审投资人</div>
                <div><span class="hometop__leftitem__item__left__num">120</span><span>(%)</span></div>
                <div>Decreased by 30%</div>
            </div>
            <div>
                <span class="iconfont icon-addressbook"></span>
            </div>
        </a>
        <a href="javascript:;" class="hometop__leftitem__item four">
            <div class="hometop__leftitem__item__left">
                <div>审核中投资人</div>
                <div><span class="hometop__leftitem__item__left__num">120</span><span>(%)</span></div>
                <div>Decreased by 80%</div>
            </div>
            <div>
                <span class="iconfont icon-Friendsettings"></span>
            </div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeTop',
    setup(){
    }
}
</script>

<style lang="less" scoped>
.hometop{
    height: 120px;
    width: 100%;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    .hometop__leftitem{
        width: 35%;
        padding: 10px 20px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 7px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hometop__leftitem__item{
            height: 100px;
            width: 49%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            font-size: 14px;
            .iconfont{
                font-size: 34px;
            }
            .hometop__leftitem__item__left{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .hometop__leftitem__item__left__num{
                    font-size: 20px;
                    font-weight: 600;
                    margin-right: 6px;
                }
            }
        }
        .one{
            background-color: #FFA3A1;
            border-radius: 7px;
            padding: 10px 20px 10px 10px;
            box-sizing: border-box;
        }
        .two{
            background-color: #84D9D2;
            border-radius: 7px;
            padding: 10px 20px 10px 10px;
            box-sizing: border-box;
        }
    }
    .hometop__rightitem{
        width: 64%;
        padding: 10px 20px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 7px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hometop__leftitem__item{
            height: 100px;
            width: 24%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            font-size: 14px;
            .iconfont{
                font-size: 34px;
            }
            .hometop__leftitem__item__left{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .hometop__leftitem__item__left__num{
                    font-size: 20px;
                    font-weight: 600;
                    margin-right: 6px;
                }
            }
        }
        .one{
            background-color: #87DE75;
            border-radius: 7px;
            padding: 10px 20px 10px 10px;
            box-sizing: border-box;
        }
        .two{
            background-color: #A5E7F0;
            border-radius: 7px;
            padding: 10px 20px 10px 10px;
            box-sizing: border-box;
        }
        .three{
            background-color: #93B7E3;
            border-radius: 7px;
            padding: 10px 20px 10px 10px;
            box-sizing: border-box;
        }
        .four{
            background-color: #EDAFDA;
            border-radius: 7px;
            padding: 10px 20px 10px 10px;
            box-sizing: border-box;
        }
    }
}
</style>