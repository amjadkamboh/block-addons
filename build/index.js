/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Value-stack-layout/Value-stack-layout.js":
/*!******************************************************!*\
  !*** ./src/Value-stack-layout/Value-stack-layout.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpm-captain-block/value-block-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Value Stack Layout'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Value Stack Layout')],
  attributes: {
    Value1: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    Value2: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    Value3: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      Value1,
      Value2,
      Value3
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Value Stack Layout 1",
      value: Value1,
      onChange: newval => setAttributes({
        Value1: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Value Stack Layout 2",
      value: Value2,
      onChange: newval => setAttributes({
        Value2: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Value Stack Layout 3",
      value: Value3,
      onChange: newval => setAttributes({
        Value3: newval
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Value-1section al"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, Value1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, Value2), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, Value3))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      Value1,
      Value2,
      Value3
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "theme-section-full alignfull full-bg-color"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Value-1section al Hero-outter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, Value1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, Value2), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, Value3))));
  }
});

/***/ }),

/***/ "./src/explanatory-paragraph/explanatory-paragraph.js":
/*!************************************************************!*\
  !*** ./src/explanatory-paragraph/explanatory-paragraph.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpm-captain-block/explanatory-block-list', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Explanatory Paragraph'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Explanatory Paragraph')],
  attributes: {
    heroTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    heroDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    heroCta: {
      type: 'string',
      default: 'Schedule a Call'
    },
    heroLink: {
      type: 'string',
      default: ''
    },
    heroCtaLink: {
      type: 'string',
      default: ''
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroTitle,
      heroDes,
      heroCta,
      heroLink
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Here",
      value: heroTitle,
      onChange: newval => setAttributes({
        heroTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Caption Here",
      value: heroDes,
      onChange: newval => setAttributes({
        heroDes: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Text",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Link",
      value: heroLink,
      onChange: newval => setAttributes({
        heroLink: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrl
        }));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image'))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 txt-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, heroTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, heroDes), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 img-1"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: heroTitle
    }))))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      heroTitle,
      heroDes,
      heroCta,
      heroLink
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "theme-section-full alignfull full-bg-color"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 txt-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, heroTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, heroDes), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 img-1"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: heroTitle
    }))))));
  }
});

/***/ }),

/***/ "./src/faq-block/edit.js":
/*!*******************************!*\
  !*** ./src/faq-block/edit.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab.js */ "./src/faq-block/tab.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */






const {
  InspectorControls,
  useSetting,
  RichText
} = wp.blockEditor;

const ALLOWED_BLOCKS = ['wpm-captain-block/tab'];

//import './editor.scss';

function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    tabLabelsArray,
    updateChild,
    sideTabLayout,
    blockTitle,
    blockText,
    content
  } = attributes;
  const onChangeTabLabel = toggle => {
    setAttributes({
      sideTabLayout: toggle
    });
  };
  const onChangeTitle = newTitle => {
    setAttributes({
      blockTitle: newTitle
    });
  };
  //  const onChangeText = newText => {
  // 	 setAttributes({ content: newText});
  //  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "theme-section-full alignfull"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "Hero-outter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "Hero-1section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "FAQ Section Block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: props.className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    className: "title-block",
    value: blockTitle,
    onChange: onChangeTitle,
    placeholder: "FAQ Section Title",
    type: "text"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Add FAQs"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender
  })))));
}

/***/ }),

/***/ "./src/faq-block/index.js":
/*!********************************!*\
  !*** ./src/faq-block/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/faq-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/faq-block/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
* Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
* All files containing `style` keyword are bundled together. The code used
* gets applied both to the front of your site and to the editor.
*
* @see https://www.npmjs.com/package/@wordpress/scripts#using-css
*/
//  import './style.scss';
//  import './style.css';

/**
* Internal dependencies
*/



/**
* Every block starts by registering a new block type definition.
*
* @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
*/
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('wpm-captain-block/tabs', {
  title: 'FAQ Section',
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: 'FAQ',
  attributes: {
    blockTitle: {
      type: 'string',
      default: ''
    },
    content: {
      type: 'string',
      source: 'html',
      default: ''
    }
  },
  /**
  * @see ./edit.js
  */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
  * @see ./save.js
  */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/faq-block/save.js":
/*!*******************************!*\
  !*** ./src/faq-block/save.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


const {
  RawHTML
} = wp.element;
const {
  RichText
} = wp.blockEditor;

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save(props) {
  const {
    attributes: {
      sideTabLayout,
      blockTitle,
      content
    }
  } = props;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  if (sideTabLayout) {
    blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'side-tab-layout'
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-outter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, blockTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))));
}

/***/ }),

