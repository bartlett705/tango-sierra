// standard image loader recipe from buildwithreact; not modified for TypeScript/ES6

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const Image: React.ClassicComponentClass<{}> = React.createClass({
  getInitialState: function() {
    return {
      loaded: false,
    };
  },

  onImageLoad: function() {
    if (this.isMounted()) {
      this.setState({ loaded: true });
    }
  },

  componentDidMount: function() {
    const imgTag = ReactDOM.findDOMNode(this.refs.img);
    const imgSrc = imgTag.getAttribute('src');
    // You may want to rename the component if the <Image> definition
    // overrides window.Image
    const img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  },

  render: function() {
    const { className, ...props } = this.props;
    const rootClassName = this.state.loaded ?
      'image image-loaded' :
      'image';
    return (
      <img ref="img" {...props} className={rootClassName + ' ' + className} />
    );
  },
});
