import Head from "next/head";
import PageContainer from "../components/PageContainer";
import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import Waves from "../components/Waves";
import Propaganda from "../components/Propaganda";
import Brands from "../components/Brands";
import Areas from "../components/Areas";
import Contact from "../components/Contact";

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
      <Intro />
      <Waves />
      <Propaganda />
      <Brands />
      <Areas />
      <Contact />
    </PageContainer>
  );
}
