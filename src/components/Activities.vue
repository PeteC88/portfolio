<template>
    <div class="activity-container">
        <button @click="getActivity">Get Activity</button>
        <div>
            <p>{{ activity.activity }}</p>
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

