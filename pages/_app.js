import '../styles/_custom.scss'
import Router from 'next/router';
import { useEffect } from "react";
import ProgressBar from '@badrap/bar-of-progress';
import { UserProvider } from '@auth0/nextjs-auth0'

const progress = new ProgressBar({
  size: 5,
  color: "#f54748",
  className: "progress-bar",
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
