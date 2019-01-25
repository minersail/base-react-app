import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions/actions';
import { State } from '../utils/types';

const initialState = {
    stuff: ["Hi", "Bye", "Junk"],
};

function reducer(state: State = initialState, action: Action): State {
    switch(action.type)
    {
        case(getType(actions.deleteThing)):
            return {
                ...state,
                stuff: deleteReducer(state.stuff, action.payload),
            };
        default:
            return state;
    }
}

function deleteReducer(stuff: string[], delInd: number) {
    return stuff.filter((val, i) => i !== delInd);
}

export type Action = ActionType<typeof actions>;
export default reducer;