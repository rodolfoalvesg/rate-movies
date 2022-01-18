import { MainStyle } from "./style";
import Title from "../Titles/";
import Search from "../Search/"
import Table from "../Table/";
import {ButtonAddMovie} from '../Buttons/'
import{ModalGroup} from '../../components/ModalGroup';
import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root")

function Main(){
  const [isNewPageModalOpen, setIsNewPageModalOpen] = useState(false);

  function handleOpenNewPageModal(){
    setIsNewPageModalOpen(true)
  }

  function handleCloseNewPageModal(){
    setIsNewPageModalOpen(false)
  }


    return(
      <>
        <MainStyle>
          <Title/>
          <Search />
          <Table />
          <ButtonAddMovie isOpen={handleOpenNewPageModal}/>
        </MainStyle>

        <ModalGroup 
        isOpen={isNewPageModalOpen}
        onRequestClose = {handleCloseNewPageModal}
        />
      </>
    );
}

export default Main;