export default (state, action) => {
    switch (action.type) {
        case 'DELETE_COST':
            return {
                ...state,
                costs: state.costs.filter(cost => cost.id !==action.payload)
            }
        case 'ADD_COST':
            return {
                ...state,
                costs: [action.payload,...state.costs]
            }
        default:
            return state;
    }
}