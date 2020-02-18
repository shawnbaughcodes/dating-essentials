import { AnyAction } from 'redux';

const initialState = {

}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {

    case 'typeName':
      return { ...state };

    default:
      return state
  }
};
