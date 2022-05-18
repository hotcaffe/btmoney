import { Container } from "./styles";
import Modal from 'react-modal'

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <Container>
            </Container>
        </Modal>
    )
}