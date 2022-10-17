/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';
 import { InnerBlocks } from '@wordpress/block-editor';
 import { useSelect } from '@wordpress/data';
 import { ToggleControl, ColorPicker, ColorPalette } from '@wordpress/components';
import { TextControl, PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';
const { InspectorControls, useSetting, RichText } = wp.blockEditor;
import { useBlockProps } from '@wordpress/block-editor';
const ALLOWED_BLOCKS = [ 'wpm-captain-block/tab' ];

 //import './editor.scss';
import './tab.js';

export default function Edit( props ) {
 
	 const { 
		 attributes,
		 setAttributes,
 
	 } = props;
	 const { tabLabelsArray, updateChild, sideTabLayout, blockTitle, blockText, content } = attributes;

	 const onChangeTabLabel = toggle => {
		 setAttributes({ sideTabLayout: toggle });
	 };
	 const onChangeTitle = newTitle => {
		 setAttributes({ blockTitle: newTitle});
	 };
	//  const onChangeText = newText => {
	// 	 setAttributes({ content: newText});
	//  };
	 
	 
	 return (
		 <div { ...useBlockProps() }>
			<div className="theme-section-full alignfull">
			<div className="Hero-outter">
			<div className="Hero-1section">
			 <h2>FAQ Section Block</h2>
			 
				<div className={ props.className }>
					<TextControl
					className={ "title-block" }
						value={ blockTitle }
						onChange={onChangeTitle}
						placeholder="FAQ Section Title"
						type="text"
					/>
					</div>
					<h4>Add FAQs</h4>
				 <InnerBlocks
					 allowedBlocks={ ALLOWED_BLOCKS }
					 renderAppender={ InnerBlocks.ButtonBlockAppender }
				 />				
		 </div>
		 </div>
		 </div>
		 </div>
	 );
 }