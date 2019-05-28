import * as actions from './actionTypes';

export const signIn = data => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  dispatch({ type: actions.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);

    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }

  dispatch({ type: actions.AUTH_END });
};

export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  dispatch({ type: actions.AUTH_START });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(res);

    await firestore
      .collection('users')
      .doc(res.user.uid)
      .set({
        firstName: data.firstName,
        lastName: data.lastName
      });

    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }

  dispatch({ type: actions.AUTH_END });
}; // function that returns another function

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err);
  }
};
