<template>
    <div>
        <TheBanner />
        <AboutMe />
        <Competences />
        <Projects />
        <Activities />
        <TheFooter />
    </div>
</template>


<script>
import TheBanner from '../components/TheBanner.vue'
import Activities from '../components/Activities.vue'
import Projects from '../components/Projects.vue'
import TheFooter from '../components/TheFooter.vue'
import AboutMe from '../components/AboutMe.vue'
import Competences from '../components/Competences.vue'

export default{
  components: {TheBanner, Activities, Projects, TheFooter, AboutMe, Competences},
    name:'Homepage',
    data(){

    }
}
</script>