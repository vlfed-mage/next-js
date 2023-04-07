import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>About page</title>
                <meta name='description' content='About page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>About page</h1>
            </main>
        </>
    );
}
