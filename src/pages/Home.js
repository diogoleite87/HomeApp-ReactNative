import { StyleSheet, Text, View, FlatList } from "react-native";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Moviments from "../components/Movements";
import Actions from "../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,00",
    date: "17/09/2022",
    type: 0,
  },
  {
    id: 2,
    label: "Pix Cliente X",
    value: "2.500,00",
    date: "17/09/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Salario",
    value: "7.200,00",
    date: "17/09/2022",
    type: 1,
  }
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Diogo Leite" />
      <Balance saldo="0,10" gasto="-928,00" />

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList style={styles.list} 
      data={list} 
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) => <Moviments data={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,

  },
  list: {
    marginEnd: 14,
    marginStart: 14
  }
});
