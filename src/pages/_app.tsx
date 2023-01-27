import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import type { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header img='/image/Header_img.jpg' title='Учение Next js' />
			<Breadcrumb />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
