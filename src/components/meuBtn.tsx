import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import uwuificador from "../utils/uwu";
import MeuText from "./meuText";
import MeuTitle from "./MeuTitle";

type MeuBtnProps = {
  onPress: () => void;
  title: string;
};

export default function MeuBtn(props: MeuBtnProps) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <MeuTitle text={title} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "pink",
  },
});
