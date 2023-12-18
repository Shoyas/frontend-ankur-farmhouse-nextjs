import Head from "next/head";
import HomePageContainer from "@/components/ui/HomeUi/HomePageContainer";
import Providers from "@/lib/Providers";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Ankur Farm</title>
        <meta
          name="description"
          content="This is a Farming website. It is made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageContainer />
    </div>
  );
};

export default HomePage;
