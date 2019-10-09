import App from 'next/app';
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import Link from 'next/link';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../store'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Head>
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>

        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))