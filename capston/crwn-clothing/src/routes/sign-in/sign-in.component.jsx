import {
  signInWithGooglePopup,
  signInWithPhonePopup,
} from "../../firebase/firebase.util";

const signIn = () => {
  const logInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logInWithGoogle}>sign in with Googlepopup</button>
    </div>
  );
};

export default signIn;
