const state = {
    people: null
}

const getters = {
    people: state =>{      //также как в state
        return state.people
    }
}

const actions = {
    getPeople({state,commit,dispatch}){
        axios.get('/api/people/').then(data =>{
            commit('setPeople', data.data);
        });
    },
    deletePeople({dispatch},id){
        axios.delete('/api/people/'+id).then(data =>{ dispatch('getPeople') });
     }
}

const mutations = {
    setPeople(state, people){
        state.people = people;
    }
}

export default {
    state,mutations,getters,actions
}