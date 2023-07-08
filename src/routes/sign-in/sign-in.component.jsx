import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    };

    return (
        <div>
            <h1>Sign In</h1>

            <button onClick={logUser}>Sign In</button>
        </div>
    )
};

export default SignIn;