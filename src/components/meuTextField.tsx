import React from "react";
import { Text, StyleSheet, Pressable, TextInput } from "react-native";
import uwuificador from "../utils/uwu";
import MeuText from "./meuText";

type MeuTextFieldProps = {
  onChangeText: (newText: string) => void;
  defaultValue: string;
  placeholder: string;
};

export default function MeuTextField(props: MeuTextFieldProps) {
  const { onChangeText, defaultValue, placeholder } = props;
  return (
    <TextInput
      style={styles.input}
      placeholder={uwuificador(placeholder)}
      onChangeText={onChangeText}
      defaultValue={defaultValue}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "pink",
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
});
