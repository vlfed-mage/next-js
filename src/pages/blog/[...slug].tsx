import { useRouter } from 'next/router';

import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function BlogPostPage() {
    const router = useRouter();

    // http://localhost:3000/blog/whatever/you/want

    console.log(router.query); // { "slug": ["whatever","you","want"] }

    return (
        <>
            <Head>
                <title>Blog Post page</title>
                <meta name='description' content='Blog Post page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Blog Post page</h1>
            </main>
        </>
    );
}
