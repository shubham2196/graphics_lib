import React from "react";
import './thumbnail.css';
const defaultFilesPerPage = 15;
const defaultFilesPerRows = 5;

class PaginationComponent extends React.Component {
  state = {
    pageNumber: 1,
    displaySlides: [],
    defaultFiles: 5
  };
  ShowSlide(data) {
    let tempShowData = new Array(3);
    let count = 0;
    // let tempData = JSON.parse(JSON.stringify(data));
    let tempData = new Array(data);
    // JSON.parse(tempData);
    if (data) {
      for (let i = 0; i < 3; i++) {
        tempShowData[i] = tempData[0].splice(0, 5);
      }
    }
    const filesByRows = tempShowData.map(value => (
      <div
        style={{
          margin: "0.1% 5%",
          display: "flex",
          width: "90%",
          height: "26%"
        }}
      >
        {value}
      </div>
    ));

    return filesByRows;
  }
  displayFilesByPageNumber(isDisplayNavigation) {
    const { displayFiles } = this.props;
    if (!isDisplayNavigation) {
      return this.ShowSlide(displayFiles);
    } else {
      const { pageNumber } = this.state;
      const startFrom = pageNumber * defaultFilesPerPage - defaultFilesPerPage;
      const endAt = pageNumber * defaultFilesPerPage;
      let tempDisplay = [];
      for (let i = startFrom; i < endAt; i++) {
        tempDisplay.push(displayFiles[i]);
      }
      return this.ShowSlide(tempDisplay);
    }
  }
  render() {
    const { pageNumber } = this.state;
    console.log(pageNumber, "pageNumber");
    const { displayFiles } = this.props;
    const isDisplayNavigation =
      this.props.displayFiles &&
      this.props.displayFiles.length > defaultFilesPerPage;
      
    return (
      <React.Fragment>
        {this.displayFilesByPageNumber(isDisplayNavigation)}
        {isDisplayNavigation && (
          <React.Fragment>
            <div
              style={{
                position: "absolute",
                bottom: "-8%",
                right: "4%",
                zIndex: "10",
                width: "10%",
                height: "10%",
                display:'flex'
              }}
            >
              <button
                className="backcolor"
                disabled={pageNumber <= 1}
                onClick={() => {
                  console.log("clicked");
                  this.setState({
                    pageNumber: pageNumber - 1
                  });
                }}
              >
                <img className="prevIcon"/>
              </button>
              <div className="pageNo"><span>{pageNumber}</span></div>
              <button
              className="backcolor"
                  disabled={(Math.round(displayFiles.length/ 15) ) === pageNumber}
                onClick={() => {
                  this.setState({
                    pageNumber: pageNumber + 1
                  });
                }}
              >
                <img className="nextIcon"/>
              </button>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default PaginationComponent;
