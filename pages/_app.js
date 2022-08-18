import "../styles/styles.css";
import { SessionProvider } from "next-auth/react";
export default function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
