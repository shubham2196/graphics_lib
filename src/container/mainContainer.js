import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Thubmnail from '../components/thumbnail';
import graphicsList from '../mockData';
import  './mainContainer.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal,  ModalBody } from 'reactstrap';
 class MainContainer extends React.Component {
   state={
     selectedElement:null,
     image:null,
     modal:false
   }
   openModal=(image)=>{
     console.log('sss',image);
     this.setState({image:image});
   }
   toggal=()=>{
     this.setState({modal:!this.state.modal});
   }
   selectElement=(e)=>{
     this.setState({selectedElement:e.target.id})
   }
   createDirectories=(list)=>{
     let keys=Object.keys(list);
     return keys.map((key)=>{
       return <div key={key} onClick={this.selectElement} className="folder" id={key}> {key}</div>;
     });
   }
   showList=(element)=>{
     return graphicsList[element].map((file,index)=>{
       return <Thubmnail key={index} element={file} index={index} toggal={this.toggal} openModal={this.openModal}/>
     })
     // return <div>{element}</div>
   }
  render(){
    const {selectedElement}=this.state;
    return (
      <div className="App">
      <Header/>
        <div id="container">
        {!selectedElement?this.createDirectories(graphicsList):this.showList(selectedElement)}
        </div>
        <Footer/>

        <Modal fade="true" size="lg" isOpen={this.state.modal} toggle={this.toggle}>
       <ModalBody>
       <Button color="danger" onClick={this.toggal}>X</Button>
          <img src={this.state.image} style={{width:'100%',marginTop: '12px'}} />
       </ModalBody>

     </Modal>

      </div>
    );
  }

}
export default MainContainer;
