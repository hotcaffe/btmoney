import { CurrencyBtc } from "phosphor-react"
import { Container } from "./styles"

interface HeaderProps{
    handleCloseTransactionModal: () => void;
}

export function Header({handleCloseTransactionModal}: HeaderProps){
    return(
        <Container>
            <div>
                <span>
                    <CurrencyBtc/>
                    <p>bt money</p>
                </span>
                <button onClick={handleCloseTransactionModal}>
                    Nova transação
                </button>
            </div>
        </Container>
    )
}