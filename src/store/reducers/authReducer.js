import * as actions from '../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false
  }, // new state object
  recoverPassword: {
    error: null,
    loading: false
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.CLEAN_UP:
      return {
        ...state,
        error: null,
        loading: false,
        verifyEmail: { ...state.verifyEmail, loading: false, error: null },
        recoverPassword: {
          ...state.recoverPassword,
          loading: false,
          error: null
        }
      };

    case actions.AUTH_START:
      return { ...state, loading: true };

    case actions.AUTH_END:
      return { ...state, loading: false };

    case actions.AUTH_FAIL:
      return { ...state, error: payload };

    case actions.AUTH_SUCCESS:
      return { ...state, error: false };

    case actions.VERIFY_START:
      return { ...state, verifyEmail: { ...state.verifyEmail, loading: true } };

    case actions.VERIFY_FAIL:
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, loading: false, error: payload }
      };

    case actions.VERIFY_SUCCESS:
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, loading: false, error: false }
      };

    case actions.RECOVERY_START:
      return {
        ...state,
        recoverPassword: { ...state.recoverPassword, loading: true }
      };

    case actions.RECOVERY_FAIL:
      return {
        ...state,
        recoverPassword: {
          ...state.recoverPassword,
          loading: false,
          error: payload
        }
      };

    case actions.RECOVERY_SUCCESS:
      return {
        ...state,
        recoverPassword: {
          ...state.recoverPassword,
          loading: false,
          error: false
        }
      };

    default:
      return state;
  }
};
