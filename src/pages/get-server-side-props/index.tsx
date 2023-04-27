import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { GetServerSideProps } from 'next';
import { Username } from '@/global/types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const UserProfilePage = ({ username }: Username) => {
    const { pathname } = useRouter();
    return (
        <>
            <Head>
                <title>User profile page</title>
                <meta name='description' content='User profile page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>{username}</h1>
                <Link href={`${pathname}/any`}>Go to user-id page</Link>
            </main>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const { params, req, res } = context; // shows in terminal

    console.log('Server side code');

    return {
        props: {
            username: 'Vlad',
        },
    };
};

export default UserProfilePage;
