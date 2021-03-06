import tokenActionTypes from './token.types';

const INITIAL_STATE = {
  token: null,
  isFetching: false,
  errorMessage: undefined
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tokenActionTypes.FETCH_TOKEN_START:
      return {
        ...state,
        isFetching: true
      };
    case tokenActionTypes.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.payload
      };
    case tokenActionTypes.FETCH_TOKEN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default tokenReducer;
