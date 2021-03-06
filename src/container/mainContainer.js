import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Thubmnail from "../components/thumbnail";
import "./mainContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import ModalDialog from "../components/modal";
import { getDirectories } from "../utils/ajaxUtils";
import PaginationComponent from "../components/PaginationComponent";
class MainContainer extends React.Component {
  componentDidMount() {
    getDirectories(this.setAllData);
  }
  state = {
    selectedElement: null,
    element: null,
    modal: false,
    structure: null
  };
  openModal = element => {
    this.setState({ element: element });
  };
  toggal = () => {
    this.setState({ modal: !this.state.modal });
  };
  setAllData = data => {
    this.setState({ structure: data });
  };
  selectElement = pathName => {
    getDirectories(this.setAllData, pathName);
  };
  createDirectories = (folders, files) => {
    console.log(folders, "folders");
    let remainingCount = 15 - (folders.length + files.length);
    let thumbArray = [];
    folders.map(key => {
      console.log(key);
      thumbArray.push(
        <button
          tabIndex="0"
          key={Math.random() + new Date().getMilliseconds()}
          onClick={() => {
            this.selectElement(key.DirectoryName);
          }}
          className="folder"
          id={key}
        >
        <img className="folderimg"/>
          <label style={{position: "absolute"}}>{key.DirectoryName}</label>
        </button>
      );
    });
     files.map((file, index) => {
      thumbArray.push(
        <Thubmnail
          key={Math.random() + new Date().getMilliseconds()}
          element={file}
          index={index}
          toggal={this.toggal}
          openModal={this.openModal}
        />
      );
    });
    for (var i = 0; i < remainingCount; i++) {
      thumbArray.push(
        <div
          key={i + "folder"}
          id={i + "folder"}
          className="folder light"
        ><img className="folderimgdisabled"/></div>
      );
    }
    console.log(thumbArray, "thumbArray");
    return thumbArray;
  };
  render() {
    console.log(this.state,'shubham');
    const { selectedElement, structure } = this.state;
    return structure===null?<div/>:(
      <div className="App1" style={{ height: "100%", width: "100%",position: "absolute" }}>
        <div style={{ height: "11%", width: "100%" }}>
          <Header callback={this.setAllData} />
        </div>
        <div id="files" style={{ height: "78%", width: "100%",    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
} }>
          {
            <PaginationComponent
              displayFiles={
                structure &&
                this.createDirectories(
                  this.state.structure.Directories,
                  this.state.structure.Files
                )
              }
            />
            // structure &&
            // this.createDirectories(
            //   this.state.structure.Directories,
            //   this.state.structure.Files
            // )
          }
        </div>
        <div style={{ width: "100%", height: "11%",    position: "relative",
    bottom: "1%" }}>
          <Footer />
        </div>
      <ModalDialog isOpen={this.state.modal} element={this.state.element} toggal={this.toggal}/>
      </div>
    );
  }
}
export default MainContainer;
