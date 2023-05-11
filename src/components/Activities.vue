<template>
    <div class="activity">
        <h1>Moment API</h1>
        <h5>Que serait un développeur sans les API? Si tu cherches une activité à faire, prend inspiration en cliccant sur le bouton en bas.</h5>
        <div class="activity__wrapper">
            <p>{{ activity.activity }}</p>
            <button @click="getActivity">Get Activity</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default{
    data(){
        return {}
    },
    computed:{
        ...mapState(['activity'])
    },
    methods:{
        getActivity(){
            this.$store.dispatch('getActivitiesAction');
        }
    }
}
</script>

