import React, { useContext } from "react";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import dinamicTheme from "lib/themes";
import { CssBaseline } from "@mui/material";
import Header from "./Header";
import { Store } from "../utils/Store";

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { themeName } = state;
  return (
    <div>
      <Head>
        <title>{title ? title : "BoilerPlate for NextJS"}</title>
        <meta name="author" content="Vagner Batista"></meta>
        <meta
          name="description"
          content={
            description
              ? description
              : "Boilerplate for NextJS from Vagner Batista - 2021"
          }
        ></meta>
      </Head>
      <ThemeProvider theme={dinamicTheme(themeName)}>
        <CssBaseline />
        <Header />
        {children}
      </ThemeProvider>
    </div>
  );
}
