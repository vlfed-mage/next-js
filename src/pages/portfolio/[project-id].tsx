import { useRouter } from 'next/router';

import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function PortfolioProject() {
    const router = useRouter();

    console.log(router.pathname); // /portfolio/[project-id]
    console.log(router.query); // { "project-id": "1" }

    // then we can send request to some server
    // to fetch the piece of data with an id of router.query.projectId

    return (
        <>
            <Head>
                <title>Portfolio project</title>
                <meta name='description' content='Portfolio project' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Portfolio project</h1>
            </main>
        </>
    );
}
