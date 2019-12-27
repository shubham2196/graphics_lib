import React from 'react';
import SEARCHLOGO from '../assets/search.png';
 class Header extends React.Component {
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
<label>Mitr Graphics Library | Images</label>
<div style={{    position: 'absolute',
    right: '130px'}}>
<input style={{marginRight: '10px',
    width: '250px',
    height: '35px',
    borderRadius: '10px',
    border: '0'}} type="text"/>
<img src={SEARCHLOGO}/>
</div>

      </div>
        </header>
    );
  }

}
export default Header;
