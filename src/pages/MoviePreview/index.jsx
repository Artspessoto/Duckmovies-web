import { Container } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export function MoviePreview(){
    return (
        <Container>
            <Header /> 
            <Button title={"Voltar"}/>
        </Container>
    )
}

