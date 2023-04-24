import { getData } from '@/services';
import { GetStaticProps, GetStaticPaths, GetStaticPropsResult, GetStaticPropsContext } from 'next';
import { Product } from '@/global/types';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

interface ProductDetailsPageProps {
    product: Product;
}

function ProductDetailsPage({ product }: ProductDetailsPageProps) {
    console.log(product);
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Home page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h2>getStaticProps details page example</h2>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    const data = await getData();
    const { params } = context;

    if (!params) {
        return {
            notFound: true,
        };
    }

    const { productId } = params;

    return {
        props: {
            product: data.products?.find(product => product.id === productId),
        },
    };
};

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [{ params: { productId: 'p1' } }, { params: { productId: 'p2' } }, { params: { productId: 'p3' } }],
        fallback: false,
    };
};

export default ProductDetailsPage;
