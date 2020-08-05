import React from 'react';
import Link from 'next/link';

const Footer = (props) => {
	return (
		<div>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default Footer;
