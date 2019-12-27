import React from 'react';
import LOGO from '../assets/logo.png';
 class Footer extends React.Component {
  render(){
    return (
        <footer id="app-footer" style={{
          position: 'absolute',
    bottom: '0',
    width: '93%',
    paddingLeft: '75px',
        }}>
        <img alt="mitr logo" style={{transform: 'scale(0.9)'}} src={LOGO}/>
        </footer>
    );
  }

}
export default Footer;
