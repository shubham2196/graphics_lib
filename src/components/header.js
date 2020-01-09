import React from 'react';
import './thumbnail.css'
import SEARCHLOGO from '../assets/search.png';
import {getSiteDirectories,api,getSearchResult} from '../utils/ajaxUtils';
 class Header extends React.Component {
   search=(e)=>{
     const {target:{value}}=e;
     getSearchResult(value,this.props.callback)
   }
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
<label><span onClick={()=>{this.siteMapClicked(api.DIRECTORY)}} className="link"> Mitr Graphics Library</span> {this.siteMap()}</label>
<div style={{    position: 'absolute',
    right: '130px'}}>
<input placeholder="Search..." onKeyUp={this.search} style={{paddingLeft:'10px',marginRight: '10px',
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
