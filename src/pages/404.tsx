import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Home page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>404 - Page Not Found</h1>
                <Link href='/'>Go back home</Link>
            </main>
        </>
    );
}
