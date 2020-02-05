import React from 'react';
import { connect } from 'react-redux';
import { uploadCsv, toggleGrayscale, updateHeight, updateWidth } from '../../actions/imageActions';

import './FileInput.css';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    const { grayscale, uploadCsv, width, height } = this.props;

    event.preventDefault();
    let file = this.fileInput.current.files[0];

    if (file) {
      let formData = new FormData();
      formData.append('file', file);
      uploadCsv( formData, { grayscale: grayscale, width: width, height: height });
    } else {
      alert('there is no file submitted!');
    }
  }

  render() {
    const { grayscale, toggleGrayscale, updateHeight, updateWidth } = this.props;
    
    return (
      <div className='row'>
        <div className='col-12 text-center'>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Upload file: <input type="file" ref={this.fileInput} /></label>
            </div>

            <label className='dimension-label'>Width: <input type='number' onInput={(e) => updateWidth(e.target.value)} /></label>
            <label className='dimension-label'>Height: <input type='number' onInput={(e) => updateHeight(e.target.value)} /></label>

            <div className="grayscale">
              <span>Grayscale: </span>
              <input
                name='grayscale'
                type='checkbox'
                checked={grayscale}
                className='grayscale-checkbox'
                onChange={() => toggleGrayscale(grayscale)}
              />
              </div>
            <button className='submit-btn' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { images, batchId, page, grayscale, width, height } = state.imageState;

  return {
    images: images,
    batchId: batchId,
    page: page,
    grayscale: grayscale,
    width: width,
    height: height
  }
}

export default connect(mapStateToProps, { uploadCsv, toggleGrayscale, updateWidth, updateHeight })(FileInput)