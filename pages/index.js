import Head from "next/head";
import PageContainer from "../components/PageContainer";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Waves from "../components/Waves";
import Propaganda from "../components/Propaganda";
import Brands from "../components/Brands";
import Areas from "../components/Areas";

export default function Home() {
  return (
    <PageContainer>
      <Head>
        <title>Davez washer and dryer repairs</title>
        <meta
          name="description"
          content="Fast &amp; reliable washing machine repairs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header />
      <Waves />
      <Propaganda />
      <Brands />
      <Areas />
    </PageContainer>
  );
}
