import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log({ signInWithPopup: signInWithPopup });
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
};

export default SignIn;
