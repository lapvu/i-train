import { GoogleSignin } from "react-native-google-signin";
import firebase from "react-native-firebase";
import { AccessToken, LoginManager } from "react-native-fbsdk";

// Calling this function will open Google for login.
export const googleLogin = async () => {
  try {
    // add any configuration settings here:
    await GoogleSignin.configure({
      scopes: ["profile", "email"],
      webClientId:
        "374157436872-0h5nhp2d3438har4dc4vo24h14m4pe7n.apps.googleusercontent.com"
    });
    await GoogleSignin.hasPlayServices();
    const data = await GoogleSignin.signIn();
    console.log(data);
    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.idToken,
      data.accessToken
    );
    // login with credential
    const firebaseUserCredential = await firebase
      .auth()
      .signInWithCredential(credential);

    console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
  } catch (e) {
    console.error(e);
  }
};

// Calling the following function will open the FB login dialogue:
export const facebookLogin = async () => {
  try {
    const result = await LoginManager.logInWithReadPermissions([
      "public_profile",
      "email"
    ]);

    if (result.isCancelled) {
      // handle this however suites the flow of your app
      throw new Error("User cancelled request");
    }

    console.log(
      `Login success with permissions: ${result.grantedPermissions.toString()}`
    );

    // get the access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      // handle this however suites the flow of your app
      throw new Error("Something went wrong obtaining the users access token");
    }

    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(
      data.accessToken
    );

    // login with credential
    const firebaseUserCredential = await firebase
      .auth()
      .signInWithCredential(credential);

    console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
  } catch (e) {
    console.error(e);
  }
};
