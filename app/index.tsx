import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { MainContainer } from "@/components/wrappers/MainContainer";
import { Colors } from "@/constants/Colors";

export default function LandingScreen() {
	return (
		<MainContainer style={styles.container}>
			<View style={styles.subContainer}>
				<View style={styles.imageContainer}>
					<Image source={require("@/assets/images/logo_no_bg.png")} style={styles.image} resizeMode="contain" />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.title}>MentorIA</Text>
					<Text style={styles.subTitle}>Discover personalized learning tailored just for you !</Text>
				</View>
			</View>
			<Pressable
				onPress={() => {
					console.log("Button Pressed");
				}}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Get Started</Text>
			</Pressable>
		</MainContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
	},

	// Logo
	subContainer: {
		alignItems: "center",
		justifyContent: "center",
		height: "70%",
		marginTop: -20,
	},
	imageContainer: {
		width: 125,
		aspectRatio: 1,
		justifyContent: "center",
	},
	image: {
		width: "100%",
	},

	// Title et subTitle
	textContainer: {
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 36,
		fontWeight: 700,
		color: Colors.primaryText,
		textAlign: "center",
		marginVertical: 20,
	},
	subTitle: {
		fontSize: 18,
		fontWeight: 400,
		textAlign: "center",
	},

	// CTA button
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
