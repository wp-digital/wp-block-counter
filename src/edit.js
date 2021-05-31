/* eslint-disable @wordpress/no-unsafe-wp-apis */

import { __, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import {
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
	FormToggle,
	Icon,
	PanelBody,
	PanelRow,
	RadioControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { has, random, range } from 'lodash';

import { BLOCK_CLASS_NAME } from './constants';
import {
	COLUMNS_MAX,
	COLUMNS_DEFAULT,
	LAYOUT_BEFORE_TITLE,
	LAYOUT_AFTER_TITLE,
	LAYOUT_DEFAULT,
	SECTION_TITLE_TAG,
	TITLE_TAG,
	ICONS,
	HAS_SECTION_TITLE_DEFAULT,
	HAS_SECTION_DESCRIPTION_DEFAULT,
	HAS_TITLE_DEFAULT,
	HAS_ICON_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	NUMBER_EXAMPLES,
} from './constants/editor';
import IconsPicker from './IconsPicker';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const {
		hasSectionTitle = HAS_SECTION_TITLE_DEFAULT,
		title,
		hasSectionDescription = HAS_SECTION_DESCRIPTION_DEFAULT,
		description,
		columns = COLUMNS_DEFAULT,
		hasTitle = HAS_TITLE_DEFAULT,
		hasIcon = HAS_ICON_DEFAULT,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		layout = LAYOUT_DEFAULT,
	} = attributes;
	const [ randomNumbers ] = useState(
		range( 0, COLUMNS_MAX ).map(
			() => NUMBER_EXAMPLES[ random( 0, NUMBER_EXAMPLES.length - 1 ) ]
		)
	);

	return (
		<div
			{ ...useBlockProps( {
				className: `${ BLOCK_CLASS_NAME } ${ BLOCK_CLASS_NAME }_columns-${ columns }`,
			} ) }
		>
			<InspectorControls>
				<PanelBody
					title={ __( 'Section Settings', 'innocode-block-counter' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<legend className="blocks-base-control__label">
							{ __( 'Show title', 'innocode-block-counter' ) }
						</legend>
						<FormToggle
							checked={ hasSectionTitle }
							onChange={ ( event ) => {
								setAttributes( {
									hasSectionTitle: event.target.checked,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<legend className="blocks-base-control__label">
							{ __(
								'Show description',
								'innocode-block-counter'
							) }
						</legend>
						<FormToggle
							checked={ hasSectionDescription }
							onChange={ ( event ) => {
								setAttributes( {
									hasSectionDescription: event.target.checked,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<legend className="blocks-base-control__label">
							{ __( 'Columns', 'innocode-block-counter' ) }
						</legend>
						<RadioGroup
							onChange={ ( value ) => {
								setAttributes( { columns: value } );
							} }
							checked={ columns }
						>
							{ range( 1, COLUMNS_MAX + 1 ).map( ( i ) => (
								<Radio key={ i } value={ i }>
									{ i }
								</Radio>
							) ) }
						</RadioGroup>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Item Settings', 'innocode-block-counter' ) }
				>
					{ !! ICONS.length && (
						<PanelRow>
							<legend className="blocks-base-control__label">
								{ __( 'Show icon', 'innocode-block-counter' ) }
							</legend>
							<FormToggle
								checked={ hasIcon }
								onChange={ ( event ) => {
									setAttributes( {
										hasIcon: event.target.checked,
									} );
								} }
							/>
						</PanelRow>
					) }
					<PanelRow>
						<legend className="blocks-base-control__label">
							{ __( 'Show title', 'innocode-block-counter' ) }
						</legend>
						<FormToggle
							checked={ hasTitle }
							onChange={ ( event ) => {
								setAttributes( {
									hasTitle: event.target.checked,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<legend className="blocks-base-control__label">
							{ __(
								'Show description',
								'innocode-block-counter'
							) }
						</legend>
						<FormToggle
							checked={ hasDescription }
							onChange={ ( event ) => {
								setAttributes( {
									hasDescription: event.target.checked,
								} );
							} }
						/>
					</PanelRow>
					{ hasTitle && (
						<PanelRow>
							<RadioControl
								label={ __(
									'Layout',
									'innocode-block-counter'
								) }
								selected={ layout }
								disabled={ ! hasTitle }
								options={ [
									{
										label: __(
											'Before Title',
											'innocode-block-counter'
										),
										value: LAYOUT_BEFORE_TITLE,
									},
									{
										label: __(
											'After Title',
											'innocode-block-counter'
										),
										value: LAYOUT_AFTER_TITLE,
									},
								] }
								onChange={ ( value ) => {
									setAttributes( { layout: value } );
								} }
							/>
						</PanelRow>
					) }
				</PanelBody>
				{ !! ICONS.length && hasIcon && (
					<PanelBody
						title={ __( 'Icons', 'innocode-block-counter' ) }
					>
						{ range( columns ).map( ( i ) => (
							<PanelRow key={ i }>
								<IconsPicker
									label={ sprintf(
										/* translators: %d: Column number. */
										__(
											'Column #%d',
											'innocode-block-counter'
										),
										i + 1
									) }
									icons={ ICONS }
									value={ attributes[ `icon-${ i }` ] }
									onChange={ ( value ) => {
										setAttributes( {
											[ `icon-${ i }` ]: value,
										} );
									} }
								/>
							</PanelRow>
						) ) }
					</PanelBody>
				) }
			</InspectorControls>
			{ hasSectionTitle && (
				<RichText
					tagName={ SECTION_TITLE_TAG }
					value={ title }
					placeholder={ __( 'Title', 'innocode-block-counter' ) }
					onChange={ ( value ) => {
						setAttributes( { title: value } );
					} }
					keepPlaceholderOnFocus
					className={ `${ BLOCK_CLASS_NAME }-title` }
				/>
			) }
			{ hasSectionDescription && (
				<RichText
					tagName="div"
					multiline="p"
					value={ description }
					placeholder={ __(
						'Description',
						'innocode-block-counter'
					) }
					onChange={ ( value ) => {
						setAttributes( { description: value } );
					} }
					keepPlaceholderOnFocus
					className={ `${ BLOCK_CLASS_NAME }-description` }
				/>
			) }
			{ columns > 0 && (
				<ul className={ `${ BLOCK_CLASS_NAME }-list` }>
					{ range( columns ).map( ( i ) => {
						const icon = ICONS.find(
							( { value } ) =>
								value === attributes[ `icon-${ i }` ]
						);

						return (
							<li
								key={ i }
								className={ `${ BLOCK_CLASS_NAME }-item ${ BLOCK_CLASS_NAME }-item_${
									i + 1
								}` }
							>
								{ !! icon && (
									<Icon
										icon={
											has( icon, 'icon' )
												? icon.icon
												: icon.value
										}
									/>
								) }
								{ hasTitle && layout === LAYOUT_AFTER_TITLE && (
									<RichText
										tagName={ TITLE_TAG }
										value={ attributes[ `title-${ i }` ] }
										placeholder={ __(
											'Title',
											'innocode-block-counter'
										) }
										onChange={ ( value ) => {
											setAttributes( {
												[ `title-${ i }` ]: value,
											} );
										} }
										keepPlaceholderOnFocus
										className={ `${ BLOCK_CLASS_NAME }-item__title` }
									/>
								) }
								<RichText
									tagName="div"
									value={ attributes[ `number-${ i }` ] }
									placeholder={ randomNumbers[ i ] }
									onChange={ ( value ) => {
										setAttributes( {
											[ `number-${ i }` ]: value,
										} );
									} }
									keepPlaceholderOnFocus
									className={ `${ BLOCK_CLASS_NAME }-item__number` }
								/>
								{ hasTitle && layout === LAYOUT_BEFORE_TITLE && (
									<RichText
										tagName={ TITLE_TAG }
										value={ attributes[ `title-${ i }` ] }
										placeholder={ __(
											'Title',
											'innocode-block-counter'
										) }
										onChange={ ( value ) => {
											setAttributes( {
												[ `title-${ i }` ]: value,
											} );
										} }
										keepPlaceholderOnFocus
										className={ `${ BLOCK_CLASS_NAME }-item__title` }
									/>
								) }
								{ hasDescription && (
									<RichText
										tagName="div"
										multiline="p"
										value={
											attributes[ `description-${ i }` ]
										}
										placeholder={ __(
											'Description',
											'innocode-block-counter'
										) }
										onChange={ ( value ) => {
											setAttributes( {
												[ `description-${ i }` ]: value,
											} );
										} }
										keepPlaceholderOnFocus
										className={ `${ BLOCK_CLASS_NAME }-item__description` }
									/>
								) }
							</li>
						);
					} ) }
				</ul>
			) }
		</div>
	);
}
