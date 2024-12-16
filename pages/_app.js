import './globals.css';
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


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
                <meta property="twitter:image" content="/image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="vsecoder" />
                <meta property="twitter:description" content="@vsecoder website" />
                <meta property="author" content="vsecoder" />
                <meta property="description" content="@vsecoder website" />
                <meta property="og:image" content="/image.png" />
                <meta property="og:title" content="vsecoder" />
                <meta property="og:description" content="@vsecoder website" />
                <meta property="og:url" content="https://vsecoder.me" />
            </Head>

            <SpeedInsights />
            <Analytics />
            <Component {...pageProps} />
        </>
    );
}