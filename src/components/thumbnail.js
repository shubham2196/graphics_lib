import React from 'react';
import './thumbnail.css'
import {downloadFile} from '../utils/ajaxUtils';

 class Thubmnail extends React.Component {


  render(){
    const {element,index,openModal,toggal}=this.props;
    return (
      <div style={{width: "20%",
    height: "100%"}}>
      <button tabIndex="0" onClick={()=>{openModal(element.thumbnail);toggal()}} data-toggle="modal" data-target="#largeModal" id={"thumbnail"+index} className="thumbnail">
        <img alt={element.caption} className="thumbicon" src={element.thumbnail}/>
        <button className="downloadicon" onClick={(e)=>{
          e.stopPropagation();
          downloadFile(element.src)

        }}><div id="downloadicon"/></button>
        <div className="cover"></div>
            </button>

      </div>

    );
  }

}
export default Thubmnail;
