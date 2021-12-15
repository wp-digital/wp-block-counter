import { useBlockProps, RichText } from '@wordpress/block-editor';
import { range } from 'lodash';

import { BLOCK_CLASS_NAME } from './constants';
import {
	COLUMNS_DEFAULT,
	LAYOUT_BEFORE_TITLE,
	LAYOUT_AFTER_TITLE,
	LAYOUT_DEFAULT,
	SECTION_TITLE_TAG,
	TITLE_TAG,
} from './constants/editor';

export default function save({ attributes }) {
	const {
		hasSectionTitle = true,
		title,
		hasSectionDescription = false,
		description,
		columns = COLUMNS_DEFAULT,
		hasIcon = false,
		hasTitle = true,
		hasDescription = true,
		layout = LAYOUT_DEFAULT,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: `${BLOCK_CLASS_NAME} ${BLOCK_CLASS_NAME}_columns-${columns}`,
			})}
		>
			{hasSectionTitle && (
				<RichText.Content
					tagName={SECTION_TITLE_TAG}
					className={`${BLOCK_CLASS_NAME}-title`}
					value={title}
				/>
			)}
			{hasSectionDescription && (
				<RichText.Content
					tagName="div"
					multiline="p"
					value={description}
					className={`${BLOCK_CLASS_NAME}-description`}
				/>
			)}
			{columns > 0 && (
				<ul className={`${BLOCK_CLASS_NAME}-list`}>
					{range(columns).map((i) => (
						<li
							key={i}
							className={`${BLOCK_CLASS_NAME}-item ${BLOCK_CLASS_NAME}-item_${
								i + 1
							}`}
						>
							{hasIcon && (
								<div
									className={`${BLOCK_CLASS_NAME}-item__icon`}
								>
									{attributes[`icon-${i}`]}
								</div>
							)}
							{hasTitle && layout === LAYOUT_AFTER_TITLE && (
								<RichText.Content
									tagName={TITLE_TAG}
									className={`${BLOCK_CLASS_NAME}-item__title`}
									value={attributes[`title-${i}`]}
								/>
							)}
							<RichText.Content
								tagName="div"
								className={`${BLOCK_CLASS_NAME}-item__number`}
								value={attributes[`number-${i}`]}
							/>
							{hasTitle && layout === LAYOUT_BEFORE_TITLE && (
								<RichText.Content
									tagName={TITLE_TAG}
									className={`${BLOCK_CLASS_NAME}-item__title`}
									value={attributes[`title-${i}`]}
								/>
							)}
							{hasDescription && (
								<RichText.Content
									tagName="div"
									multiline="p"
									value={attributes[`description-${i}`]}
									className={`${BLOCK_CLASS_NAME}-item__description`}
								/>
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
