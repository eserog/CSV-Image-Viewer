import React from 'react';
import { connect } from 'react-redux';

import { fetchImages } from '../../actions/imageActions';
import './LoadMoreButton.css';

class LoadMoreButton extends React.Component {
  render() {
    const { images, fetchImages, page, batchId, grayscale, dataInNextSet } = this.props;
    return (
      <div className="row load-more-container">
        <div className="col-12">
          { dataInNextSet ? <button className='btn btn-primary' type='submit' onClick={() => fetchImages(batchId, page + 1, grayscale)}>Load More Images</button> : null }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { images, batchId, page, grayscale, dataInNextSet } = state.imageState;

  return {
    images: images,
    batchId: batchId,
    page: page,
    grayscale: grayscale,
    dataInNextSet: dataInNextSet
  }
}

export default connect(mapStateToProps, { fetchImages })(LoadMoreButton)