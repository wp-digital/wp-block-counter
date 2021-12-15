import { applyFilters } from '@wordpress/hooks';

export const COLUMNS_MAX = applyFilters(
	'innocode.block-counter.columns.max',
	6
);
export const COLUMNS_DEFAULT = applyFilters(
	'innocode.block-counter.columns.default',
	3
);

export const LAYOUT_BEFORE_TITLE = 'before_title';
export const LAYOUT_AFTER_TITLE = 'after_title';
export const LAYOUT_DEFAULT = applyFilters(
	'innocode.block-counter.layout.default',
	LAYOUT_BEFORE_TITLE
);

export const SECTION_TITLE_TAG = applyFilters(
	'innocode.block-counter.section_title.tag',
	'h3'
);
export const TITLE_TAG = applyFilters('innocode.block-counter.title.tag', 'h4');

export const ICONS = applyFilters(
	'innocode.block-counter.icons',
	applyFilters('innocode.block.icons', [])
);

export const HAS_SECTION_TITLE_DEFAULT = applyFilters(
	'innocode.block-counter.has_section_title.default',
	true
);
export const HAS_SECTION_DESCRIPTION_DEFAULT = applyFilters(
	'innocode.block-counter.has_section_description.default',
	false
);
export const HAS_TITLE_DEFAULT = applyFilters(
	'innocode.block-counter.has_title.default',
	true
);
export const HAS_ICON_DEFAULT = applyFilters(
	'innocode.block-counter.has_icon.default',
	false
);
export const HAS_DESCRIPTION_DEFAULT = applyFilters(
	'innocode.block-counter.has_description.default',
	true
);

export const NUMBER_EXAMPLES = applyFilters(
	'innocode.block-counter.number.examples',
	['1,234.95', '934', '$100.00', '95%']
);
