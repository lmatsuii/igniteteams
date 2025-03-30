import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Buttons";
import { Input } from "@components/Input";

export function NewGroup() {
    return(
        <Container>
            <Header showBackButton></Header>
            <Content>
                <Icon></Icon>
                <Highlight title="Nova Turma" subtitle="crie a turma para adicionar as pessoas."></Highlight>
                <Input></Input>
                <Button title="Criar" style={{marginTop: 20}}></Button>
            </Content>
        </Container>
    )
}
