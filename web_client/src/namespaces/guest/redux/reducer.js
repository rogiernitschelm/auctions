import actions from './actions';

const {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,

  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} = actions;

const defaultState = {
  loading: false
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CREATE_ACCOUNT:
    case LOGIN:
      return { ...state, loading: true };

    case CREATE_ACCOUNT_SUCCESS:
    case CREATE_ACCOUNT_FAILURE:
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};
