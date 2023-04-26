import { UserIdPageProps } from '@/global/types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

const UserIdPage = ({ userId }: UserIdPageProps) => {
    return (
        <>
            <Head>
                <title>Client project page</title>
                <meta name='description' content='Client project page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>{userId}</h1>
            </main>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    // don't need and can't use getStaticPaths while using getServerSideProps for dynamic page

    const { params } = context;

    return {
        props: {
            userId: `user-id-${params?.userId}`,
        },
    };
};

export default UserIdPage;
