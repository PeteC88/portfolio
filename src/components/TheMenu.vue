<template>
  <section class="menu">
    <div class="menu-header" :class="{ 'menu-header-is-hidden': !showHeader }">
      <button class="burger" @click="toggleMenu">
        <div
          class="burger__container"
          :class="{
            'burger__container--active': burgerActivated,
            'burger__container--animation': isMenuOn,
            'burger__container--animation-reverse': menuAnimationReverse,
          }"
        ></div>
      </button>
      <section
        class="menu-body"
        :class="isMenuBodyActive ? ['menu-body--active'] : ''"
      >
        <nav class="menu-nav">
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#home" @click="toggleMenu">Accueil</a>
          </li>
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#about" @click="toggleMenu">Quelques lignes sur moi </a>
          </li>
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#compétences" @click="toggleMenu">Compétences </a>
          </li>
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#projects" @click="toggleMenu">Projets </a>
          </li>
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#API" @click="toggleMenu">Moment API </a>
          </li>
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#contacts" @click="toggleMenu">Contacts </a>
          </li>
        </nav>
      </section>
      <section
        class="menu-footer"
        :class="{ 'menu-footer--active': isMenuFooterActive }"
      >
        <nav class="menu-footer-nav">
          <li
            :class="{ 'menu-footer-nav-link--active': isMenuFooterActive }"
            class="menu-footer-nav-link"
          >
            <a
              href="https://fr.linkedin.com/in/pietro-ciccarello"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="menu-footer-icon"
                :class="{ 'menu-footer-icon--active': isMenuBodyActive }"
              />
            </a>
          </li>
          <li
            :class="{ 'menu-footer-nav-link--active': isMenuFooterActive }"
            class="menu-footer-nav-link"
          >
            <a href="mailto:pietrociccarello@gmail.com">
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                class="menu-footer-icon"
                :class="{ 'menu-footer-icon--active': isMenuBodyActive }"
              />
            </a>
          </li>
          <li
            :class="{ 'menu-footer-nav-link--active': isMenuFooterActive }"
            class="menu-footer-nav-link"
          >
            <a href="https://github.com/PeteC88" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'github']"
                class="menu-footer-icon"
                :class="{ 'menu-footer-icon--active': isMenuBodyActive }"
              />
            </a>
          </li>
          <li
            :class="{ 'menu-footer-nav-link--active': isMenuFooterActive }"
            class="menu-footer-nav-link"
          >
            <a
              :href="`${publicPath}CVPietroCiccarello.pdf`"
              download="CV Pietro Ciccarello"
              target="_blank"
              :class="{ 'menu-footer-icon--active': isMenuBodyActive }"
            >
              <ResumeLogoSvg class="resume-icon" />
            </a>
          </li>
        </nav>
      </section>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import ResumeLogoSvg from "./ResumeLogoSvg.vue";
export default {
  components: {
    ResumeLogoSvg,
  },
  data() {
    return {
      isMenuOn: false,
      menuAnimationReverse: false,
      burgerActivated: false,
      isMenuBodyActive: false,
      isMenuFooterActive: false,
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
    };
  },
  computed: {
    ...mapGetters(["resumeImage"]),
    ...mapState(["publicPath"]),
  },
  watch: {
    isMenuOn() {
      if (this.isMenuOn) {
        document.documentElement.style.overflow = "hidden";
        console.log(document.body.style.overflow);
        return;
      } else {
        document.documentElement.style.overflow = "auto";
        console.log(document.body.style.overflow);
      }
    },
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (!this.isMenuOn) {
        if (window.pageYOffset < 0) {
          return;
        } //Math.abs to return the absolute value of the number
        if (
          Math.abs(window.pageYOffset - this.lastScrollPosition) <
          this.scrollOffset
        ) {
          return;
        }
        this.showHeader = window.pageYOffset < this.lastScrollPosition;
        this.lastScrollPosition = window.pageYOffset;
      }
    },
    toggleMenu() {
      if (!this.isMenuOn) {
        this.isMenuOn = true;
        setTimeout(() => {
          this.burgerActivated = true;
        }, 500);
      } else {
        this.menuAnimationReverse = true;
        setTimeout(() => {
          this.isMenuOn = false;
          this.menuAnimationReverse = false;
          this.burgerActivated = false;
        }, 500);
      }
      this.isMenuBodyActive = !this.isMenuBodyActive;
      this.isMenuFooterActive = !this.isMenuFooterActive;
    },
  },
};
</script>
<style lang="scss">
</style>