<template lang="">
    <div>
         <input type="text" v-model='search'>
             <div v-for='(el,key) of dataSearch' :key='key'>
                  {{ el }}
             </div>
         <br>
    </div>
</template>
<script>
export default {
    name:'Button',
    data(){
        return{
            search: '',
           data: ['animation', 'drams', 'guitar', 'Present']
        }
    },
    computed:{
        dataSearch(){
          if(this.search == ''){
            return null;
          }
          return this.data.filter(el=> {return el.includes(this.search)})
        }
    },
}
</script>
