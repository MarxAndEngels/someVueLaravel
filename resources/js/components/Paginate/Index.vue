<template lang="">
    <div>
        <div v-if='people'>
            <div v-for='person of people'>
                   <p>{{ person.name }}</p>
                   <p>{{ person.age }}</p>
                     <p>{{ person.job }}</p>
                   <p>--------------</p>
            </div>
        </div>
        <button @click='setPaginate'> +1</button>
    </div>
</template>
<script>
export default {
    name:'Index',
    data(){
        return{
             people: null,
             count: 1
        }
    },
       mounted(){
        this.getPeoplePaginate();
    },
        methods:{
        getPeoplePaginate(){
            axios.post('/api/more', {count: this.count}).then(data =>{
            this.people = data.data.data;
            console.log(data);
              });
        }, 
        setPaginate(){
            this.count++;
             this.getPeoplePaginate();
        }

    },
}
</script>
<style lang="">
    
</style>