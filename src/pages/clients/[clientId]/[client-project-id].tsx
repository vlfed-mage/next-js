import { useRouter } from 'next/router';

import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function SelectedClientProjectPage() {
    const router = useRouter();

    console.log(router.pathname); // /clients/[clientId]/[client-project-id]
    console.log(router.query); // { "clientId": "1","client-project-id": "2" }

    return (
        <>
            <Head>
                <title>Selected client project page</title>
                <meta name='description' content='Selected client project page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Selected client project page</h1>
            </main>
        </>
    );
}
