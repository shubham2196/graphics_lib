import React from 'react';
import { Button, Modal, ModalBody } from "reactstrap";

const formats=['jpg','JPG','jpeg','JPEG','png','PNG','gif','GIF','avi','AVI','mp4','MP4','wmv','WMV']

class ModalDialog extends React.Component{

getExtention=(element)=>{
  let fileExt=element&&element.src.substr(element.src.lastIndexOf('.')+1)
  let matchedExt="jpg";
  formats.map((ext)=>{
    if(ext===fileExt) matchedExt = ext;
  });
return matchedExt;
}
renderElement=(ext)=>{
  const {element}=this.props;
let videoTag=element&&<video controls style={{width:'100%'}} className="video-container video-container-overlay" autoPlay="true" loop="" muted="" data-reactid=".0.1.0.0">
<source type={'video/'+ext} data-reactid=".0.1.0.0.0" src={element.src}/>
</video>;

let imgTag=element&&<img
    src={element.thumbnail}
    style={{ width: "100%", marginTop: "12px" }}
  />

  return ext==='jpg'?imgTag:videoTag;
}
  render(){
    const {element}=this.props;
    let ext=this.getExtention(element);
    return(
      <Modal
        fade="true"
        size="lg"
        isOpen={this.props.isOpen}
        toggle={this.toggle}
      >
        <ModalBody>
          <Button color="danger" onClick={this.props.toggal}>
            X
          </Button>
        {this.renderElement(ext)}
        </ModalBody>
      </Modal>
    )
  }
}

export default ModalDialog;
