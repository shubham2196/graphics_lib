import React from 'react';
import './thumbnail.css'
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
        <header id="app-header" style={{display:'flex',paddingTop:'10px',width:"100%",height:"100%"}}>
        <div style={{width: '6%',
        height: '100%',
        marginRight:'05px',
        backgroundColor: '#efefef'}}></div>
      <div style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#efefef',
    display: 'flex',
alignItems: 'center',
color: 'gray',
fontWeight: 'bold',
paddingLeft: '30px',
}}>
<label><span onClick={()=>{this.siteMapClicked(api.DIRECTORY)}} className="link"> Mitr Graphics Library</span> {this.siteMap()}</label>
<div style={{    position: 'absolute',
    right: '4%',width:"25%",height:"4%"}}>
<input placeholder="Search..." onKeyUp={this.search} style={{paddingLeft:'10px',marginRight: '10px',
    width: '100%',
    height: '100%',
    borderRadius: '05px',
    border: '0'}} type="text"/>
<div id="search"/>
</div>

      </div>
        </header>
    );
  }

}
export default Header;
