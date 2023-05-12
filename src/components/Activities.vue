<template>
    <div class="activity">
        <h1>Moment API</h1>
        <h5>Que serait un développeur sans les API? Si tu cherches une activité à faire, prends inspiration en cliquant sur le bouton en bas.</h5>
        <div class="activity__wrapper">
            <div class="activity__carousel">
                <div class="activity__slide slide-1 ">
                    <p>{{ activity.activity }}</p>
                    <ul>
                        <li>prix : {{ activity.price }}</li>
                        <li>participants : {{ activity.participants }}</li>
                        <li>type: {{ activity.type }}</li>
                    </ul>
                </div>
                <div class="activity__slide slide-2" :class="{'slide-2--active': isSliding}">
                    <div v-if="oldActivity.activity">
                        <p>{{ oldActivity.activity }}</p>
                        <ul>
                            <li>prix : {{ oldActivity.price }}</li>
                            <li>participants : {{ oldActivity.participants }}</li>
                            <li>type: {{ oldActivity.type }}</li>
                        </ul> 
                    </div>
                    <h3 v-else>Pick one activity</h3>
                </div>
            </div>
            <button @click="slideAnimation" :disabled="isSliding">Nouvelle activité</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default{
    data(){
        return {
            isSliding:false,
            oldActivity: {}
        }
    },
    computed:{
        ...mapState(['activity'])
    },
    async mounted(){
        await this.getActivity();
    },
    methods:{
        getActivity(){
            this.$store.dispatch('getActivitiesAction');
        },
        slideAnimation(){
            this.isSliding = true;
            
           /*  this.getActivity();
            this.oldActivity = this.activity.activity;
 */
            setTimeout(()=>{
                this.getActivity();
                this.oldActivity = this.activity;
                this.isSliding = false;
            }, 1000)
        }
    }
}
</script>

