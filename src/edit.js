import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

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
	// const { attributes, setAttributes } = props;
	const { bgColor } = attributes;

	return (
		<div class="library-info-wrapper-div block-editor-block-list__block wp-block wrapper">
			<label for="library-info-wrapper-div" class="components-placeholder__label">Library Info Card</label>
			<InnerBlocks
				template={[
					['core/html', { placeholder: 'Enter your content here' }],
				]}
				allowedBlocks={['core/html', 'core/table', 'core/list']}
			/>

		</div>
	);
}