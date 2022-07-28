import Head from "next/head";
import HomePage from "../components/home/HomePage";


export default function App() {
  return (
    <div>
      <Head>
        <title>Robert Kappel</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
      </Head>
      <HomePage />
    </div>
  );
}
