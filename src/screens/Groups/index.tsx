import { StyleSheet, Text, View } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Buttons";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  return (
    <Container>
      <Header></Header>
      <Highlight title="Turmas" subtitle="jogue com a sua turma"></Highlight>
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (<ListEmpty message="Que tal cadastrar a primeira turma?"></ListEmpty>)}
      ></FlatList>
      <Button
      title="Criar nova turma"
      ></Button>
    </Container>
  );
}
