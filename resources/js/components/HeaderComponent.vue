<template lang="">
    <div>
    <router-link :to="{ name: 'person.index' }">people</router-link>
    <router-link :to="{ name: 'person.create' }">create</router-link>
    <router-link :to="{ name: 'slider.index' }">slider</router-link>
    <router-link :to="{ name: 'paginate.index' }">paginate</router-link>
    <router-link :to="{ name: 'paginate.some' }">paginate some</router-link>
    <router-link :to="{ name: 'paginate.tabs' }">tabs</router-link>
    <router-link :to="{ name: 'task.index' }">task</router-link>
    <router-link :to="{ name: 'code.index' }">code</router-link>
    <router-link :to="{ name: 'video.index' }">video</router-link>
    </div> 
</template>
<script>
export default {
    name:'HeaderComponent'
}
</script>
<style lang="">
    
</style>