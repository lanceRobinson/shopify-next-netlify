import { AppWrapper } from '../state.js'; // import based on where you put it
import '@styles/globals.css';
import SiteMenu from "@components/SiteMenu";

export function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
        <SiteMenu/>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default Application;
