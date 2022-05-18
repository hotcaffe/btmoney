import { Container } from "./styles";

export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Compra na alta</td>
                        <td className="buy">BTC 0.00070</td>
                        <td>Compra</td>
                        <td>14/04/2022</td>
                    </tr>
                    <tr>
                        <td>Venda na alta</td>
                        <td className="sell">BTC 0.00034</td>
                        <td>Venda</td>
                        <td>17/04/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}