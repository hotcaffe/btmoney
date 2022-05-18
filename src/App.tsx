import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";
import { TransactionModal } from "./components/TransactionModal/TransactionModal";
import Modal from 'react-modal'
import { useState } from "react";

Modal.setAppElement('#root')

function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  function handleCloseTransactionModal(){
    setIsTransactionModalOpen(!isTransactionModalOpen)
  }

  return (
    <>
      <Header handleCloseTransactionModal={handleCloseTransactionModal}/>
      <Dashboard/>
      <TransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleCloseTransactionModal}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
