import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import type { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header img='/image/Header_img.jpg' title='Учение Next js' />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
