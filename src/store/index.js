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
                    titleFront: 'E-commerce site\'s homepage',
                    descriptionFront: 'Project from frontendmentor.io',
                    titleBack:'E-commerce site\'s homepage',
                    descriptionBack:'Project from frontendmentor.io',
                    languagesUsed: ['HTML', 'CSS', 'SASS', 'JS'],
                    img:"project1-ecommerce.jpg",
                    link:"https://petec88.github.io/projects-frontend_mentor/",
                    isFlipped:false
                },
                {
                    id: 2,
                    titleFront: 'Countdown project',
                    descriptionFront: 'Project from frontendmentor.io',
                    titleBack:'Countdown project',
                    descriptionBack:'Project from frontendmentor.io',
                    languagesUsed: ['HTML', 'CSS', 'SASS', 'JS'],
                    img:"project-2-conuntdown.png",
                    link:"https://petec88.github.io/countdown-frontend-mentor-challenge/",
                    isFlipped:false
                },
                {
                    id: 3,
                    titleFront: 'Rock Scissors Paper game',
                    descriptionFront: 'Project from frontendmentor.io',
                    titleBack:'Rock Scissors Paper game',
                    descriptionBack:'Project from frontendmentor.io',
                    languagesUsed: ['HTML', 'CSS', 'SASS', 'JS'],
                    img:"project-3-game.png",
                    link:"https://petec88.github.io/frontend-mentor-rock-paper-scissors-game/",
                    isFlipped:false
                },
                {
                    id: 4,
                    titleFront: 'Flag of the wordld',
                    descriptionFront: 'Project from frontendmentor.io',
                    titleBack:'Flag of the wordld',
                    descriptionBack:'Project from frontendmentor.io',
                    languagesUsed: ['Vue.js','HTML', 'CSS', 'SASS', 'JS'],
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