import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton } from '@wordpress/components';
import { useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

registerBlockType( 'wpm-captain-block/guide-block-list', {
	title: __( 'Guide Section' ), // Block title.
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Guide Section' ),
	],
	attributes: {
		RichTextTitle: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		TextDes: {
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
		mediaIdThree: {
			type: 'number',
			default: 0
		},
		mediaUrlThree: {
			type: 'string',
			default: ''
		},
		mediaIdFour: {
			type: 'number',
			default: 0
		},
		mediaUrlFour: {
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
		const { RichTextTitle, TextDes,heroCta,heroLink} = attributes;
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
		const removeMedia3 = () => {
			props.setAttributes({
				mediaIdThree: 0,
				mediaUrlThree: '',
			});
		}
		const removeMedia4 = () => {
			props.setAttributes({
				mediaIdFour: 0,
				mediaUrlFour: '',
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
		const onSelectMedia3 = (mediaThree) => {
			props.setAttributes({
				mediaIdThree: mediaThree.id,
				mediaUrlThree: mediaThree.url
			});
		}
		const onSelectMedia4 = (mediaFour) => {
			props.setAttributes({
				mediaIdFour: mediaFour.id,
				mediaUrlFour: mediaFour.url
			});
		}
		console.log(attributes.mediaIdThree);
		return (
			<div { ...useBlockProps()}  >
				<InspectorControls >
					<PanelBody>
						<h3>Value Proposition</h3>
						<TextControl
							label="Add Section Title Here"
							value={ RichTextTitle }
							onChange={(newval) => setAttributes({ RichTextTitle: newval })}
						/>
						<TextControl
							label="Add Section Caption Here"
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

						<MediaUploadCheck>
						<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
									onSelect={onSelectMedia3}
									value={attributes.mediaIdThree}
									allowedTypes={ ['image'] }
									render={({open}) => (
										<Button 
											className={attributes.mediaIdThree == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
											onClick={open}
										>
											{attributes.mediaIdThree == 0 && __('Choose an image')}
										
											<img src={attributes.mediaUrlThree} />
										
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{attributes.mediaIdThree != 0 && 
								<MediaUploadCheck>
									<MediaUpload
										title={__('Replace image')}
										value={attributes.mediaIdThree}
										onSelect={onSelectMedia3}
										allowedTypes={['image']}
										render={({open}) => (
											<Button onClick={open} isDefault isLarge>{__('Replace image')}</Button>
										)}
									/>
								</MediaUploadCheck>
							}
							{attributes.mediaIdThree != 0 && 
								<MediaUploadCheck>
									<Button onClick={removeMedia3} isLink isDestructive>{__('Remove image')}</Button>
								</MediaUploadCheck>
							}
						</div>
						</MediaUploadCheck>

						<MediaUploadCheck>
						<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
									onSelect={onSelectMedia4}
									value={attributes.mediaIdFour}
									allowedTypes={ ['image'] }
									render={({open}) => (
										<Button 
											className={attributes.mediaIdFour == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
											onClick={open}
										>
											{attributes.mediaIdFour == 0 && __('Choose an image')}
										
											<img src={attributes.mediaUrlFour} />
										
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{attributes.mediaIdFour != 0 && 
								<MediaUploadCheck>
									<MediaUpload
										title={__('Replace image')}
										value={attributes.mediaIdFour}
										onSelect={onSelectMedia4}
										allowedTypes={['image']}
										render={({open}) => (
											<Button onClick={open} isDefault isLarge>{__('Replace image')}</Button>
										)}
									/>
								</MediaUploadCheck>
							}
							{attributes.mediaIdFour != 0 && 
								<MediaUploadCheck>
									<Button onClick={removeMedia4} isLink isDestructive>{__('Remove image')}</Button>
								</MediaUploadCheck>
							}
						</div>
						</MediaUploadCheck>
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
						<div className="col-inner-100">
							<h2>{ RichTextTitle }</h2>
							<p>{ TextDes }</p>
						</div>
						<div className="col-inner-5">
							{attributes.mediaId != 0 && 
								<img src={attributes.mediaUrl} alt={ RichTextTitle } />
							}
							{attributes.mediaIdOne != 0 && 
								<img src={attributes.mediaUrlOne} alt={ RichTextTitle } />
							}
							{attributes.mediaIdTwo != 0 && 
								<img src={attributes.mediaUrlTwo} alt={ RichTextTitle } />
							}
							{attributes.mediaIdThree != 0 && 
								<img src={attributes.mediaUrlThree} alt={ RichTextTitle } />
							}
							{attributes.mediaIdFour != 0 && 
								<img src={attributes.mediaUrlFour} alt={ RichTextTitle } />
							}
						</div>
						<div className="col-inner-100">
							<a className="wp-block-button__link" href={ heroLink }>{ heroCta }</a>
						</div>
						
					</div>
			</div>
		);
},
save : (props) => { 
	const { attributes } = props;
	const { RichTextTitle, TextDes,heroCta,heroLink} = attributes;

	return (
		<div className="theme-section-full alignfull">
			<div className="Hero-outter">
				<div className="Hero-1section img-text-section">
							<div className="col-inner-100">
								<h2>{ RichTextTitle }</h2>
								<p>{ TextDes }</p>
							</div>
							<div className="col-inner-5">
								{attributes.mediaId != 0 && 
									<img src={attributes.mediaUrl} alt={ RichTextTitle } />
								}
								{attributes.mediaIdOne != 0 && 
									<img src={attributes.mediaUrlOne} alt={ RichTextTitle } />
								}
								{attributes.mediaIdTwo != 0 && 
									<img src={attributes.mediaUrlTwo} alt={ RichTextTitle } />
								}
								{attributes.mediaIdThree != 0 && 
									<img src={attributes.mediaUrlThree} alt={ RichTextTitle } />
								}
								{attributes.mediaIdFour != 0 && 
									<img src={attributes.mediaUrlFour} alt={ RichTextTitle } />
								}
							</div>
							<div className="col-inner-100">
								<a className="wp-block-button__link" href={ heroLink }>{ heroCta }</a>
							</div>
							
						</div>
				</div>
			</div>
	);
},
} );