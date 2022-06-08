<template lang="">
    <div>
        <div class="wrapper">
       <div class="v-carusel" :style="{ 'margin-left' : '-'+(100*currentSlideIndex)+'%'}">
       <div v-for="item of sliderItems" :key='item.id'>
           <img style='width: 300px; height:140px' :src="item.img" alt="">
       </div>
        </div>
        <button @click='prevSlide'>prev</button>
        <button @click='nextSlide'>next</button>
    </div>
    </div>
</template>
<script>
export default {
    name:'Index',
    data(){
        return{
            sliderItems:[
                { id:1 , img: 'https://www.tapeciarnia.pl/tapety/normalne/230560_gory_jezioro_skaly.jpg' },
                { id:2 , img: 'https://www.fonstola.ru/download.php?file=201201/1440x900/fonstola.ru-73623.jpg' },
                { id:3 , img: 'https://www.itl.cat/pngfile/big/186-1861341_widescreen-road-scenery-hd.jpg' },
                { id:4 , img: 'https://w-dog.ru/wallpapers/9/8/501598999783225/josemiti-park-nebo-gory-les-ozero-kamni.jpg' },
                { id:5 , img: 'https://www.tapeciarnia.pl/tapety/normalne/85908_owalne_kamienie.jpg' },
            ],
            currentSlideIndex: 0,
        }
    },
    methods:{
        prevSlide(){
          if(this.currentSlideIndex > 0){
             this.currentSlideIndex--
          }
        },
        nextSlide(){
            if(this.currentSlideIndex >= this.sliderItems.length-1 ){
                this.currentSlideIndex = 0;
            }else{
                 this.currentSlideIndex++
            }
        }
    }
}
</script>
<style>
    .wrapper{
        max-width:300px;
        overflow: hidden;
        margin:0 auto;
    }
    .v-carusel{
        display: flex;
        transition-duration: 0.6s;
    }
</style>