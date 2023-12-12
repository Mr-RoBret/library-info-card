import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	// return <div {...blockProps}>{attributes.title}</div>;
	// const { attributes } = props;
	const { contentType } = attributes;

	return (
		<div {...blockProps}>
			<h2 className={contentType + ' dashicons-before'}>
				{attributes.headingText}
			</h2>
			<InnerBlocks.Content />
		</div>
	);

}