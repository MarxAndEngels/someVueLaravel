<template lang="">
       <div class='w-25'>
        <div>
               <input type="text" v-model='name' class='form-control'>  
        </div>
        <div>
               <input type="number" v-model='age'  class='form-control'>  
        </div>
        <div>
               <input type="text" v-model='job' class='form-control'>  
        </div> 
      <button :disabled='isDisabled' @click.prevent='updatePerson' type="button" class="btn btn-primary">Update</button>
    </div>
</template>
<script>
// import router from '../../router';
export default {
    name: "Edit",
    data(){
        return{
            name:null,
            age:null,
            job:null,
        }
    },
    mounted(){
    this.getPeople()
    },
    methods:{
        getPeople(){
            axios.get('/api/people/'+this.$route.params.id).then(data =>{
                this.name = data.data.name;
                this.age = data.data.age;
                this.job = data.data.job;

             });
        },
        updatePerson(){
              axios.patch('/api/people/'+this.$route.params.id, {
                  'name': this.name, 
                  'age': this.age, 
                  'job': this.job, 
                  }).then(data =>{
                      //вызор роутера без импорта
                  this.$router.push({name:'person.show',params: {'id': this.$route.params.id} });
             });
        },
    },
    computed:{
        isDisabled(){
            return (!this.name || !this.age || !this.job)
        }
    }
}
</script>
<style lang="">
    
</style>