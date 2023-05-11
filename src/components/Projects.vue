<template>
    <section class="projects">
        <h1> Mes projets</h1>
        <div class="projects__cards">
            <CardTemplate
            v-for="card in projectCards"
            :key="card.id"
            :cardId="card.id"
            :descriptionFront = "card.descriptionFront"
            :titleBack="card.titleBack"
            :languagesUsed="card.languagesUsed"
            :descriptionBack="card.descriptionBack"
            :siteLink="card.link"
            :cardImage="card.img"
            :cardTitle="card.titleFront"
            @flipCardAction="flipCard(card.id)"
            :singleCardFlipped="card.isFlipped"
            />
        </div>
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
