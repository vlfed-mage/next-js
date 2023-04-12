import { useRouter } from 'next/router';

import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function ClientProjectPage() {
    const router = useRouter();

    console.log(router.pathname); // /clients/[clientId]
    console.log(router.query); // { "clientId": "1" }

    return (
        <>
            <Head>
                <title>Client project page</title>
                <meta name='description' content='Client project page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Client project page</h1>
            </main>
        </>
    );
}
