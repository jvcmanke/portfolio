import { NextPage } from "next";
import Head from "next/head";

import * as Styled from "styles/pages";

const Home: NextPage = () => {
  return (
    <Styled.Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styled.Main>
        <Styled.Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Styled.Title>

        <Styled.Description>
          Get started by editing <Styled.Code>pages/index.js</Styled.Code>
        </Styled.Description>

        <Styled.Grid>
          <Styled.Card href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Styled.Card>

          <Styled.Card href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Styled.Card>

          <Styled.Card href="https://github.com/vercel/next.js/tree/master/examples">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Styled.Card>

          <Styled.Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Styled.Card>
        </Styled.Grid>
      </Styled.Main>

      <Styled.Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Styled.Logo src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Home;
