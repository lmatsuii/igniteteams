import { StyleSheet, Text, View } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
export function Groups() {
  return (
    <Container>
      <Header></Header>
      <Highlight title="Turmas" subtitle="jogue com a sua turma"></Highlight>
      <GroupCard title="galera do ignite"></GroupCard>
    </Container>
  );
}
