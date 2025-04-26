import React from "react";
import { StyleSheet, Text, Pressable, type PressableProps } from "react-native";
import { Colors } from "@/constants/Colors";

interface PrimaryButtonProps extends PressableProps {
	title: string;
}

export function PrimaryButton({ title, onPress, ...otherProps }: PrimaryButtonProps) {
	return (
		<Pressable style={({ pressed }) => [styles.button, pressed && { backgroundColor: Colors.secondary }]} onPress={onPress} {...otherProps}>
			<Text style={styles.buttonText}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primary,
		padding: 15,
		borderRadius: 10,
		marginTop: 20,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: Colors.background,
		fontSize: 18,
		fontWeight: "bold",
	},
});
