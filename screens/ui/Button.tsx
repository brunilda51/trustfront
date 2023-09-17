import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles";
import { useState } from "react";

function Button({ children, onPress, mode, style }: any) {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <View
            style={[
              styles.button,
              mode === "flat" && styles.flat,
              pressed && styles.pressed,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                mode === "flat" && {
                  color: pressed ? "white" : GlobalStyles.colors.primary100,
                },
              ]}
            >
              {children}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary100,
  },
  pressed: {
    opacity: 0.75,
    color: "white !important",
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
