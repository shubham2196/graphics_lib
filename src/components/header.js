import React from 'react';
import './thumbnail.css'
import SEARCHLOGO from '../assets/search.png';
import {getSiteDirectories} from '../utils/ajaxUtils';
 class Header extends React.Component {
   siteMap=()=>{
     let siteMap=window.oldPath.substr(window.oldPath.indexOf("=")+1).split("/");
     console.log(siteMap,'siteMap')
     let labels=siteMap.map((label)=>{
        return <span>|<span onClick={()=>{this.siteMapClicked(label)}} className="link"> {label}</span></span>
     })
     return !siteMap.includes("http:")&&labels;
   }
   siteMapClicked=(label)=>{
     let url=window.oldPath.substr(0,window.oldPath.indexOf(label)+label.length);
     getSiteDirectories(url,this.props.callback)
   }
  render(){
    return (
        <header id="app-header" style={{display:'flex',paddingTop:'10px'}}>
        <div style={{width: '70px',
        height: '60px',
        marginRight:'05px',
        backgroundColor: '#efefef'}}></div>
      <div style={{
    width: '100%',
    height: '60px',
    backgroundColor: '#efefef',
    display: 'flex',
alignItems: 'center',
color: 'gray',
fontWeight: 'bold',
paddingLeft: '30px',
}}>
<label>Mitr Graphics Library {this.siteMap()}</label>
<div style={{    position: 'absolute',
    right: '130px'}}>
<input style={{marginRight: '10px',
    width: '250px',
    height: '35px',
    borderRadius: '10px',
    border: '0'}} type="text"/>
<img alt="SEARCHLOGO" src={SEARCHLOGO}/>
</div>

      </div>
        </header>
    );
  }

}
export default Header;