/***/ "./src/faq-block/tab.js":
/*!******************************!*\
  !*** ./src/faq-block/tab.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);



const {
  __
} = wp.i18n; // Import __() from wp.i18n
const {
  registerBlockType
} = wp.blocks; // Import registerBlockType() from wp.blocks



/**********************************************************
 * Registering Child Innerblock for the Tabbed Content block
 **********************************************************/
registerBlockType('wpm-captain-block/tab', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('FAQ Single Section'),
  // Block title.
  icon: 'welcome-add-page',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  parent: ['create-block/tabs'],
  category: 'design',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  supports: {
    color: true
  },
  attributes: {
    tabLabel: {
      type: 'string',
      default: ''
    },
    blockIndex: {
      type: 'number',
      default: ''
    },
    tabTagline: {
      type: 'string',
      default: ''
    }
  },
  keywords: [__('tab')],
  /**
   * 
   * Edit function for Child Slide Block
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Component.
   */
  edit: props => {
    const {
      attributes: {
        tabLabel,
        blockIndex
      },
      setAttributes
    } = props;

    // const onChangeTabLabel = newTabLabel => {
    // 	setAttributes({ tabLabel: newTabLabel});
    // 	setAttributes({ blockIndex: getBlockIndex});
    // 	wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( parentBlockID, { updateChild: true } );
    // };

    const onChangeTabLabel = newTitle => {
      setAttributes({
        tabLabel: newTitle
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: props.className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "FAQ Single Heading"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      className: "tab-label_input",
      value: tabLabel,
      onChange: onChangeTabLabel,
      placeholder: "FAQ Single Title",
      type: "text"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "FAQ Single Content"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, null));
  },
  /**
   *
   * Save function for Child Slide Block
   * 
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Frontend HTML.
   */
  save: props => {
    const {
      attributes
    } = props;
    const {
      tabLabel
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tab-panel-wrapper",
      role: "tabpanel",
      tabindex: "0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tab-title"
    }, tabLabel), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tab-panel",
      role: "tabpanel",
      tabindex: "0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/guide-section/guide-section.js":
/*!********************************************!*\
  !*** ./src/guide-section/guide-section.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpm-captain-block/guide-block-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Guide Section'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Guide Section')],
  attributes: {
    RichTextTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    TextDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
      default: 'Schedule a Call'
    },
    heroLink: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      RichTextTitle,
      TextDes,
      heroCta,
      heroLink
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const removeMedia1 = () => {
      props.setAttributes({
        mediaIdOne: 0,
        mediaUrlOne: ''
      });
    };
    const removeMedia2 = () => {
      props.setAttributes({
        mediaIdTwo: 0,
        mediaUrlTwo: ''
      });
    };
    const removeMedia3 = () => {
      props.setAttributes({
        mediaIdThree: 0,
        mediaUrlThree: ''
      });
    };
    const removeMedia4 = () => {
      props.setAttributes({
        mediaIdFour: 0,
        mediaUrlFour: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    const onSelectMedia1 = mediaOne => {
      props.setAttributes({
        mediaIdOne: mediaOne.id,
        mediaUrlOne: mediaOne.url
      });
    };
    const onSelectMedia2 = mediaTwo => {
      props.setAttributes({
        mediaIdTwo: mediaTwo.id,
        mediaUrlTwo: mediaTwo.url
      });
    };
    const onSelectMedia3 = mediaThree => {
      props.setAttributes({
        mediaIdThree: mediaThree.id,
        mediaUrlThree: mediaThree.url
      });
    };
    const onSelectMedia4 = mediaFour => {
      props.setAttributes({
        mediaIdFour: mediaFour.id,
        mediaUrlFour: mediaFour.url
      });
    };
    console.log(attributes.mediaIdThree);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Value Proposition"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Here",
      value: RichTextTitle,
      onChange: newval => setAttributes({
        RichTextTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Caption Here",
      value: TextDes,
      onChange: newval => setAttributes({
        TextDes: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrl
        }));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia1,
      value: attributes.mediaIdOne,
      allowedTypes: ['image'],
      render: _ref3 => {
        let {
          open
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaIdOne == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaIdOne == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrlOne
        }));
      }
    })), attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaIdOne,
      onSelect: onSelectMedia1,
      allowedTypes: ['image'],
      render: _ref4 => {
        let {
          open
        } = _ref4;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia1,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia2,
      value: attributes.mediaIdTwo,
      allowedTypes: ['image'],
      render: _ref5 => {
        let {
          open
        } = _ref5;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaIdTwo == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaIdTwo == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrlTwo
        }));
      }
    })), attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaIdTwo,
      onSelect: onSelectMedia2,
      allowedTypes: ['image'],
      render: _ref6 => {
        let {
          open
        } = _ref6;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia2,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia3,
      value: attributes.mediaIdThree,
      allowedTypes: ['image'],
      render: _ref7 => {
        let {
          open
        } = _ref7;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaIdThree == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaIdThree == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrlThree
        }));
      }
    })), attributes.mediaIdThree != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaIdThree,
      onSelect: onSelectMedia3,
      allowedTypes: ['image'],
      render: _ref8 => {
        let {
          open
        } = _ref8;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaIdThree != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia3,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia4,
      value: attributes.mediaIdFour,
      allowedTypes: ['image'],
      render: _ref9 => {
        let {
          open
        } = _ref9;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaIdFour == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaIdFour == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrlFour
        }));
      }
    })), attributes.mediaIdFour != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaIdFour,
      onSelect: onSelectMedia4,
      allowedTypes: ['image'],
      render: _ref10 => {
        let {
          open
        } = _ref10;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaIdFour != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia4,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Text",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Link",
      value: heroLink,
      onChange: newval => setAttributes({
        heroLink: newval
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, RichTextTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-5"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: RichTextTitle
    }), attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlOne,
      alt: RichTextTitle
    }), attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlTwo,
      alt: RichTextTitle
    }), attributes.mediaIdThree != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlThree,
      alt: RichTextTitle
    }), attributes.mediaIdFour != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlFour,
      alt: RichTextTitle
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      RichTextTitle,
      TextDes,
      heroCta,
      heroLink
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "theme-section-full alignfull"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, RichTextTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-5"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: RichTextTitle
    }), attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlOne,
      alt: RichTextTitle
    }), attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlTwo,
      alt: RichTextTitle
    }), attributes.mediaIdThree != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlThree,
      alt: RichTextTitle
    }), attributes.mediaIdFour != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlFour,
      alt: RichTextTitle
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta)))));
  }
});

/***/ }),

