import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	// const blockProps = useBlockProps.save();
	// return <div {...blockProps}>{attributes.title}</div>;
	// const { attributes } = props;
	const { bgColor } = attributes;

	return (
		<div style={{ backgroundColor: bgColor, padding: '20px' }}>
			<InnerBlocks.Content />
		</div>
	);
}