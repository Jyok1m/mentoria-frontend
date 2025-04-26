import { StyleSheet, View, Text } from "react-native";
import { MainContainer } from "@/components/wrappers/MainContainer";
import React from "react";

export default function signInScreen() {
	return (
		<MainContainer style={styles.container}>
			<Text>Sign In</Text>
		</MainContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
	},
});
