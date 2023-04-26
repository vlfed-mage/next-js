import Link from 'next/link';
import Head from 'next/head';

import styles from '@/styles/Home.module.css';

function Home() {
    return (
        <>
            <Head>
                <title>Home page</title>
                <meta name='description' content='Home page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>This is the home page</h1>
                <ul>
                    <li>
                        <Link href='/portfolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link href='/clients'>Clients</Link>
                    </li>
                    <li>
                        <Link href='/get-static-props'>getStaticProps</Link>
                    </li>
                    <li>
                        <Link href='/user-profile'>getServerSideProps</Link>
                    </li>
                </ul>
                <hr />
            </main>
        </>
    );
}

export default Home;
