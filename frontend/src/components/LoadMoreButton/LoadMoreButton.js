import React from 'react';
import { connect } from 'react-redux';

import { fetchImages } from '../../actions/imageActions';
import './LoadMoreButton.css';

class LoadMoreButton extends React.Component {
  render() {
    const { images, fetchImages, page, batchId, grayscale, dataInNextSet, width, height } = this.props;
    return (
      <div className="row load-more-container">
        <div className="col-12">
          { dataInNextSet ? <button className='btn btn-primary' type='submit' onClick={() => fetchImages(batchId, {page: page + 1, grayscale: grayscale })}>Load More Images</button> : null }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { images, batchId, page, grayscale, dataInNextSet, width, height } = state.imageState;

  return {
    images: images,
    batchId: batchId,
    page: page,
    grayscale: grayscale,
    dataInNextSet: dataInNextSet,
    width: width,
    height: height
  }
}

export default connect(mapStateToProps, { fetchImages })(LoadMoreButton)