import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { PrivyProvider } from "@privy-io/react-auth";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivyProvider
      appId="cma1etucc000djx0mwvfr4g8b"
      // clientId=""
      config={{
        appearance: {
          theme: "dark",
          // Defaults to 'Log in or sign up'
          landingHeader: "Log in or sign up to Creator CLub",
          showWalletLoginFirst: true,
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </StrictMode>
);
