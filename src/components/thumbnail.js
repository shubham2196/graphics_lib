import React from 'react';
import './thumbnail.css'
import DOWNLOADICON from '../assets/download.png';
import {downloadFile} from '../utils/fileUtils';

 class Thubmnail extends React.Component {


  render(){
    const {element,index,openModal,toggal}=this.props;
    const name=element.file.substr(element.file.lastIndexOf("/")+1);
    return (
      <div>
      <div onClick={()=>{openModal(element.thumbnail);toggal()}} data-toggle="modal" data-target="#largeModal" id={"thumbnail"+index} className="thumbnail">
        <img className="thumbicon" src={element.thumbnail}/>
        <div className="downloadicon" onClick={(e)=>{
          e.stopPropagation();
          downloadFile(element.file,name,()=>{console.log('ssss')})}}><img src={DOWNLOADICON}/></div>
            </div>
        <div className="cover"></div>
        <a href={element.file}>download</a>
      </div>

    );
  }

}
export default Thubmnail;
