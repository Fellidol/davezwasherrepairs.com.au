import Head from "next/head";
import PageContainer from "../components/PageContainer";
import Navigation from "../components/Navigation";

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
    </PageContainer>
  );
}
