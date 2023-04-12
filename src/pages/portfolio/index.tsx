import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Portfolio page</title>
                <meta name='description' content='Portfolio page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Portfolio page</h1>
            </main>
        </>
    );
}
