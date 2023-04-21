import Layout from "../components/layout/Layout";
import ThumbSlider from "../components/slider/Thumb";
import Head from 'next/head';




function Test() {

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout>
        <ThumbSlider />
      </Layout>

    </>
  )
}

export default Test;