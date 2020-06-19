import {HANDLE_FILTER_ATTRIBUTES} from "../../../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case HANDLE_FILTER_ATTRIBUTES:
            return action.payload;
        default:
            return state;
    }
};