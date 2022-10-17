import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton } from '@wordpress/components';
import { useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

registerBlockType( 'wpm-captain-block/price-block-list', {
	title: __( 'Price Choices' ), // Block title.
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Price Choices' ),
	],
	attributes: {
		headingTitle: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		maintDes: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		packgesRichTextTitle: {
			type: 'string',
			default: 'Small/Medium/Large',
		},
        RichTextTitle: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		TextDes: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
        packgesRichTextTitle1: {
			type: 'string',
			default: 'Small/Medium/Large',
		},
		RichTextTitle1: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		TextDes1: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
        packgesRichTextTitle2: {
			type: 'string',
			default: 'Small/Medium/Large',
		},
		RichTextTitle2: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		TextDes2: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		heroCta: {
			type: 'string',
			default: 'Schedule a Call',
		},
		heroLink: {
			type: 'string',
			default: '',
		},
	},
	edit: (props) => { 
		const { attributes, setAttributes } = props;
		const { RichTextTitle, TextDes, RichTextTitle1, TextDes1, RichTextTitle2, TextDes2, headingTitle,maintDes, heroCta, heroLink,packgesRichTextTitle,packgesRichTextTitle1,packgesRichTextTitle2} = attributes;
		return (
			<div { ...useBlockProps()}  >
				<InspectorControls >
					<PanelBody>
						<TextControl
                            label="Add Section Title Here"
                            value={ headingTitle }
                            onChange={(newval) => setAttributes({ headingTitle: newval })}
						/>
						<TextControl
							label="Add Section Caption Here"
							value={ maintDes }
							onChange={(newval) => setAttributes({ maintDes: newval })}
						/>
					</PanelBody>
					<PanelBody>
						<h3>Package One</h3>
						<TextControl
							label="Package type"
							value={ packgesRichTextTitle }
							onChange={(newval) => setAttributes({ packgesRichTextTitle: newval })}
						/>
						<TextControl
							label="Add Package Title Here"
							value={ RichTextTitle }
							onChange={(newval) => setAttributes({ RichTextTitle: newval })}
						/>
						<TextControl
							label="Add Package Caption Here"
							value={ TextDes }
							onChange={(newval) => setAttributes({ TextDes: newval })}
						/>
                    </PanelBody>
					<PanelBody>
						<h3>Package Two</h3>
                        <TextControl
							label="Package type"
							value={ packgesRichTextTitle1 }
							onChange={(newval) => setAttributes({ packgesRichTextTitle1: newval })}
						/>
						<TextControl
							label="Add Package Title Here"
							value={ RichTextTitle1 }
							onChange={(newval) => setAttributes({ RichTextTitle1: newval })}
						/>
						<TextControl
							label="Add Package Caption Here"
							value={ TextDes1 }
							onChange={(newval) => setAttributes({ TextDes1: newval })}
						/>
                    </PanelBody>
                    <PanelBody>
						<h3>Package Three</h3>
                        <TextControl
							label="Package type"
							value={ packgesRichTextTitle2 }
							onChange={(newval) => setAttributes({ packgesRichTextTitle2: newval })}
						/>
						<TextControl
							label="Add Package Title Here"
							value={ RichTextTitle2 }
							onChange={(newval) => setAttributes({ RichTextTitle2: newval })}
						/>
						<TextControl
							label="Add Package Caption Here"
							value={ TextDes2 }
							onChange={(newval) => setAttributes({ TextDes2: newval })}
						/>
                    </PanelBody>
					<PanelBody>
						<TextControl
							label="Add button Text"
							value={ heroCta }
							onChange={(newval) => setAttributes({ heroCta: newval })}
						/>
						<TextControl
							label="Add button Link"
							value={ heroLink }
							onChange={(newval) => setAttributes({ heroLink: newval })}
						/>
					</PanelBody>
				</InspectorControls>
				
				<div className="Hero-1section img-text-section">
					<div className="col-100">
						<h2>{headingTitle}</h2>
						<p>{maintDes}</p>
					</div>
					<div className="col-3">
						<div className="col-inner-3">
                            <span className="Package-t-small">{ packgesRichTextTitle }</span>
							<h3>{ RichTextTitle }</h3>
							<p>{ TextDes }</p>
						</div>
						<div className="col-inner-3">
                            <span className="Package-t-small">{ packgesRichTextTitle1 }</span>
							<h3>{ RichTextTitle1 }</h3>
							<p>{ TextDes1 }</p>
						</div>
						<div className="col-inner-3">
                            <span className="Package-t-small">{ packgesRichTextTitle2 }</span>
							<h3>{ RichTextTitle2 }</h3>
							<p>{ TextDes2 }</p>
						</div>
					</div>
					<div className="col-100">
						<a className="wp-block-button__link" href={ heroLink }>{ heroCta }</a>
					</div>
				</div>
			</div>
		);
},
save : (props) => { 
	const { attributes } = props;
	const { 
		RichTextTitle, 
		TextDes, 
		RichTextTitle1, 
		TextDes1, 
		RichTextTitle2, 
		TextDes2, 
		headingTitle,
		maintDes, 
		heroCta, 
		heroLink,
		packgesRichTextTitle,
		packgesRichTextTitle1,
		packgesRichTextTitle2
	} = attributes;

	return (
		<div className="theme-section-full alignfull full-bg-color">
			<div className="Hero-outter">
				<div className="Hero-1section img-text-section">
					<div className="col-100">
						<h2>{headingTitle}</h2>
						<p>{maintDes}</p>
					</div>
					<div className="col-3">
						<div className="col-inner-3">
                            <span className="Package-t-small">{ packgesRichTextTitle }</span>
							<h3>{ RichTextTitle }</h3>
							<p>{ TextDes }</p>
						</div>
						<div className="col-inner-3">
                            <span className="Package-t-small">{ packgesRichTextTitle1 }</span>
							<h3>{ RichTextTitle1 }</h3>
							<p>{ TextDes1 }</p>
						</div>
						<div className="col-inner-3">
                            <span className="Package-t-small">{ packgesRichTextTitle2 }</span>
							<h3>{ RichTextTitle2 }</h3>
							<p>{ TextDes2 }</p>
						</div>
					</div>
					<div className="col-100">
						<a className="wp-block-button__link" href={ heroLink }>{ heroCta }</a>
					</div>
				</div>
			</div>
		</div>
	);
},
} );