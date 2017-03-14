import actions from './actions';
import { createAccountMutation } from '../graphql';

const {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE
} = actions;

export const startRequestCreateAccount = () => ({ type: CREATE_ACCOUNT });
export const finishRequestCreateAccount = () => ({ type: CREATE_ACCOUNT });

export const createAccount = accountInformation => {
  return dispatch => {
    dispatch(startRequestCreateAccount());
  };
};
