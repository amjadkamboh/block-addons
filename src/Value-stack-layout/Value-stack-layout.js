import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton } from '@wordpress/components';
import { useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

registerBlockType( 'wpm-captain-block/value-block-list', {
	title: __( 'Value Stack Layout' ), // Block title.
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Value Stack Layout' ),
	],
	attributes: {
		Value1: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		Value2: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		Value3: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
	},
	edit: (props) => { 
		const { attributes, setAttributes } = props;
		const { Value1, Value2, Value3,} = attributes;
		return (
			<div { ...useBlockProps()}  >
				<InspectorControls >
					<PanelBody>
						<TextControl
							label="Value Stack Layout 1"
							value={ Value1 }
							onChange={(newval) => setAttributes({ Value1: newval })}
						/>
						<TextControl
							label="Value Stack Layout 2"
							value={ Value2 }
							onChange={(newval) => setAttributes({ Value2: newval })}
						/>
						<TextControl
							label="Value Stack Layout 3"
							value={ Value3 }
							onChange={(newval) => setAttributes({ Value3: newval })}
						/>
					</PanelBody>
				</InspectorControls>
				
				<div className="Value-1section al">
					<ul>
						<li>{ Value1 }</li>
						<li>{ Value2 }</li>
						<li>{ Value3 }</li>
					</ul>
				</div>
			</div>
		);
	},
	save : (props) => { 
		const { attributes } = props;
		const { Value1, Value2, Value3} = attributes;

    	return (
			<div className="theme-section-full alignfull full-bg-color">
				<div className="Value-1section al Hero-outter">
					<ul>
						<li>{ Value1 }</li>
						<li>{ Value2 }</li>
						<li>{ Value3 }</li>
					</ul>
				</div>
			</div>
		);
	},
} );