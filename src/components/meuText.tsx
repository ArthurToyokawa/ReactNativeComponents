import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import uwuificador from "../utils/uwu";

type MeuTextProps = {
  text: string;
};

export default function MeuText(props: MeuTextProps) {
  const { text } = props;
  return <Text style={styles.text}>{uwuificador(text)}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#E35314",
  },
});
