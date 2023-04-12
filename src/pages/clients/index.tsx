import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Clients() {
    return (
        <>
            <Head>
                <title>Clients page</title>
                <meta name='description' content='Clients page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Clients page</h1>
            </main>
        </>
    );
}
