import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import uwuificador from "../utils/uwu";

type MeuTitleProps = {
  text: string;
};

export default function MeuTitle(props: MeuTitleProps) {
  const { text } = props;
  return <Text style={styles.text}>{uwuificador(text)}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    letterSpacing: 0.25,
    color: "#E32F14",
  },
});
