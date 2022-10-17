import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton } from '@wordpress/components';
import { useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

registerBlockType( 'wpm-captain-block/stakes-block-list', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Stakes Section' ), // Block title.
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Stakes Section' ),
	],
	attributes: {
		heroTitle: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		heroDes: {
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
	},
	edit: (props) => { 
		const { attributes, setAttributes } = props;
		const { heroTitle, heroDes} = attributes;
		

		const removeMedia = () => {
			props.setAttributes({
				mediaId: 0,
				mediaUrl: ''
			});
		}
	 
		 const onSelectMedia = (media) => {
			props.setAttributes({
				mediaId: media.id,
				mediaUrl: media.url
			});
		}
		
		return (
			<div { ...useBlockProps()}  >
				<InspectorControls >
					<PanelBody>
						<TextControl
							label="Add Section Title Here"
							value={ heroTitle }
							onChange={(newval) => setAttributes({ heroTitle: newval })}
						/>
						<TextControl
							label="Add Section Title Caption Here"
							value={ heroDes }
							onChange={(newval) => setAttributes({ heroDes: newval })}
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
				</InspectorControls>
				<div className="Hero-outter img-text-section">
					<div className="Hero-1section">
						<div className="col-2">
							<div className="col-inner-2 txt-1">
								<h2>{ heroTitle }</h2>
								<p>{ heroDes }</p>
							</div>
							<div className="col-inner-2 img-1">
								{attributes.mediaId != 0 && 
									<img src={attributes.mediaUrl} alt={ heroTitle } />
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
	save : (props) => { 
		const { attributes } = props;
		const { heroTitle, heroDes} = attributes;

    	return (
			<div className="theme-section-full alignfull">
				<div className="Hero-outter img-text-section">
						<div className="Hero-1section">
							<div className="col-2">
								<div className="col-inner-2 txt-1">
									<h2>{ heroTitle }</h2>
									<p>{ heroDes }</p>
								</div>
								<div className="col-inner-2 img-1">
									{attributes.mediaId != 0 && 
										<img src={attributes.mediaUrl} alt={ heroTitle } />
									}
								</div>
							</div>
						</div>
				</div>
			</div>
		);
	},
} );