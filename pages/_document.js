import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta content="IE=edge" />
					<link rel="shortcut icon" href="/static/assets/favicon.jpg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
