import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Magatte. I'm a web/software developer.

I design and build fast, responsive and secure apps for the web, mobile or desktop.

I'm experinced with several technologies, like the framework Django and the library React, i can also build desktop software with C, C++ and Python and mobile applications with React native and Flutter.

I can help you to start or grow your business, automate tasks and secure your data.

You can find some of my projects here.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}