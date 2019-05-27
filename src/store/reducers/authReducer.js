const initialState = {
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_START':
      return { ...state, loading: true };

    case 'AUTH_END':
      return { ...state, loading: false };

    default:
      return state;
  }
};
