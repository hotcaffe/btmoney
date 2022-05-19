import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import Modal from 'react-modal'
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useState } from "react";

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps) {
    const [transactionType, setTransactionType] = useState<'deposit' | 'withdraw'>('deposit')

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
            <button type="button" onClick={onRequestClose} className='react-modal-close'>
                <X/>
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Nome" />
                <input type="number" placeholder="Preço" />
                <input type="text" placeholder="Categoria" />
                <TransactionTypeContainer>
                    <RadioBox onClick={() => setTransactionType('deposit')} isActive={transactionType === 'deposit'} activeColor="green" type="button">
                        <ArrowCircleUp type="deposit"/>
                        <p>Entrada</p>
                    </RadioBox>
                    <RadioBox onClick={() => setTransactionType('withdraw')} isActive={transactionType === 'withdraw'} activeColor="red" type="button">
                        <ArrowCircleDown type="withdraw"/>
                        <p>Saída</p>
                    </RadioBox>
                </TransactionTypeContainer>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}