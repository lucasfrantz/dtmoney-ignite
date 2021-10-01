import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";
export function Summary(){
    const {transactions} = useContext(TransactionsContext)

    console.log(transactions)

    return(
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src= {incomeImg} alt="Income"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src= {outcomeImg} alt="Outcome"/>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src= {totalImg} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}