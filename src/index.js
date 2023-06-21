import { range } from 'lodash';

import { registerBlockType } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import { COLUMNS_DEFAULT, NUMBER_EXAMPLES } from './constants/editor';

import './style.scss';

registerBlockType('wpd/block-counter', {
	apiVersion: 2,
	supports: {
		align: ['center', 'wide', 'full'],
		className: false,
	},
	attributes,
	edit: Edit,
	save,
	icon,
	example: {
		attributes: {
			title: __('Counter', 'wpd-blocks'),
			hasSectionDescription: true,
			description: sprintf(
				'<p>%s</p>',
				__('This is a description for the counter block.', 'wpd-blocks')
			),
			...range(COLUMNS_DEFAULT).reduce(
				(columns, i) => ({
					...columns,
					[`number-${i}`]: NUMBER_EXAMPLES[i + 1],
					[`title-${i}`]: sprintf(
						/* translators: %d: counter number */
						__('Counter %d', 'wpd-blocks'),
						i + 1
					),
					[`description-${i}`]: sprintf(
						'<p>%s</p>',
						sprintf(
							/* translators: %d: counter number */
							__(
								'This is a description for the counter %d.',
								'wpd-blocks'
							),
							i + 1
						)
					),
				}),
				{}
			),
		},
	},
});
