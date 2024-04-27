import { Fragment } from 'react';
import Head from 'next/head';

function NothingFoundPage(props) {
  return (
    <Fragment>
      <h1 style={{fontSize: 'var(--h1)', height: '50vh'  }}>Nothing to see here…</h1>
      <Head>
        <title>Denis Kopylov</title>
        <meta name='description' content='Nothing to see here…' />
        <meta property='og:title' content='Denis Kopylov' />
        <meta property='og:type' content='article' />
        <meta property='og:image' content='/thumb.png' />
        <meta
          property='og:description'
          content='Denis Kopylov — senior product designer at Arrival'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
    </Fragment>
  );
}

export default NothingFoundPage;
