import HomePage from "@/pages/components/Homepage";
import Head from "next/head";
export default function Home() {

  return (
    <>
      <HomePage />
      <Head>
          <title>Movie App</title>
          <link rel="icon" href="/assets/icons/send-message-icon.svg" type="image/icon" />
      </Head>
    </>
  );

}
