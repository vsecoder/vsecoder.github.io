import './globals.css';
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>vsecoder</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <Analytics />
            <Component {...pageProps} />
        </>
    );
}