/***/ "./src/header-section/header-section.js":
/*!**********************************************!*\
  !*** ./src/header-section/header-section.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpm-captain-block/hero-block-list', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header Section'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header Section')],
  attributes: {
    heroTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    heroDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    heroCta: {
      type: 'string',
      default: 'Schedule a Call'
    },
    heroLink: {
      type: 'string',
      default: ''
    },
    heroCtaLink: {
      type: 'string',
      default: ''
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroTitle,
      heroDes,
      heroCta,
      heroLink
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Here",
      value: heroTitle,
      onChange: newval => setAttributes({
        heroTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Caption Here",
      value: heroDes,
      onChange: newval => setAttributes({
        heroDes: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Text",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Link",
      value: heroLink,
      onChange: newval => setAttributes({
        heroLink: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrl
        }));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image'))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 txt-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, heroTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, heroDes), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 img-1"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: heroTitle
    }))))));
  },
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _header_section_header_section_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header-section/header-section.js */ "./src/header-section/header-section.js");
/* harmony import */ var _Value_stack_layout_Value_stack_layout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Value-stack-layout/Value-stack-layout.js */ "./src/Value-stack-layout/Value-stack-layout.js");
/* harmony import */ var _stakes_section_stakes_section_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stakes-section/stakes-section.js */ "./src/stakes-section/stakes-section.js");
/* harmony import */ var _value_proposition_value_proposition_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./value-proposition/value-proposition.js */ "./src/value-proposition/value-proposition.js");
/* harmony import */ var _guide_section_guide_section_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guide-section/guide-section.js */ "./src/guide-section/guide-section.js");
/* harmony import */ var _price_choices_price_choices_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./price-choices/price-choices.js */ "./src/price-choices/price-choices.js");
/* harmony import */ var _plan_section_plan_section_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plan-section/plan-section.js */ "./src/plan-section/plan-section.js");
/* harmony import */ var _explanatory_paragraph_explanatory_paragraph_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./explanatory-paragraph/explanatory-paragraph.js */ "./src/explanatory-paragraph/explanatory-paragraph.js");
/* harmony import */ var _lead_generator_section_lead_generator_section_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lead-generator-section/lead-generator-section.js */ "./src/lead-generator-section/lead-generator-section.js");
/* harmony import */ var _faq_block_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./faq-block/index.js */ "./src/faq-block/index.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */










