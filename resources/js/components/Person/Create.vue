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
      <button :disabled='isDisabled' @click.prevent='store' type="button" class="btn btn-primary">Primary</button>
    </div>
</template>
<script>
   import router from '../../router';
export default {
    name: "Create",
    data(){
        return{
            name:null,
            age:null,
            job:null,
        }
    },
    methods:{
        store(){
            axios.post('/api/people', {'name':this.name, 'age': this.age, 'job': this.job})
           .then(data =>{ router.push({name: 'person.index'}) });
       }
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