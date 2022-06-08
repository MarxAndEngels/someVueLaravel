<template lang="">
    <div>
     <button @click="setActive('tab-1')" class='btn btn-primary' :class="{active: isActiveTab('tab-1')}">1</button>
     <button @click="setActive('tab-2')" class='btn btn-success' :class="{active: isActiveTab('tab-2')}">2</button>
     <button @click="setActive('tab-3')" class='btn btn-secondary' :class="{active: isActiveTab('tab-3')}">3</button>
        <div v-show="isActiveTab('tab-1')">
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, earum amet ullam obcaecati consectetur libero, ipsam quos, veniam accusamus minus optio eum officiis aut? Doloremque tempora quas commodi reprehenderit itaque.
            <img style='width:200px' src="https://aboveart.ru/wp-content/uploads/2016/09/alena-aenami-reflect1k.jpg" alt="">
            </div>
        <div v-show="isActiveTab('tab-2')">
            2Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, earum amet ullam obcaecati consectetur libero, ipsam quos, veniam accusamus minus optio eum officiis aut? Dolore
            <img style='width:200px' src="https://w-dog.ru/wallpapers/13/2/473620166137268/art-risunok-malchik-nastroenie-derevo-zavod-postrojki-dym.jpg" alt="">
            </div>
        <div v-show="isActiveTab('tab-3')">
            3Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, earum amet ullam obcaecati consectetur libero, ipsam quos, veniam accusamus minus optio eum officiis aut? Doloremque tempora quas commodi
           <img style='width:200px' src="https://get.wallhere.com/photo/2880x1800-px-abstract-abstraction-ART-artistic-artwork-fantasy-original-1667887.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:'Tabs',
    data(){
        return{
          activeTab: 'tab-1'
        }
    },
    methods:{
         setActive(tab){
               this.activeTab = tab
         },  
         isActiveTab(tab){
             return this.activeTab === tab
         }
    }

}
</script>
<style>
    .btn.active{
        border:1px solid black;
        margin-bottom:10px;
    }
</style>