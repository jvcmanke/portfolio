import { NextPage } from "next";
import { AppProps } from "next/app";

import { withTheme } from "hocs/withTheme";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withTheme(App);
