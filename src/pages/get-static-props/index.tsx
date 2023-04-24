import { GetStaticProps, GetStaticPropsResult } from 'next';
import { Products } from '@/global/types';

import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { getData } from '@/services';
import Link from 'next/link';
import { useRouter } from 'next/router';

function GetStaticPropsExample({ products }: Products) {
    const { pathname } = useRouter();

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
                    {products?.map(product => {
                        const { id, title, description } = product;
                        return (
                            <li key={id}>
                                <Link href={`${pathname}/${id}`}>{title}</Link>
                                <p>{description}</p>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<Products>> => {
    console.log('(Re-)Generating...');
    const data = await getData();

    // process - object which is globally available in node.js
    // cwd - current working directory

    // may returns:
    // { props: Props; revalidate?: number | boolean }
    // | { redirect: Redirect; revalidate?: number | boolean }
    // | { notFound: true; revalidate?: number | boolean };

    if (!data) {
        return {
            redirect: {
                permanent: false,
                destination: '/', // can redirect to diff page
            },
        };
    }

    // or

    if (data.products?.length === 0) {
        return {
            notFound: true, // show 404 page instead current one
        };
    }

    return {
        props: {
            products: data.products,
        },
        revalidate: 10, // (re)generation every 10 seconds
        // notFound: true, // show 404 page instead current one
        // redirect: {
        //     destination: '/', // can redirect to diff page
        // },
    };
};

export default GetStaticPropsExample;
