import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import './style.scss';

registerBlockType( 'innocode/wp-block-counter', {
	apiVersion: 2,
	supports: {
		align: [ 'center', 'wide', 'full' ],
		className: false,
	},
	edit: Edit,
	save,
	attributes,
} );
