import React from 'react';
import './thumbnail.css'
import DOWNLOADICON from '../assets/download.png';
import {downloadFile} from '../utils/ajaxUtils';

 class Thubmnail extends React.Component {


  render(){
    const {element,index,openModal,toggal}=this.props;
    return (
      <div>
      <button tabIndex="0" onClick={()=>{openModal(element.thumbnail);toggal()}} data-toggle="modal" data-target="#largeModal" id={"thumbnail"+index} className="thumbnail">
        <img alt={element.caption} className="thumbicon" src={element.thumbnail}/>
        <button className="downloadicon" onClick={(e)=>{
          e.stopPropagation();
          downloadFile(element.src)

        }}><img alt="downloadicon" src={DOWNLOADICON}/></button>
        <div className="cover"></div>
            </button>

      </div>

    );
  }

}
export default Thubmnail;
