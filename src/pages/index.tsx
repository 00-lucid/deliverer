import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import nextPackage from "next/package.json";
import { PageLoader } from "src/components/Loader/PageLoader";

export default function Home({}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <PageLoader primary={true} backgroundColor="white" label="test" />
      </main>
    </div>
  );
}
