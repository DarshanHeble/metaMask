import { usePrivy, useLogin, useLogout } from "@privy-io/react-auth";
import { useEffect } from "react";

const App = () => {
  const { ready, authenticated, user } = usePrivy();
  const { login } = useLogin();
  const { logout } = useLogout();

  useEffect(() => {
    if (ready) {
      login();
    }
  }, [!authenticated]);

  if (!ready) {
    return <div>Loading...</div>;
  }

  // Now it's safe to use other Privy hooks and state
  return (
    <div>
      Privy is ready!
      {authenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login or Sign Up</button>
      )}
      {/* <button onClick={login}>Login or Sign Usp</button> */}
      {authenticated ? (
        <div>
          <h2>Authenticated</h2>
          <p>User ID: {user?.id}</p>

          <p>Email: {user?.email?.address}</p>
          {user?.isGuest ? <p>User is a guest</p> : <p>User is not a guest</p>}
          {user?.hasAcceptedTerms ? (
            <p>User has accepted Terms and Conditions and/or Privacy Policy </p>
          ) : (
            <p>
              User has not accepted Terms and Conditions and/or Privacy Policy{" "}
            </p>
          )}
          <p>guest: {user?.hasAcceptedTerms}</p>
          <p>Created AT: {user?.createdAt.toDateString()}</p>
        </div>
      ) : (
        <div>
          <h2>Not Authenticated</h2>
        </div>
      )}
    </div>
  );
};

export default App;
