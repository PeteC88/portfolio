<template>
    <section>
        <div class="projects__project card" :class="{'card--flipped' : singleCardFlipped}"  @click="flipCardAction">
            <div class="card__front" :class="classById" >
                <img :src="cardImageSrc" :alt="cardTitle">
                <h3>{{ cardTitle }}</h3>
            </div>
            <div class="card__back">Back text Project 1</div>
        </div>
        <div class="card__instruction">
            <p>Clique sur la card pour voir plus d'info <span><font-awesome-icon :icon="['fas', 'hand-point-up']" bounce /></span></p>
        </div>  
    </section>
</template>
<script>
export default{
    props:['siteLink', 'cardImage','cardTitle', 'singleCardFlipped','cardId'],
    data(){
        return{
            
        }
    },
    computed:{
        cardImageSrc(){
            return require(`../assets/imgs/projects/${this.cardImage}`)
        },
        classById(){
            return `card__front-${this.cardId}`;
        }
    },
    methods:{
        flipCardAction(){
            this.$emit('flipCardAction');
        }
    }

}
</script>