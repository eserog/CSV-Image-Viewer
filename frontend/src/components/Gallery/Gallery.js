import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  renderImages() {
    if (!this.props.images || this.props.images.length === 0) {
      return <div className="no-images">There are no images to display!</div>
    } else {
      return (
        <div className="row gallery-container">
          { this.props.images.map((url, key) => {
            return (
              <div className="picture-container col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <img className="picture" src={url} key={key} />
              </div>
            )
          }) }
        </div>
      )
    }
  }

  render() {
    return (
      <div className="gallery">
        <hr />
        { this.renderImages() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { images, batchId, page } = state.imageState;
  return {
    images: images,
    batchId: batchId,
    page: page
  }
}

export default connect(mapStateToProps)(Gallery);
