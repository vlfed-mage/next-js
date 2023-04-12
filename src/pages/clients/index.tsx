import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

type Client = {
    id: string;
    name: string;
};

export default function Clients() {
    const clients: Client[] = [
        { id: 'vlad', name: 'Vladyslav' },
        { id: 'manu', name: 'Manuel' },
    ];

    return (
        <>
            <Head>
                <title>Clients page</title>
                <meta name='description' content='Clients page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Clients page</h1>
                <ul>
                    {clients.map(client => {
                        const { id, name } = client;
                        return (
                            <li key={id}>
                                {/*// string notation*/}
                                {/*<Link href={`/clients/${id}`}>{name}</Link> */}

                                {/*// With URL Object*/}
                                <Link
                                    href={{
                                        pathname: '/clients/[clientId]',
                                        query: { clientId: id },
                                    }}>
                                    {name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </>
    );
}
