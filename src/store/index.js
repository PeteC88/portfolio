import { createStore } from "vuex";
import actions from './actions';
import mutations from './mutations';
import getters from './getters';




export default createStore({
    namespaced: true,
    state(){
        return{
            isCubeLoaded: false,
            activity : {},
            projectCards:[
                {
                    id: 1,
                    titleFront: 'E-commerce site\'s page',
                    descriptionFront: 'Projet pris sur le site frontendmentor.io',
                    titleBack:'E-commerce site\'s page',
                    descriptionBack:'Projet pris sur le site frontendmentor.io',
                    languagesUsed: ['HTML', 'CSS', 'SASS', 'JS'],
                    img:"projectECommerce.jpg",
                    link:"https://petec88.github.io/projects-frontend_mentor/",
                    isFlipped:false
                },
                {
                    id: 2,
                    titleFront: 'Countdown project',
                    descriptionFront: 'Projet pris sur le site frontendmentor.io',
                    titleBack:'Countdown project',
                    descriptionBack:'Projet pris sur le site frontendmentor.io',
                    languagesUsed: ['HTML', 'CSS', 'SASS', 'JS'],
                    img:"projectCountdown.png",
                    link:"https://petec88.github.io/countdown-frontend-mentor-challenge/",
                    isFlipped:false
                },
                {
                    id: 3,
                    titleFront: 'Rock Scissors Paper game',
                    descriptionFront: 'Projet pris sur le site frontendmentor.io',
                    titleBack:'Rock Scissors Paper game',
                    descriptionBack:'Projet pris sur le site frontendmentor.io',
                    languagesUsed: ['HTML', 'CSS', 'SASS', 'JS'],
                    img:"rockScissorsPaperGame.png",
                    link:"https://petec88.github.io/frontend-mentor-rock-paper-scissors-game/",
                    isFlipped:false
                },
                {
                    id: 4,
                    titleFront: 'Flag of the wordld',
                    descriptionFront: 'Projet pris sur le site frontendmentor.io',
                    titleBack:'Flag of the wordld',
                    descriptionBack:'Projet pris sur le site frontendmentor.io',
                    languagesUsed: ['VUE.JS','HTML', 'CSS', 'SASS', 'JS'],
                    img:"flagsProject.jpg",
                    link:"https://pietro-ciccarello-flags-project.netlify.app/home",
                    isFlipped:false
                },
            ]
        }   
    },
    actions,
    mutations,
    getters
})