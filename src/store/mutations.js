export default {
    cubeLoaderMutation(state,payload){
        state.isCubeLoaded = payload;
    },
    getActivitiesMutation(state, payload){
        state.activity = payload;
    },
    flipCardMutation(state, payload){
        let foundCard = state.projectCards.find(card =>{
            return card.id === payload.cardId;
        })
        
        foundCard.isFlipped = !foundCard.isFlipped;
    }
}