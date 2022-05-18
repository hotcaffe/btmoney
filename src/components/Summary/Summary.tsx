import { ArrowCircleDown, ArrowCircleUp, CurrencyBtc } from "phosphor-react";
import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <ArrowCircleUp />
                </header>
                <strong>₿TC 0.00070</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <ArrowCircleDown />
                </header>
                <strong>₿TC 0.00034</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <CurrencyBtc />
                </header>
                <strong>₿TC 0.00036</strong>
            </div>
        </Container>
    )
}