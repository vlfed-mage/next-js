import { getData } from '@/services';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Product } from '@/global/types';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

interface ProductDetailsPageProps {
    product: Product;
}

function ProductDetailsPage({ product }: ProductDetailsPageProps) {
    // if fallback set to true
    if (!product) {
        return (
            <main className={styles.main}>
                <div>Loading...</div>
            </main>
        );
    }

    const { title, description } = product;
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Home page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <div>
                    <h2>{title}</h2>
                    <span>{description}</span>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    const data = await getData();
    const { params } = context;
    const loadedProduct: Product | undefined = data.products?.find(product => product.id === params?.productId);

    if (!loadedProduct) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product: loadedProduct,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getData();

    return {
        // paths: data.products.map(product => ({ params: { productId: product.id } })),
        paths: [{ params: { productId: 'p1' } }], // you can prerender not all data
        fallback: true, // if true, you can prerender not all data
        // fallback: 'blocking', // if blocking', you can prerender not all data without conditions
    };
};

export default ProductDetailsPage;
