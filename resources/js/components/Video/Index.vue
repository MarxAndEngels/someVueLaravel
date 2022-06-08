<template lang="">
    <div>
        <center>
        <div class='player'>
        <video @click='playOrPause' v-bind:currentTime.prop="currentTime" ref='video' class='video'>
        <source src="/storage/videos/451.mp4"></source>
        </video>
        <div class='panel'>
            <div class="row">
            <div class="col-lg-1 panel__button">
                <i v-if='!statePanel' @click='playOrPause' class="fa fa-play" aria-hidden="true"></i>
                <i v-if='statePanel' @click='playOrPause' class="fa fa-pause" aria-hidden="true"></i>
                </div>

                <div class='col-lg-8 panel__progress'>
                    <!-- <progress @click='videoRewind' class="progress" max='100' value ='0'> </progress> -->
                   <div class='road' @click='videoRew'>
                   <div class='road__main'></div>
                   <div class='road__full'></div>
                   </div>
                </div>
                  <div class="col-lg-2 panel__button">
                      
                     <div class='speed'> speed
                 <span @click='speed(2)'>2</span>
                 <span @click='speed(1)'>1</span>
                 <span @click='speed(0.5)'>0.5</span>
                 </div>
                </div>
                  <div class="col-lg-1 panel__volume">
                      <i class="fa fa-volume-down" aria-hidden="true"></i>
                     <input @input='volume' class='volume' type="range" value='100' min=0 max=100>
                </div>
        </div>
        </div>
        </div>
        </center>
    </div> 
</template>
<script>
export default {
    name:'Index',
    data(){
     return{
         statePanel: false,
         statePanel: false,
         currentTime: null
     }
    },
    mounted(){
      let video = document.querySelector('.video');
      video.currentTime = '86';
      console.log(video.currentTime);
    },
    methods:{
        playOrPause(){
            let video = document.querySelector('.video');
            if(video.paused){
               video.play();
               this.statePanel = true;
            }else{
               video.pause();
                this.statePanel = false;
            }
        },
        speed(param){
           let video = document.querySelector('.video');
           video.play();
           video.playbackRate = param;
            this.statePanel = true;
        },
        volume(e){
           let video = document.querySelector('.video');
           video.volume = e.target.value / 100;
        },
        time(){
        //  let video = document.querySelector('.video');

        //  let video = this.$refs.video;
        //  let road__main = document.querySelector('.road__main');

        //  let duration = video.duration;
        //  let current = video.currentTime;
        //  road__main.style.width =(100*current)/duration + '%';
        //        console.log(video.currentTime);
        },
        videoRew(e){
            let road = document.querySelector('.road');
            let road__main = document.querySelector('.road__main');
            // let video = this.$refs.video;
            this.$refs.video.currentTime = 80;
               console.log(this.$refs.video.currentTime);
            // this.$refs.video.play();
            // let x = e.offsetX;
            // let width = road.offsetWidth;
            // road__main.style.width = 100*x/width + '%';
            // // video.pause();
            // this.timeOur = video.duration * (x/width);
            // video.currentTime = this.timeOur;
            // console.log(video.duration * (x/width));
            // console.log(this.timeOur);
            // // video.play();
            //   console.log(video.currentTime);
        }
    }
}
</script>
<style>
    .player{
     width:100%;
      height: 100vh;
    }
    .video{
      width:100%;
      max-width: 850px;
      z-index: 1;
      border-radius: 20px 20px 0 0;
    }
    .speed{
        cursor: pointer;
    }
    .panel{
        text-align: left;
        width: 100%;
        height: 60px;
        max-width: 850px;
        margin-top:-8px;
        background-color: blueviolet;
        z-index: 3213;
        border-radius: 0px 0px 20px 20px;
        padding: 16px 26px;
    }
    .panel__button i , .panel__volume i{
        cursor: pointer;
        font-size: 30px;
    }
    .panel__progress{
     transform: translate3d(-18px, 0px, 0px);
    }
    /* прогресс бар */
    /* .progress{
    width: 100%;
    height: 10px; 
    margin-top:9px;
    cursor: pointer;
    display: block;
    transition-duration: 0.2s;
    border: none;
    appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
    background-size: auto;
    background: #d8caf3;
    border: 0.5px solid black;
}
progress::-webkit-progress-bar {
    background: #d8caf3;
    }
progress::-moz-progress-bar {
    background: #d8caf3;
    }
    progress::-webkit-progress-value {
        background: #8475ce;
        border-right: 3px solid #232323;
        }   */

        .road{
            cursor: pointer;
            margin: 9px;
           position: relative;
        }
        .road__main{
            border-radius: 12px;
            position: absolute;
            width: 10%;
            height: 10px;
            left: -1px;
            background-color:#665eaf;
            z-index: 10;
        }
        .road__full{
            border-radius: 12px;
            position: absolute;
            width: 100%;
            height: 10px;
            background-color:#afaec0;
            z-index: 2;
        }
 /* прогресс бар */ 

        .panel__volume {
            position: relative;
        }
        .volume{
          opacity: 0;
          position: absolute;
          top:-160px;
          left: 20px;
          margin: 0;
         transform-origin: 75px 75px;
        transform: rotate(-90deg);
        transition-duration: 1s;
        cursor: pointer;
        /* звук */
        -webkit-appearance: none;
        background: none;
        /* звук */
        }

        .panel__volume i:hover + .volume{
          opacity: 1;
        }
        .volume:hover{
          opacity: 1;
        }

/* звук */

          .volume:focus {
    outline: none;
  }
  .volume::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #bb9ff3;
    border-radius: 1px;
    border: 1px solid #bb9ff3;
  }
  .volume::-webkit-slider-thumb {
    border: 2px solid #665eaf;
    height: 16px;
    width: 16px;
    border-radius: 23px;
    background: #665eaf;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }
  .volume:focus::-webkit-slider-runnable-track {
    background: #bb9ff3;
  }
  .volume::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #bb9ff3;
    /* margin-bottom: 5px; */
    border-radius: 1px;
    border: 1px solid #bb9ff3;
  }
  .volume::-moz-range-thumb {
    border: 2px solid #665eaf;
      height: 16px;
    width: 16px;
    border-radius: 22px;
    background: #665eaf;
    cursor: pointer;
    margin-top: -5px;
  }
  .volume:-ms-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  .volume::-ms-fill-lower {
    background: #665eaf;
    border: 1px solid #665eaf;
    border-radius: 2px;
  }
  .volume:-ms-fill-upper {
    background: #665eaf;
    border: 1px solid #665eaf;
    border-radius: 2px;
  }
  .volume::-ms-thumb {
    margin-top: 1px;
    border: 2px solid #665eaf;
    height: 16px;
    width: 16px;
    border-radius: 23px;
    background: #665eaf;
    cursor: pointer;
    margin-top: -5px;
  }
  .volume:focus::-ms-fill-lower {
    background: #665eaf;
  }
  .volume:focus::-ms-fill-upper {
    background: #665eaf;
  }

  /* звук */
</style>