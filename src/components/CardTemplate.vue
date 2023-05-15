<template>
  <section>
    <div
      class="projects__project card"
      :class="{ 'card--flipped': singleCardFlipped }"
      @click="flipCardAction"
    >
      <div class="card__front" :class="classById">
        <img :src="cardImageSrc" :alt="cardTitle" />
        <h3>{{ cardTitle }}</h3>
      </div>
      <div class="card__back back">
        <div class="back__title">
          <h3>{{ cardTitle }}</h3>
          <p>{{ descriptionBack }}</p>
        </div>
        <div class="back__languages">
          <h4>Langages utilisés</h4>
          <ul>
            <li v-for="language in languagesUsed" :key="language">
              {{ language }}
            </li>
          </ul>
        </div>

        <button>
          <a @click.stop :href="siteLink" target="_blank"
            >Visite le site <font-awesome-icon :icon="['fas', 'eye']"
          /></a>
        </button>
      </div>
    </div>
    <div class="card__instruction">
      <p>
        Clique sur la vignette pour voir plus d'infos
        <span
          ><font-awesome-icon :icon="['fas', 'hand-point-up']" bounce
        /></span>
      </p>
    </div>
  </section>
</template>
<script>
export default {
  props: [
    "siteLink",
    "cardImage",
    "cardTitle",
    "singleCardFlipped",
    "cardId",
    "descriptionFront",
    "titleBack",
    "descriptionBack",
    "languagesUsed",
  ],
  data() {
    return {};
  },
  computed: {
    cardImageSrc() {
      return require(`../assets/imgs/projects/${this.cardImage}`);
    },
    classById() {
      return `card__front-${this.cardId}`;
    },
  },
  methods: {
    flipCardAction() {
      this.$emit("flipCardAction");
    },
  },
};
</script>