import React,{Component} from 'react';
import './ImageUpload.scss';

class ImageUpload extends Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
    _handleSubmit(e) {
      e.preventDefault();
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} alt="img" />);
      } else {
        imagePreview = (<div className="previewText">Preview</div>);
      }
  
      return (
        <div className="row no-gutters previewComponent">
          <div className=" col-md-2 imgPreview px-0">
            {imagePreview}
          </div>
          <form onSubmit={(e)=>this._handleSubmit(e)} className="col-sm-10">
            <input className="col-9" type="file" onChange={(e)=>this._handleImageChange(e)} />
            <button className="col-3 btn btn-success" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload</button>
          </form>
        </div>
      )
    }
  }

  export default ImageUpload