const ALLOWED_MEDIA_TYPES = ['image'];

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */











/***/ }),

/***/ "./src/lead-generator-section/lead-generator-section.js":
/*!**************************************************************!*\
  !*** ./src/lead-generator-section/lead-generator-section.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpm-captain-block/lead-block-list', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lead Generator Section'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lead Generator Section')],
  attributes: {
    heroTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    heroDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    heroCta: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroTitle,
      heroDes,
      heroCta
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Here",
      value: heroTitle,
      onChange: newval => setAttributes({
        heroTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Caption Here",
      value: heroDes,
      onChange: newval => setAttributes({
        heroDes: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Form ShortCode",
      help: "Create Form and add shortcode of form here.",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, heroDes), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, heroTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "form-lead-section"
    }, heroCta))))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      heroTitle,
      heroDes,
      heroCta
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "theme-section-full alignfull"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, heroDes), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, heroTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "form-lead-section"
    }, heroCta))))));
  }
});

/***/ }),

/***/ "./src/plan-section/plan-section.js":
/*!******************************************!*\
  !*** ./src/plan-section/plan-section.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpm-captain-block/plan-block-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Plan Section'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Plan Section')],
  attributes: {
    headingTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    maintDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    RichTextTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    TextDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    RichTextTitle1: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    TextDes1: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    RichTextTitle2: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    TextDes2: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
      default: 'Schedule a Call'
    },
    heroLink: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
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
      heroLink
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const removeMedia1 = () => {
      props.setAttributes({
        mediaIdOne: 0,
        mediaUrlOne: ''
      });
    };
    const removeMedia2 = () => {
      props.setAttributes({
        mediaIdTwo: 0,
        mediaUrlTwo: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    const onSelectMedia1 = mediaOne => {
      props.setAttributes({
        mediaIdOne: mediaOne.id,
        mediaUrlOne: mediaOne.url
      });
    };
    const onSelectMedia2 = mediaTwo => {
      props.setAttributes({
        mediaIdTwo: mediaTwo.id,
        mediaUrlTwo: mediaTwo.url
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Here",
      value: headingTitle,
      onChange: newval => setAttributes({
        headingTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Caption Here",
      value: maintDes,
      onChange: newval => setAttributes({
        maintDes: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Value Proposition"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Title Here",
      value: RichTextTitle,
      onChange: newval => setAttributes({
        RichTextTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Caption Here",
      value: TextDes,
      onChange: newval => setAttributes({
        TextDes: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrl
        }));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Value Proposition 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Title Here",
      value: RichTextTitle1,
      onChange: newval => setAttributes({
        RichTextTitle1: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Caption Here",
      value: TextDes1,
      onChange: newval => setAttributes({
        TextDes1: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia1,
      value: attributes.mediaIdOne,
      allowedTypes: ['image'],
      render: _ref3 => {
        let {
          open
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaIdOne == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaIdOne == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrlOne
        }));
      }
    })), attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaIdOne,
      onSelect: onSelectMedia1,
      allowedTypes: ['image'],
      render: _ref4 => {
        let {
          open
        } = _ref4;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia1,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Value Proposition 3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Title Here",
      value: RichTextTitle2,
      onChange: newval => setAttributes({
        RichTextTitle2: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Caption Here",
      value: TextDes2,
      onChange: newval => setAttributes({
        TextDes2: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia2,
      value: attributes.mediaIdTwo,
      allowedTypes: ['image'],
      render: _ref5 => {
        let {
          open
        } = _ref5;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaIdTwo == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaIdTwo == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrlTwo
        }));
      }
    })), attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaIdTwo,
      onSelect: onSelectMedia2,
      allowedTypes: ['image'],
      render: _ref6 => {
        let {
          open
        } = _ref6;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia2,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Text",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Link",
      value: heroLink,
      onChange: newval => setAttributes({
        heroLink: newval
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, headingTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, maintDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-35-70"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: RichTextTitle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2-cont"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-35-70"
    }, attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlOne,
      alt: RichTextTitle1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2-cont"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes1))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-35-70"
    }, attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlTwo,
      alt: RichTextTitle2
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2-cont"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle2), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes2)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta))));
  },
  save: props => {
    const {
      attributes
    } = props;
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
      heroLink
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "theme-section-full alignfull"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, headingTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, maintDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-35-70"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: RichTextTitle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2-cont"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-35-70"
    }, attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlOne,
      alt: RichTextTitle1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2-cont"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes1))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-35-70"
    }, attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlTwo,
      alt: RichTextTitle2
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2-cont"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle2), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes2)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta)))));
  }
});

/***/ }),

