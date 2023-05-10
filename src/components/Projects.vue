<template>
    <div>
        Mes projects
    </div>
    <section class="projects">
        <CardTemplate
        v-for="card in projectCards"
        :key="card.id"
        :siteLink="card.link"
        :cardImage="card.img"
        :cardTitle="card.titleFront"
        @flipCardAction="flipCard(card.id)"
        :singleCardFlipped="card.isFlipped"
        />
    </section>
</template>
<script>
import CardTemplate from './CardTemplate.vue'
import { mapState } from 'vuex';
export default {
    components:{CardTemplate},
    data(){
        return {
            isCardFlipped: false
        }
    },
    computed:{
        ...mapState(['projectCards'])
    },
    methods:{
        flipCard(cardId){
            this.$store.dispatch('flipCardAction',{
                cardId: cardId,

            })
        }
    }
}
</script>
<style lang="scss">


</style>
