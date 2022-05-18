import { Summary } from "../Summary/Summary";
import { TransactionTable } from "../TransactionTable/TransactionTable";
import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TransactionTable/>
        </Container>
    )
}