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
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <!-- <li class="page-item">
        <a @click.prevent='getPeoplePaginate(pagination.prev_page_url)' :class='{disabled: !pagination.prev_page_url }' class="page-link" href="#">Previous</a>
        </li> -->
    <li v-if='pagination' class="page-item" v-for='el of pagination.links' :key='el.label'>
        <a @click.prevent='getPeoplePaginate(el.url)' class="page-link" :class='{ active: el.active }' href="#">{{ el.label }}</a>
        </li>
    <!-- <li class="page-item"><a @click.prevent='getPeoplePaginate(pagination.next_page_url)' :class='{disabled: !pagination.next_page_url }' class="page-link" href="#">Next</a></li> -->
  </ul>
</nav>
    </div>
</template>
<script>
export default {
    name:'SomePaginate',
     data(){
        return{
             people: null,
             pagination: null,
        }
    },
       mounted(){
        this.getPeoplePaginate(null);
    },
        methods:{
        getPeoplePaginate(url){
            if(url == null){
               url =  '/api/more/some'
            }
            axios.get(url).then(data =>{
            this.people = data.data.data;
            this.makePagination(data.data);
              });
        }, 
        makePagination(res){
            let pagination={
                current_page: res.current_page,
                last_page: res.last_page,
                prev_page_url: res.prev_page_url,
                next_page_url: res.next_page_url,
                links: res.links.filter(el=>{return +(el.label) < 3
                 || el.label=='&laquo; Previous'
                 || el.label=='Next &raquo;'
                 })
            }
            for(let el of pagination.links){
                if(el.label === '&laquo; Previous'){
                    el.label = 'prev'
                }
                if(el.label === 'Next &raquo;'){
                    el.label = 'next'
                }
            }
            this.pagination = pagination;
            console.log(pagination);
        }
    },
}
</script>
<style>
    .page-link.disabled{
        opacity: 0.6;
    }
    .page-link.active{
        background: rgb(199, 156, 55);
    }
</style>