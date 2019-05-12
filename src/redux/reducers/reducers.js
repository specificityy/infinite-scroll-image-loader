const initialState = {
    cards: [],
    displayImageId: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_IMAGES_COMPLETED':
            return {
                ...state,
                cards: state.cards.concat(action.response.slice(0, 10)),
            };

        case 'DISPLAY_IMAGE':
            const displayImageId = state.displayImageId === action.id ? null : action.id;
            return {
                ...state,
                displayImageId,
            };

        default:
            return state;
    }
}
