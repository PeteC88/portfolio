<template>
    <section>
        <div class="projects__project card" :class="{'card--flipped' : singleCardFlipped}" @click="flipCardAction">
            <div class="card__front">
                <img :src="cardImageSrc" :alt="cardTitle">
            <!--   <img src="../assets/imgs/projects/flagsProject.jpg" :alt="cardTitle"> -->
            </div>
            <div class="card__back">Back text Project 1</div>
        </div>
        <h3>{{ cardTitle }}</h3>
    </section>
</template>
<script>
export default{
    props:['siteLink', 'cardImage','cardTitle', 'singleCardFlipped'],
    data(){
        return{
            
        }
    },
    computed:{
        cardImageSrc(){
            return require(`../assets/imgs/projects/${this.cardImage}`)
        }
    },
    methods:{
        flipCardAction(){
            this.$emit('flipCardAction');
        }
    }

}
</script>
<style lang="scss">

.card{
    position:relative;
    transform-style: preserve-3d;
    transition: all 1s ease-in-out;

    &__front{
        background:green;
        color:white;
        position:absolute;
        width:100%;
        height:100%;
        backface-visibility: hidden;
        text-align: center;

        & img{
            width: 100%;
        }
    }

    &__back{
        background: blue;
        color:white;
        position:absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        transform:rotateY(180deg);
        text-align: center;
    }

    &--flipped{
        transform: rotateY(180deg)
    }

    
}


</style>