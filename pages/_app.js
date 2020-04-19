import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import store from '../redux/store';
import '../scss/styles.scss';
import Header from '../layout/Header/Header';

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
				<link rel="shortcut icon" href="/static/assets/favicon.jpg" />
			</Head>
			<Header />
			<div id="dzb-progress-bar" />
			{/* <div id="nprogress" /> */}
			<Component {...pageProps} />
		</Provider>
	);
}
