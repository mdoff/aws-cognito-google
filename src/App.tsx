import { useState, useEffect } from "react";
import { fetchUserAttributes } from "aws-amplify/auth";
import { WithAuthenticatorProps } from "@aws-amplify/ui-react";

function App(props: WithAuthenticatorProps) {
  const [email, setEmail] = useState<string>("");
  useEffect(() => {
    fetchUserAttributes().then((userAttrs) => setEmail(userAttrs.email || ""));
  }, []);
  return (
    <>
      <p>Hello {email}</p>
      <p>
        You can <button onClick={props.signOut}>logout</button>
      </p>
    </>
  );
}

export default App;
