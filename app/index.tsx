import { StyleSheet, Text, View, Image } from "react-native";
import { MainContainer } from "@/components/wrappers/MainContainer";
import { PrimaryButton } from "@/components/utils/PrimaryButton";
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
					<Text style={styles.subTitle}>Découvrez le pouvoir de l'IA pour vous aider à apprendre et à progresser dans vos centres d'intéret.</Text>
				</View>
			</View>
			<PrimaryButton onPress={() => console.log("Button Pressed")} title="Commencer" />
		</MainContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	subContainer: {
		alignItems: "center",
		justifyContent: "center",
		height: "70%",
		marginTop: -20,
	},

	// Logo
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
});
