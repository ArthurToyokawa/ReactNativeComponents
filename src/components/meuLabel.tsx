import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import uwuificador from "../utils/uwu";

type MeuLabelProps = {
  text: string;
};

export default function MeuLabel(props: MeuLabelProps) {
  const { text } = props;
  return <Text style={styles.text}>{uwuificador(text) + " :"}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#E314B3",
  },
});
