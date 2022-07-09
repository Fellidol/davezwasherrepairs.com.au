import Head from "next/head";
import PageContainer from "../components/PageContainer";
import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import Propaganda from "../components/Propaganda";
import Brands from "../components/Brands";
import Areas from "../components/Areas";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Anchor from "../components/Anchor";

export default function Home() {
  const offset = "-60px";
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
      <Anchor id="about" offset={offset} />
      <Propaganda />
      <Anchor id="brands" offset={offset} />
      <Brands />
      <Anchor id="suburbs" offset={offset} />
      <Areas />
      <Anchor id="contact" offset={offset} />
      <Contact />
      <Footer />
    </PageContainer>
  );
}
