import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";
import App from "./App.tsx";

import "./index.css";

Amplify.configure({
  Auth: {
    Cognito: {
      loginWith: {
        oauth: {
          redirectSignIn: ["http://localhost:5173"],
          redirectSignOut: ["http://localhost:5173"],
          domain: "scalac-blogpost.auth.eu-central-1.amazoncognito.com",
          providers: ["Google"],
          scopes: ["email", "openid", "aws.cognito.signin.user.admin"],
          responseType: "code",
        },
      },
      userPoolId: "eu-central-1_IcVlatAcd",
      userPoolClientId: "2sbh33a9n37q9of2vvtei1d1o",
    },
  },
});

const AppWithAuth = withAuthenticator(App);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWithAuth />
  </React.StrictMode>,
);
