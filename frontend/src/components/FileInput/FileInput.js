import React from 'react';
import { connect } from 'react-redux';
import { uploadCsv, toggleGrayscale } from '../../actions/imageActions';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    const { grayscale, uploadCsv } = this.props;

    event.preventDefault();
    let file = this.fileInput.current.files[0];

    if (file) {
      let payload = new FormData();//{file_name: file.name, content: file}
      payload.append('file', file);
      uploadCsv(payload, grayscale);
    } else {
      alert('there is no file submitted!');
    }
  }

  render() {
    const { grayscale, toggleGrayscale } = this.props;
    
    return (
      <div className='row'>
        <div className='col-12 text-center'>
          <form onSubmit={this.handleSubmit}>
            <label>Upload file: <input type="file" ref={this.fileInput} /></label>

            <label>Grayscale:
              <input
                name='grayscale'
                type='checkbox'
                checked={grayscale}
                className='form-check-input'
                onChange={() => toggleGrayscale(grayscale)}
              />
            </label>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { images, batchId, page, grayscale } = state.imageState;

  return {
    images: images,
    batchId: batchId,
    page: page,
    grayscale: grayscale
  }
}

export default connect(mapStateToProps, { uploadCsv, toggleGrayscale })(FileInput)