/***/ "./src/price-choices/price-choices.js":
/*!********************************************!*\
  !*** ./src/price-choices/price-choices.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpm-captain-block/price-block-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price Choices'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Price Choices')],
  attributes: {
    headingTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    maintDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    packgesRichTextTitle: {
      type: 'string',
      default: 'Small/Medium/Large'
    },
    RichTextTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    TextDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    packgesRichTextTitle1: {
      type: 'string',
      default: 'Small/Medium/Large'
    },
    RichTextTitle1: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    TextDes1: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    packgesRichTextTitle2: {
      type: 'string',
      default: 'Small/Medium/Large'
    },
    RichTextTitle2: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    TextDes2: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    heroCta: {
      type: 'string',
      default: 'Schedule a Call'
    },
    heroLink: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Here",
      value: headingTitle,
      onChange: newval => setAttributes({
        headingTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Caption Here",
      value: maintDes,
      onChange: newval => setAttributes({
        maintDes: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Package One"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Package type",
      value: packgesRichTextTitle,
      onChange: newval => setAttributes({
        packgesRichTextTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Package Title Here",
      value: RichTextTitle,
      onChange: newval => setAttributes({
        RichTextTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Package Caption Here",
      value: TextDes,
      onChange: newval => setAttributes({
        TextDes: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Package Two"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Package type",
      value: packgesRichTextTitle1,
      onChange: newval => setAttributes({
        packgesRichTextTitle1: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Package Title Here",
      value: RichTextTitle1,
      onChange: newval => setAttributes({
        RichTextTitle1: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Package Caption Here",
      value: TextDes1,
      onChange: newval => setAttributes({
        TextDes1: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Package Three"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Package type",
      value: packgesRichTextTitle2,
      onChange: newval => setAttributes({
        packgesRichTextTitle2: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Package Title Here",
      value: RichTextTitle2,
      onChange: newval => setAttributes({
        RichTextTitle2: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Package Caption Here",
      value: TextDes2,
      onChange: newval => setAttributes({
        TextDes2: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Text",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Link",
      value: heroLink,
      onChange: newval => setAttributes({
        heroLink: newval
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, headingTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, maintDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "Package-t-small"
    }, packgesRichTextTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "Package-t-small"
    }, packgesRichTextTitle1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes1)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "Package-t-small"
    }, packgesRichTextTitle2), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle2), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes2))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta))));
  },
  save: props => {
    const {
      attributes
    } = props;
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "theme-section-full alignfull full-bg-color"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, headingTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, maintDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "Package-t-small"
    }, packgesRichTextTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "Package-t-small"
    }, packgesRichTextTitle1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes1)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "Package-t-small"
    }, packgesRichTextTitle2), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle2), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes2))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta)))));
  }
});

/***/ }),

/***/ "./src/stakes-section/stakes-section.js":
/*!**********************************************!*\
  !*** ./src/stakes-section/stakes-section.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpm-captain-block/stakes-block-list', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stakes Section'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stakes Section')],
  attributes: {
    heroTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    heroDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      heroTitle,
      heroDes
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Here",
      value: heroTitle,
      onChange: newval => setAttributes({
        heroTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Caption Here",
      value: heroDes,
      onChange: newval => setAttributes({
        heroDes: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrl
        }));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image'))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter img-text-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 txt-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, heroTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, heroDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 img-1"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: heroTitle
    }))))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      heroTitle,
      heroDes
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "theme-section-full alignfull"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter img-text-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 txt-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, heroTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, heroDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-2 img-1"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: heroTitle
    }))))));
  }
});

/***/ }),

