<template>
  <div id="home">
    <TheBanner />
    <AboutMe />
    <Competences />
    <Projects />
    <Activities />
    <Curriculum />
    <Contacts />
    <TheFooter />
  </div>
</template>


<script>
import TheBanner from "../components/TheBanner.vue";
import AboutMe from "../components/AboutMe.vue";
import Competences from "../components/Competences.vue";
import Projects from "../components/Projects.vue";
import Activities from "../components/Activities.vue";
import Curriculum from "../components/Curriculum.vue";
import Contacts from "../components/Contacts.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheBanner,
    AboutMe,
    Competences,
    Projects,
    Activities,
    Curriculum,
    Contacts,
    TheFooter,
  },
  name: "Homepage",
  data() {},
};
</script>
