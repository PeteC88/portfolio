<template>
  <div class="contacts" id="contacts">
    <h1>Restons en contact</h1>
    <div class="contacts__logos">
      <div class="contacts__logo">
        <a href="https://fr.linkedin.com/in/pietro-ciccarello" target="_blank"
          ><font-awesome-icon
            :icon="['fab', 'linkedin']"
            class="contacts__icon"
        /></a>
        <p>LinkedIn</p>
      </div>
      <div class="contacts__logo">
        <a href="mailto:pietrociccarello@gmail.com"
          ><font-awesome-icon
            :icon="['fas', 'envelope']"
            class="contacts__icon"
        /></a>
        <p>E-mail</p>
      </div>
      <div class="contacts__logo">
        <a href="https://github.com/PeteC88" target="_blank"
          ><font-awesome-icon :icon="['fab', 'github']" class="contacts__icon"
        /></a>
        <p>GitHub</p>
      </div>
      <div class="contacts__logo">
        <a
          :href="`${publicPath}CVPietroCiccarello.pdf`"
          download="CV Pietro Ciccarello"
          target="_blank"
        >
          <ResumeLogoSvg class="resume-icon" />
          <p>Télécharge mon CV</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import ResumeLogoSvg from "./ResumeLogoSvg.vue";

export default {
  components: {
    ResumeLogoSvg,
  },
  computed: {
    ...mapState(["publicPath"]),
    ...mapGetters(["resumeImage"]),
  },
  mounted() {
    console.log(this.publicPath);
  },
};
</script>