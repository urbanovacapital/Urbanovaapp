// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>UrbaNova Capital</title>
        <meta name="description" content="Invierte en propiedades con alta rentabilidad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#333" }}>
          Bienvenido a UrbaNova Capital
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Plataforma en desarrollo. Muy pronto podrás invertir en propiedades con alta rentabilidad.
        </p>
      </main>
    </>
  );
}
