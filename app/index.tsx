import { StyleSheet, Text, View, Image } from "react-native";
import { MainContainer } from "@/components/wrappers/MainContainer";
import { Colors } from "@/constants/Colors";

export default function LandingScreen() {
	return (
		<MainContainer style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={require("@/assets/images/logo_no_bg.png")} style={styles.image} resizeMode="contain" />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>MentorIA</Text>
				<Text style={styles.subTitle}>Discover personalized learning tailored just for you !</Text>
			</View>
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
