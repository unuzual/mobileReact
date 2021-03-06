import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_EDIT,
    EMPLOYEE_DELETE
} from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
        case EMPLOYEE_DELETE:
        case EMPLOYEE_EDIT:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
};
