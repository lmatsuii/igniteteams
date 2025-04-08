import { Highlight } from "@components/Highlight";
import { Container, Form, HeaderList, NumbersOfPlayer } from "./styles";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Buttons";

export function Players() {
  const [team, setTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState([]);
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
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        ></FlatList>
        <NumbersOfPlayer>{players.length}</NumbersOfPlayer>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}}></PlayerCard>
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time."></ListEmpty>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      ></FlatList>
      <Button type="SECONDARY" title='Remover turma'></Button>
    </Container>
  );
}
