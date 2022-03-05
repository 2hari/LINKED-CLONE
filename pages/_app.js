import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

// spreading session like that allows us to access session in each pages prop instead of having to pass it manually each time
function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
