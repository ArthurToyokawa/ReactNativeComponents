// View.tsx

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Pokemon } from "../models/pokemon";
import CustomButton from "../components/meuBtn";
import MeuText from "../components/meuText";
import MeuLabel from "../components/meuLabel";
import MeuTitle from "../components/MeuTitle";
import MeuTextField from "../components/meuTextField";

export default function PokemonList(): JSX.Element {
  const [pokemon, setPokemon] = useState<Pokemon[]>([
    { nome: "pikachu", tipo: "pikachu" },
    { nome: "pichu", tipo: "bebe" },
    { nome: "maril", tipo: "pikachu clone" },
    { nome: "ratata", tipo: "normal" },
  ]);
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");

  const addPokemon = () => {
    setPokemon([...pokemon, { nome, tipo }]);
  };

  return (
    <View style={styles.container}>
      <MeuTitle text={"Carrinho"} />
      {pokemon.map((p, i) => {
        return (
          <View key={i}>
            <View style={styles.attrContainer}>
              <MeuLabel text={"Pokemon"} />
              <MeuText text={p.nome} />
            </View>
            <View style={styles.attrContainer}>
              <MeuLabel text="Tipo" />
              <MeuText text={"" + p.tipo} />
            </View>
            <View style={styles.divider} />
          </View>
        );
      })}
      <MeuTitle text="Formulario" />
      <View>
        <View style={styles.attrContainer}>
          <MeuLabel text="Nome:" />
          <MeuTextField
            placeholder={"Nome do pokemon"}
            onChangeText={(newText) => setNome(newText)}
            defaultValue={nome}
          />
        </View>
        <View style={styles.attrContainer}>
          <MeuLabel text="Tipo:" />
          <MeuTextField
            placeholder={"Tipo do pokemon"}
            onChangeText={(newText) => setTipo(newText)}
            defaultValue={tipo}
          />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton title="Adicionar" onPress={addPokemon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  attrContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  btnContainer: {
    marginTop: 6,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});
