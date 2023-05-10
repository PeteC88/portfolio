<template>
    <div class="competences">
        <h1 class="competences__title">Mes compétences</h1>
        <AnimatedCube />
        <section class="competences__wrapper">
            <div class="competences__developer competences__box">
                <div class="competences__icon"><font-awesome-icon :icon="['fas', 'laptop-code']" /></div>
                <div class="competences__texts" >

                    <h4>Développeur Front</h4>
                    <p>Création de pages web et correction de bugs</p>

                    <h4>Langages utilisés</h4>

                    <ul>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>SASS/SCSS</li>
                        <li>JavaScript</li>
                        <li>Vue.Js</li>
                        <li>Nuxt.JS</li>
                    </ul>
                    <h4>Outils utilisés</h4>
                    <ul>
                        <li>GitHub</li>
                        <li>Trello</li>
                    </ul>
                </div>
            </div>
            <div class="competences__webmaster competences__box">
                <div class="competences__icon"><font-awesome-icon :icon="['fas', 'laptop']" /></div>
                <div class="competences__texts">

                    <h4>Webmaster</h4>
                    <p>Création de pages web et intégration de contenu</p>

                    <h4>CMS utilisés</h4>

                    <ul>
                        <li>SiteCore</li>
                        <li>AEM</li>
                        <li>Content Stack</li>
                    </ul>
                    <h4>Outils utilisés</h4>
                    <ul>
                        <li>Jira</li>
                        <li>DigitalCore</li>
                        <li>Trados (création de settings avec regex)</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import AnimatedCube from './AnimatedCube.vue';
export default {
    components: {AnimatedCube}
}
</script>
<style>
</style>