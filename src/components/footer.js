import React from "react";
import LOGO from "../assets/logo.png";
class Footer extends React.Component {
  render() {
    return (
      <footer id="app-footer" style={{    width: "20%",
    height: "100%",
    display: "flex",
    alignItems: "center"}}>
        <img alt="mitr logo" style={{ width: "60%",
    height: "80%",maxWidth:"60%"  }} src={LOGO} />
      </footer>
    );
  }
}
export default Footer;
