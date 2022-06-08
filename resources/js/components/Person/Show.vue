<template lang="">
     <div>
    <div v-if='person'>
     <div>{{ person.name }}</div>
     <div>{{ person.age }}</div>
     <div>{{ person.job }}</div>
        <div><router-link :to="{ name: 'person.edit' , params: {'id': person.id} }">edit</router-link></div>
    </div>
    </div>
</template>
<script>
export default {
    name: "Show",
    data(){
        return{
        person:null,
        }
    },
    mounted(){
       this.getPerson()
    },
    methods:{
        getPerson(){
            axios.get('/api/people/'+this.$route.params.id).then(data =>{this.person = data.data});
        },
    },
}
</script>
<style lang="">
    
</style>