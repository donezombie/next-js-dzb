import React from 'react';
import Link from 'next/link';

const Header = (props) => {
	return (
		<div>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/other-route">
						<a>Other page</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default Header;
