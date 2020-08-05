import React from 'react';
import { Provider } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';

import store from 'redux/store';
import NProgress from 'nprogress';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/styles.scss';

import Header from 'layout/Header';
import Footer from 'layout/Footer';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Header />
			<div id="dzb-progress-bar" />

			{/* <div id="nprogress" /> */}
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
}
