<template lang="">
    <div>
         <HeaderComponent></HeaderComponent>
          <router-view></router-view>
          
    </div>
</template>
<script>
import HeaderComponent from './HeaderComponent';
export default {
    name: "Index",
    components:{
        HeaderComponent
    }
}
</script>
<style lang="">
    
</style>