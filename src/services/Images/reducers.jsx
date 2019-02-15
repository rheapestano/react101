import {
    SHIBES_GET_IMGS_REQUEST,
    SHIBES_GET_IMGS_SUCCESS,
    SHIBES_GET_IMGS_FAILURE

} from '../types'

const DEFAULT_STATE = {
    images: [],
    isLoading: {
        getting: false,
    },
};

export default (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case SHIBES_GET_IMGS_REQUEST: return {
            ...state,
            images: [],
            isLoading: {
                ...state.isLoading,
                getting: true,
            },
        };
        case SHIBES_GET_IMGS_SUCCESS: return {
            ...state,
            images: action.payload.images,
            isLoading: {
                ...state.isLoading,
                getting: false,
            },
        };
        case SHIBES_GET_IMGS_FAILURE: return {
            ...state,
            isLoading: {
                ...state.isLoading,
                getting: false,
            },
        };
        default: return state;
    }
}

