import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { ToolbarGroup, DropdownMenu, PanelBody, SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const { contentType } = attributes;

	const blockProps = useBlockProps({
		className: contentType,
	});

	// Function to handle icon change
	const onChangeIcon = (newIcon) => {
		setAttributes({ contentType: newIcon });
	};

	return (
		<>
			<BlockControls group="block" title="Card Type">
				<ToolbarGroup label="Card Type">
					<p className="card-type-dropdown-label">Card Type</p>

					<DropdownMenu
						icon="arrow-down"
						label={__('Card Type', 'library-info-card')}
						controls={[
							{
								// f14c
								title: __("Info - Generic", "library-info-card"),
								onClick: () => setAttributes({ contentType: 'wp-block-heading-info' })
							},
							{
								// f469
								title: __("Library Hours", "library-info-card"),
								onClick: () => setAttributes({ contentType: 'wp-block-heading-clock' })
							},
							{
								// f109
								title: __("Post", "library-info-card"),
								onClick: () => setAttributes({ contentType: 'wp-block-heading-post' })
							},
							{
								// f488
								title: __("Announcements", "library-info-card"),
								onClick: () => setAttributes({ contentType: 'wp-block-heading-megaphone' })
							},

						]}
						onChange={onChangeIcon}
					/>
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				{/* <div> */}
				<label for="library-info-wrapper-div" class="components-placeholder__label">Library Info Card</label>
				<span className={contentType + ' dashicons-before'}
				>{'add your title here.'}
				</span>
				<InnerBlocks
					template={[
						['core/heading',
							{
								placeholder: 'Add title here',
								className: contentType + ' dashicons-before',
							}
						],
						['core/paragraph',
							{
								placeholder: 'Add content or block here',
							}
						]
					]}
					template_lock='remove'

				// allowedBlocks={['core/html', 'core/table', 'core/list']}
				/>

			</div>
		</>
	);
}