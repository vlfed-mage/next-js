import fs from 'fs/promises'; // file system node.js module
import path from 'path';

import Head from 'next/head';
import { Products } from '@/global/types';

import styles from '@/styles/Home.module.css';

function Home({ products }: Products) {
    return (
        <>
            <Head>
                <title>getStaticProps in action</title>
                <meta name='description' content='getStaticProps in action' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>getStaticProps in action</h1>
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
    console.log('(Re-)Generating...');
    const dataPath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(dataPath);
    const data = JSON.parse(jsonData.toString());

    // process - object which is globally available in node.js
    // cwd - current working directory

    return {
        props: {
            products: data.products,
        },
        revalidate: 10,
    };
}

export default Home;
