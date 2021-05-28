import domReady from '@wordpress/dom-ready';
import counterUp from 'counterup2';

import { BLOCK_CLASS_NAME } from './constants';

domReady( () => {
	const elements = document.querySelectorAll(
		`.${ BLOCK_CLASS_NAME }-item__number`
	);

	if ( ! elements.length ) {
		return;
	}

	const handler = ( element ) => {
		counterUp( element );
		element.classList.add(
			`${ BLOCK_CLASS_NAME }-item__number--is-visible`
		);
	};

	if ( typeof window.IntersectionObserver === 'undefined' ) {
		[].map.call( elements, ( element ) => {
			handler( element );
		} );

		return;
	}

	const observer = new window.IntersectionObserver(
		( entries ) => {
			entries.forEach( ( entry ) => {
				if ( ! entry.isIntersecting ) {
					return;
				}

				const element = entry.target;

				handler( element );
				observer.unobserve( element );
			} );
		},
		{
			threshold: 0.75,
		}
	);

	elements.forEach( ( element ) => {
		element.style.visibility = 'hidden';
		observer.observe( element );
	} );
} );
