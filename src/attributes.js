import { range } from 'lodash';

import { BLOCK_CLASS_NAME } from './constants';
import {
	COLUMNS_MAX,
	COLUMNS_DEFAULT,
	LAYOUT_DEFAULT,
	HAS_SECTION_TITLE_DEFAULT,
	HAS_SECTION_DESCRIPTION_DEFAULT,
	HAS_TITLE_DEFAULT,
	HAS_ICON_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
} from './constants/editor';

export default {
	hasSectionTitle: {
		type: 'boolean',
		default: HAS_SECTION_TITLE_DEFAULT,
	},
	title: {
		type: 'string',
		source: 'html',
		selector: `.${ BLOCK_CLASS_NAME }-title`,
	},
	hasSectionDescription: {
		type: 'boolean',
		default: HAS_SECTION_DESCRIPTION_DEFAULT,
	},
	description: {
		type: 'string',
		source: 'html',
		multiline: 'p',
		selector: `.${ BLOCK_CLASS_NAME }-description`,
	},
	columns: {
		type: 'integer',
		minimum: 1,
		maximum: COLUMNS_MAX,
		default: COLUMNS_DEFAULT,
	},
	hasTitle: {
		type: 'boolean',
		default: HAS_TITLE_DEFAULT,
	},
	hasIcon: {
		type: 'boolean',
		default: HAS_ICON_DEFAULT,
	},
	hasDescription: {
		type: 'boolean',
		default: HAS_DESCRIPTION_DEFAULT,
	},
	layout: {
		type: 'string',
		default: LAYOUT_DEFAULT,
	},
	...range( COLUMNS_MAX ).reduce(
		( columns, i ) => ( {
			...columns,
			[ `icon-${ i }` ]: {
				type: 'string',
			},
			[ `number-${ i }` ]: {
				type: 'string',
				source: 'html',
				selector: `.${ BLOCK_CLASS_NAME }-item--${
					i + 1
				} .${ BLOCK_CLASS_NAME }-item__number`,
			},
			[ `title-${ i }` ]: {
				type: 'string',
				source: 'html',
				selector: `.${ BLOCK_CLASS_NAME }-item--${
					i + 1
				} .${ BLOCK_CLASS_NAME }-item__title`,
			},
			[ `description-${ i }` ]: {
				type: 'string',
				source: 'html',
				multiline: 'p',
				selector: `.${ BLOCK_CLASS_NAME }-item--${
					i + 1
				} .${ BLOCK_CLASS_NAME }-item__description`,
			},
		} ),
		{}
	),
};
