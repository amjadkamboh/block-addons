import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton } from '@wordpress/components';
import { useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

registerBlockType( 'wpm-captain-block/plan-block-list', {
	title: __( 'Plan Section' ), // Block title.
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Plan Section' ),
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
		RichTextTitle: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		TextDes: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		RichTextTitle1: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		TextDes1: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		RichTextTitle2: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		TextDes2: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		mediaId: {
			type: 'number',
			default: 0
		},
		mediaUrl: {
			type: 'string',
			default: ''
		},
		mediaIdOne: {
			type: 'number',
			default: 0
		},
		mediaUrlOne: {
			type: 'string',
			default: ''
		},
		mediaIdTwo: {
			type: 'number',
			default: 0
		},
		mediaUrlTwo: {
			type: 'string',
			default: ''
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
		const { RichTextTitle, TextDes, RichTextTitle1, TextDes1, RichTextTitle2, TextDes2, headingTitle,maintDes, heroCta, heroLink} = attributes;
		const removeMedia = () => {
			props.setAttributes({
				mediaId: 0,
				mediaUrl: '',
			});
		}
		const removeMedia1 = () => {
			props.setAttributes({
				mediaIdOne: 0,
				mediaUrlOne: '',
			});
		}
		const removeMedia2 = () => {
			props.setAttributes({
				mediaIdTwo: 0,
				mediaUrlTwo: '',
			});
		}
		const onSelectMedia = (media) => {
			props.setAttributes({
				mediaId: media.id,
				mediaUrl: media.url,
			});
		}
		const onSelectMedia1 = (mediaOne) => {
			props.setAttributes({
				mediaIdOne: mediaOne.id,
				mediaUrlOne: mediaOne.url,
			});
		}
		const onSelectMedia2 = (mediaTwo) => {
			props.setAttributes({
				mediaIdTwo: mediaTwo.id,
				mediaUrlTwo: mediaTwo.url
			});
		}
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
						<h3>Value Proposition</h3>
						<TextControl
							label="Add Proposition Title Here"
							value={ RichTextTitle }
							onChange={(newval) => setAttributes({ RichTextTitle: newval })}
						/>
						<TextControl
							label="Add Proposition Caption Here"
							value={ TextDes }
							onChange={(newval) => setAttributes({ TextDes: newval })}
						/>
						<MediaUploadCheck>
						<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
									onSelect={onSelectMedia}
									value={attributes.mediaId}
									allowedTypes={ ['image'] }
									render={({open}) => (
										<Button 
											className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
											onClick={open}
										>
											{attributes.mediaId == 0 && __('Choose an image')}
										
											<img src={attributes.mediaUrl} />
										
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{attributes.mediaId != 0 && 
								<MediaUploadCheck>
									<MediaUpload
										title={__('Replace image')}
										value={attributes.mediaId}
										onSelect={onSelectMedia}
										allowedTypes={['image']}
										render={({open}) => (
											<Button onClick={open} isDefault isLarge>{__('Replace image')}</Button>
										)}
									/>
								</MediaUploadCheck>
							}
							{attributes.mediaId != 0 && 
								<MediaUploadCheck>
									<Button onClick={removeMedia} isLink isDestructive>{__('Remove image')}</Button>
								</MediaUploadCheck>
							}
						</div>
						</MediaUploadCheck>
					</PanelBody>
					<PanelBody>
						<h3>Value Proposition 2</h3>
						<TextControl
							label="Add Proposition Title Here"
							value={ RichTextTitle1 }
							onChange={(newval) => setAttributes({ RichTextTitle1: newval })}
						/>
						<TextControl
							label="Add Proposition Caption Here"
							value={ TextDes1 }
							onChange={(newval) => setAttributes({ TextDes1: newval })}
						/>
						<MediaUploadCheck>
						<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
									onSelect={onSelectMedia1}
									value={attributes.mediaIdOne}
									allowedTypes={ ['image'] }
									render={({open}) => (
										<Button 
											className={attributes.mediaIdOne == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
											onClick={open}
										>
											{attributes.mediaIdOne == 0 && __('Choose an image')}
										
											<img src={attributes.mediaUrlOne} />
										
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{attributes.mediaIdOne != 0 && 
								<MediaUploadCheck>
									<MediaUpload
										title={__('Replace image')}
										value={attributes.mediaIdOne}
										onSelect={onSelectMedia1}
										allowedTypes={['image']}
										render={({open}) => (
											<Button onClick={open} isDefault isLarge>{__('Replace image')}</Button>
										)}
									/>
								</MediaUploadCheck>
							}
							{attributes.mediaIdOne != 0 && 
								<MediaUploadCheck>
									<Button onClick={removeMedia1} isLink isDestructive>{__('Remove image')}</Button>
								</MediaUploadCheck>
							}
						</div>
						</MediaUploadCheck>
					</PanelBody>
					<PanelBody>
						<h3>Value Proposition 3</h3>
						<TextControl
							label="Add Proposition Title Here"
							value={ RichTextTitle2 }
							onChange={(newval) => setAttributes({ RichTextTitle2: newval })}
						/>
						<TextControl
							label="Add Proposition Caption Here"
							value={ TextDes2 }
							onChange={(newval) => setAttributes({ TextDes2: newval })}
						/>
						<MediaUploadCheck>
						<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
									onSelect={onSelectMedia2}
									value={attributes.mediaIdTwo}
									allowedTypes={ ['image'] }
									render={({open}) => (
										<Button 
											className={attributes.mediaIdTwo == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
											onClick={open}
										>
											{attributes.mediaIdTwo == 0 && __('Choose an image')}
										
											<img src={attributes.mediaUrlTwo} />
										
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{attributes.mediaIdTwo != 0 && 
								<MediaUploadCheck>
									<MediaUpload
										title={__('Replace image')}
										value={attributes.mediaIdTwo}
										onSelect={onSelectMedia2}
										allowedTypes={['image']}
										render={({open}) => (
											<Button onClick={open} isDefault isLarge>{__('Replace image')}</Button>
										)}
									/>
								</MediaUploadCheck>
							}
							{attributes.mediaIdTwo != 0 && 
								<MediaUploadCheck>
									<Button onClick={removeMedia2} isLink isDestructive>{__('Remove image')}</Button>
								</MediaUploadCheck>
							}
						</div>
						</MediaUploadCheck>
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
					<div className="col-100">
						<div className="col-inner-35-70">
							{attributes.mediaId != 0 && 
								<img src={attributes.mediaUrl} alt={ RichTextTitle } />
							}
                            <div className="col-inner-2-cont">
                                <h3>{ RichTextTitle }</h3>
							    <p>{ TextDes }</p>
                            </div>
							
						</div>
						<div className="col-inner-35-70">
							{attributes.mediaIdOne != 0 && 
								<img src={attributes.mediaUrlOne} alt={ RichTextTitle1 } />
							}
                            <div className="col-inner-2-cont">
                                <h3>{ RichTextTitle1 }</h3>
							    <p>{ TextDes1 }</p>
                            </div>
							
						</div>
						<div className="col-inner-35-70">
							{attributes.mediaIdTwo != 0 && 
								<img src={attributes.mediaUrlTwo} alt={ RichTextTitle2 } />
							}
                            <div className="col-inner-2-cont">
                                <h3>{ RichTextTitle2 }</h3>
                                <p>{ TextDes2 }</p>
                            </div>
							
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
	const { RichTextTitle, TextDes, RichTextTitle1, TextDes1, RichTextTitle2, TextDes2, headingTitle,maintDes, heroCta, heroLink} = attributes;

	return (
		<div className="theme-section-full alignfull">
			<div className="Hero-outter">
			<div className="Hero-1section img-text-section">
					<div className="col-100">
						<h2>{headingTitle}</h2>
						<p>{maintDes}</p>
					</div>
					<div className="col-100">
						<div className="col-inner-35-70">
							{attributes.mediaId != 0 && 
								<img src={attributes.mediaUrl} alt={ RichTextTitle } />
							}
                            <div className="col-inner-2-cont">
                                <h3>{ RichTextTitle }</h3>
							    <p>{ TextDes }</p>
                            </div>
							
						</div>
						<div className="col-inner-35-70">
							{attributes.mediaIdOne != 0 && 
								<img src={attributes.mediaUrlOne} alt={ RichTextTitle1 } />
							}
                            <div className="col-inner-2-cont">
                                <h3>{ RichTextTitle1 }</h3>
							    <p>{ TextDes1 }</p>
                            </div>
							
						</div>
						<div className="col-inner-35-70">
							{attributes.mediaIdTwo != 0 && 
								<img src={attributes.mediaUrlTwo} alt={ RichTextTitle2 } />
							}
                            <div className="col-inner-2-cont">
                                <h3>{ RichTextTitle2 }</h3>
                                <p>{ TextDes2 }</p>
                            </div>
							
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