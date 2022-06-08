<template lang="">
    <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">age</th>
      <th scope="col">job</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for='person of people'>
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
      <td>{{ person.job }}</td>
          <td><router-link :to="{ name: 'person.edit' , params: {'id': person.id} }">edit</router-link></td>
    <td><router-link :to="{ name: 'person.show' , params: {'id': person.id} }">show</router-link></td>
     <td><a @click.prevent="$store.dispatch('deletePeople',person.id)" href="">delete</a></td> 
    </tr>
  </tbody>
</table>
<div>More</div>

<div v-if='peopleVuex' v-for='people of peopleVuex'>
    <div>{{ people.name }}</div>
    <div>{{ people.age }}</div>
    <div>{{ people.job }}</div>
</div>

</div>

    </div>
</template>
<script>
export default {
    name: "Index",
    data() {
        return{
            people: null,
        }
    },
    mounted(){
      this.$store.dispatch('getPeople'); //это вызов action
        this.getPeople();
    },
    methods:{
        getPeople(){
            axios.get('/api/people/').then(data =>{
            this.people = data.data;
              });
        },
        // deletePeople(id){
        //    axios.delete('/api/people/'+id).then(data =>{ this.getPeople() });
        // }
    },
    computed:{
       peopleVuex(){
           return this.$store.getters.people
       }
    }

}
</script>
<style lang="">
    
</style>