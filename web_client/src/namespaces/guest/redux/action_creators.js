import actions from './actions';
import { createAccountMutation } from '../graphql';

const {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE
} = actions;

export const createAccount = userInformationGQL => {
  return dispatch => {
    // post stuff to api

    // .then dispatch success / or .catch failure

  };
};
