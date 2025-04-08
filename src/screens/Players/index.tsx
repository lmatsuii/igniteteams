import { Highlight } from "@components/Highlight";
import { Container, Form } from "./styles";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
export function Players() {
  return (
    <Container>
      <Header showBackButton></Header>
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      ></Highlight>
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false}></Input>
        <ButtonIcon icon="add" type="PRIMARY"></ButtonIcon>
      </Form>
    </Container>
  );
}
