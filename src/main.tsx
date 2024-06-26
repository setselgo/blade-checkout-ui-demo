import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@razorpay/blade/fonts.css";
import { createGlobalStyle } from "styled-components";
import { BladeProvider } from "@razorpay/blade/components";
import { bladeTheme } from "@razorpay/blade/tokens";
import { I18nProvider } from "@razorpay/i18nify-react";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.typography.fonts.family.text}
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${(props) => props.theme.typography.fonts.family.heading};
}
`;

// createTheme({brandColor: '#EE681A'})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <BladeProvider themeTokens={bladeTheme}>
        <GlobalStyles />
        <App />
      </BladeProvider>
    </I18nProvider>
  </React.StrictMode>
);
