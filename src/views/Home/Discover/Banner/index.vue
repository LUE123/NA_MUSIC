<template>
  <div class="banner-wrapper">
      <div class="wrapper">
          <!-- 图片框 -->
        <div class="img-wrapper">
            <transition name="show">
                <img v-lazy="img" v-show="isShow" @click="Go(imgList[imgIndex].type,imgList[imgIndex].id)">     
            </transition>                     
            <!-- 轮播图下的点 -->
            <ul class="ponintList">
                <li v-for="(point,index) in imgList" :key="index" @click="changeImg(index)" :class="{active:index == imgIndex}"></li>                
            </ul>
            <!-- 轮播图两侧 -->
            <div class="pre" @click="pre"></div>
            <div class="nex" @click="nex"></div>
        </div>
        <!-- 下载 -->
        <div class="download-wrapper">
            <div class="download"></div>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
      <div class="img-blur">
        <img v-lazy="img" class="blur">
       </div>
  </div>
</template>

<script>
export default {
    name:'banner',
    data() {
        return {
            //全部图片
            imgList:[],
            imgNum:9,
            //当前轮播图图片
            img:'http://p1.music.126.net/p8N6yf3bA0Ba57H8KeKV5A==/109951167055668014.jpg',
            imgIndex:0,
            timer:function(){},
            isShow:true, 
        }
    },
    methods:{
        //获取banner资源
        async getBanner(){
            let result = await this.$API.reqMockLbt();
            // console.log(result);
            result.data.data.forEach((item)=>{
                this.imgList.push({url:item.imageUrl,id:item.targetId});
            })
            this.imgNum = this.imgList.length;
            this.img = this.imgList[0].url;
        },
        //切换图片
        changeImg(index){
            this.img=this.imgList[index].url;
            this.stopBanner();
            this.imgIndex = index;
            this.startBanner();
        },
        //上一张图片
        pre(){
            this.stopBanner();
            this.imgIndex--;
            if(this.imgIndex < 0) this.imgIndex = this.imgNum-1;
            this.img = this.imgList[this.imgIndex].url;
            this.startBanner();
        },
        //上一张图片
        nex(){
            this.stopBanner();
            this.imgIndex++;
            if(this.imgIndex > this.imgNum-1) this.imgIndex = 0;
            this.img = this.imgList[this.imgIndex].url;
            this.startBanner();
        },
        //开启轮播
        startBanner(){
            this.timer = setInterval(() => {
                this.isShow=false;
                this.imgIndex++;
                if(this.imgIndex > this.imgNum-1) this.imgIndex = 0;
                this.imgIndex--;
                setTimeout(() => {
                    this.img = this.imgList[this.imgIndex+1].url;
                    this.isShow=true;     
                    this.imgIndex++;
                }, 1400);
            }, 4000);
        },
        //暂停轮播
        stopBanner(){
            clearInterval(this.timer);
        },
        // 点击回调
        // Go(type,id){
        //     let path;
        //     if(type == 1) path = '/song';
        //     else if(type == 10) path = '/album';
        //     this.$router.push({
        //         path,
        //         query:{
        //             id
        //         }
        //     })
        // }
    },
    // 获取图片资源并开启定时器
    mounted() {
        this.getBanner();
        this.startBanner();
    },
    //销毁前关闭定时器
    beforedestroy(){
        clearInterval(this.timer);
    }
}
</script>

<style scoped lang = "less">
    .banner-wrapper{
        height: 285px;
        width: 100%;
        position: relative;
        .wrapper{
            width: 984px;
            height: 100%;
            margin: 0 auto;
            position: relative;
            z-index: 1;
            .img-wrapper{
                width: 730px;
                height: 100%;
                z-index: 10;
                &:hover{
                    cursor: pointer;
                }
                img{
                    width: 730px;
                    height: 285px;
                }
                /* 点 */
                .ponintList{
                    width: 180px;
                    height: 20px;
                    position: absolute;
                    z-index: 2;
                    /* background: red; */
                    bottom: 2px;
                    left: 275px;
                    display: flex;
                    li{
                        width: 20px;
                        height: 20px;
                        background: url('./images/banner.png') no-repeat 4px -343px;
                        &:hover{
                            background: url('./images/banner.png') no-repeat -15px -343px;
                            cursor: pointer;
                        }
                    }
                }
                li.active{
                      background: url('./images/banner.png') no-repeat -15px -343px;
                }
                /* 箭头 */
                .pre,
                .nex{
                    width: 37px;
                    height: 63px;
                    position: absolute;
                    top:111px;
                }
                /* 上一个 */
                .pre{
                    left: -68px;
                    background: url('./images/banner.png') no-repeat 0 -360px;
                    &:hover{
                        background-position: 0 -430px;
                        cursor: pointer;
                    }
                }
                /* 下一个 */
                .nex{
                    right: -68px;
                    background: url('./images/banner.png') no-repeat 0 -508px;
                    &:hover{
                        background-position: 0 -578px;
                        cursor: pointer;
                    }
                }
            }

        }
        /* 下载 */
        .download-wrapper{
            width: 254px;
            height: 100%;
            position: absolute;
            right: 0;
            top:0;
            background: url('./images/download.png') no-repeat;

            .download{
                width: 215px;
                height: 56px;
                margin: 185px 0 0 19px;
                
                &:hover{
                    background-color: rgba(0, 0, 205, 0.1);
                    cursor: pointer;
                }
            }
            p{
                margin-top:10px;
                text-align: center;
            }
        }
        /* 背景模糊图片 */
        .img-blur{
            width: 100%;
            height: 285px;
            overflow: hidden;
            .blur{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                z-index: 0;
                -webkit-filter: blur(30px); /* Chrome, Opera */
                -moz-filter: blur(30px);
                -ms-filter: blur(10px);    
                filter: blur(10px);    
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        }
        .show-enter-active{
        animation:atguigu 1.4s;
        }
        .show-leave-active{
            animation:atguigu 1.4s reverse;
        }
        @keyframes atguigu {
            from{
                opacity: 0.6;
            }

            to{
                opacity: 1;
            }
        }
        }
</style>