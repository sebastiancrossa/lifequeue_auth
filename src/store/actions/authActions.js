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

    // Sends the verification email to the users email
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();

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

// Cleans up the messages stae
export const clean = () => ({
  type: actions.CLEAN_UP
});

// Verify email actions
export const verifyEmail = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  dispatch({ type: actions.VERIFY_START });
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();

    dispatch({ type: actions.VERIFY_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.VERIFY_FAIL, payload: err.message });
  }
};

// Email recovery actions
export const recoverPassword = data => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  dispatch({ type: actions.RECOVERY_START });
  try {
    await firebase.auth().sendPasswordResetEmail(data.email); // We are getting the email from the password recovery form input
    dispatch({ type: actions.RECOVERY_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.RECOVERY_FAIL, payload: err.message });
  }
};
