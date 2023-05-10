<template>
    <div>
        <div class="canvas__wrapper">
            <div class="canvas-container">
                <canvas class="canvas"></canvas>
            </div>
            <h3 class="canvas__text"><i>tourne moi</i><font-awesome-icon :icon="['fas', 'arrows-spin']" spin class="canvas__icon"/></h3>
            
        </div>
    </div>
</template>

<script>

export default{
    name: 'AnimatedCube',
    components: {

    },
    mounted(){
        this.cubeLoader()
    },
    methods:{
        cubeLoader(){
            this.$store.dispatch('cubeLoaderAction');
        }
    }
}
</script>   