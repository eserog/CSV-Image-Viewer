import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import FileInput from '../FileInput/FileInput';
import Gallery from '../Gallery/Gallery';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="page-header text-center">Image Uploader/Viewer</h1>
            </div>
          </div>
          <FileInput />
          <Gallery />

          <LoadMoreButton />
        </div>
      </Provider>
    );
  }
}

export default App;
