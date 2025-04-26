import React from "react";
import { StyleSheet, View, type ViewProps, Text } from "react-native";
import { Colors } from "@/constants/Colors";

export function MainContainer({ style, ...otherProps }: ViewProps) {
	return <View style={[styles.container, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
});