/***/ "./src/value-proposition/value-proposition.js":
/*!****************************************************!*\
  !*** ./src/value-proposition/value-proposition.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wpm-captain-block/proposition-block-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Value Proposition'),
  // Block title.
  icon: 'superhero',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Value Proposition')],
  attributes: {
    headingTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    maintDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    RichTextTitle: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    TextDes: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    RichTextTitle1: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    TextDes1: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    RichTextTitle2: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet'
    },
    TextDes2: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
      default: 'Schedule a Call'
    },
    heroLink: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
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
      heroLink
    } = attributes;
    const removeMedia = () => {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };
    const removeMedia1 = () => {
      props.setAttributes({
        mediaIdOne: 0,
        mediaUrlOne: ''
      });
    };
    const removeMedia2 = () => {
      props.setAttributes({
        mediaIdTwo: 0,
        mediaUrlTwo: ''
      });
    };
    const onSelectMedia = media => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };
    const onSelectMedia1 = mediaOne => {
      props.setAttributes({
        mediaIdOne: mediaOne.id,
        mediaUrlOne: mediaOne.url
      });
    };
    const onSelectMedia2 = mediaTwo => {
      props.setAttributes({
        mediaIdTwo: mediaTwo.id,
        mediaUrlTwo: mediaTwo.url
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Title Here",
      value: headingTitle,
      onChange: newval => setAttributes({
        headingTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Section Caption Here",
      value: maintDes,
      onChange: newval => setAttributes({
        maintDes: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Value Proposition"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Title Here",
      value: RichTextTitle,
      onChange: newval => setAttributes({
        RichTextTitle: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Caption Here",
      value: TextDes,
      onChange: newval => setAttributes({
        TextDes: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mediaId,
      allowedTypes: ['image'],
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrl
        }));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ['image'],
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Value Proposition 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Title Here",
      value: RichTextTitle1,
      onChange: newval => setAttributes({
        RichTextTitle1: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Caption Here",
      value: TextDes1,
      onChange: newval => setAttributes({
        TextDes1: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia1,
      value: attributes.mediaIdOne,
      allowedTypes: ['image'],
      render: _ref3 => {
        let {
          open
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaIdOne == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaIdOne == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrlOne
        }));
      }
    })), attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaIdOne,
      onSelect: onSelectMedia1,
      allowedTypes: ['image'],
      render: _ref4 => {
        let {
          open
        } = _ref4;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia1,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Value Proposition 3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Title Here",
      value: RichTextTitle2,
      onChange: newval => setAttributes({
        RichTextTitle2: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add Proposition Caption Here",
      value: TextDes2,
      onChange: newval => setAttributes({
        TextDes2: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      onSelect: onSelectMedia2,
      value: attributes.mediaIdTwo,
      allowedTypes: ['image'],
      render: _ref5 => {
        let {
          open
        } = _ref5;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          className: attributes.mediaIdTwo == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mediaIdTwo == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose an image'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.mediaUrlTwo
        }));
      }
    })), attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'),
      value: attributes.mediaIdTwo,
      onSelect: onSelectMedia2,
      allowedTypes: ['image'],
      render: _ref6 => {
        let {
          open
        } = _ref6;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace image'));
      }
    })), attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: removeMedia2,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Text",
      value: heroCta,
      onChange: newval => setAttributes({
        heroCta: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Add button Link",
      value: heroLink,
      onChange: newval => setAttributes({
        heroLink: newval
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, headingTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, maintDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: RichTextTitle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlOne,
      alt: RichTextTitle1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes1)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlTwo,
      alt: RichTextTitle2
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle2), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes2))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta))));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      headingTitle,
      maintDes,
      heroCta,
      heroLink,
      RichTextTitle,
      TextDes,
      RichTextTitle1,
      TextDes1,
      RichTextTitle2,
      TextDes2
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "theme-section-full alignfull full-bg-color"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-outter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Hero-1section img-text-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, headingTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, maintDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, attributes.mediaId != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: RichTextTitle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, attributes.mediaIdOne != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlOne,
      alt: RichTextTitle1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes1)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-inner-3"
    }, attributes.mediaIdTwo != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.mediaUrlTwo,
      alt: RichTextTitle2
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, RichTextTitle2), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, TextDes2))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: heroLink
    }, heroCta)))));
  }
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcaptain_theme_block"] = self["webpackChunkcaptain_theme_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map