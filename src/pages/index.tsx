import Link from 'next/link';
import Head from 'next/head';

import { Products } from '@/global/types';

import styles from '@/styles/Home.module.css';

function Home({ products }: Products) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
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
                </ul>
                <hr />
                <h2>getStaticProps example</h2>
                <ul>
                    {products.map(product => {
                        const { id, title, description } = product;
                        return (
                            <li key={id}>
                                <p>{title}</p>
                                <p>{description}</p>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            products: [
                { id: 'p1', title: 'Product 1', description: 'This is product 1' },
                { id: 'p2', title: 'Product 2', description: 'This is product 2' },
                { id: 'p3', title: 'Product 3', description: 'This is product 3' },
            ],
        },
    };
}

export default Home;
