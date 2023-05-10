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
                    titleFront: 'Project 1',
                    descriptionFront: '',
                    titleBack:'',
                    descriptionBack:'',
                    languagesUsed: [],
                    img:"flagsProject.jpg",
                    link:"https://pietro-ciccarello-flags-project.netlify.app/home",
                    isFlipped:false
                },
                {
                    id: 2,
                    titleFront: 'Project 2',
                    descriptionFront: '',
                    titleBack:'',
                    descriptionBack:'',
                    languagesUsed: [],
                    img:"flagsProject.jpg",
                    link:"https://pietro-ciccarello-flags-project.netlify.app/home",
                    isFlipped:false
                },
                {
                    id: 3,
                    titleFront: 'Project 3',
                    descriptionFront: '',
                    titleBack:'',
                    descriptionBack:'',
                    languagesUsed: [],
                    img:"flagsProject.jpg",
                    link:"",
                    isFlipped:false
                },
                {
                    id: 4,
                    titleFront: 'Project 4',
                    descriptionFront: '',
                    titleBack:'',
                    descriptionBack:'',
                    languagesUsed: [],
                    img:"flagsProject.jpg",
                    link:"",
                    isFlipped:false
                },
                {
                    id: 5,
                    titleFront: 'Project 5',
                    descriptionFront: '',
                    titleBack:'',
                    descriptionBack:'',
                    languagesUsed: [],
                    img:"flagsProject.jpg",
                    link:"",
                    isFlipped:false
                }
            ]
        }   
    },
    actions,
    mutations,
    getters
})