import Head from "next/head";
import Header from "../../components/globals/header/Header";
import Advertisement from "../../components/pages/ads/Advertisement";

const Advertisements = () => {
  return (
    <div>
      <Head>
        <title>Auto Bizz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Advertisement />
      </main>
    </div>
  );
};

export default Advertisements;
