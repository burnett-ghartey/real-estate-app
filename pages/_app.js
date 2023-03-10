import "@/styles/globals.css";
import Router from "next/router";
import Head from "next/head";
// import NProgress from "ngprogress";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
