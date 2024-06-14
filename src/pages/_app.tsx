import Layout from '@/components/layouts';
import '../app/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>;
}
