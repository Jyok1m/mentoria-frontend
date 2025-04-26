import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import { MainContainer } from "@/components/wrappers/MainContainer";
import { PrimaryButton } from "@/components/utils/PrimaryButton";
import { Colors } from "@/constants/Colors";

export default function LandingScreen() {
	const router = useRouter();

	const handleButtonPress = () => {
		router.push("/signUp");
	};

	return (
		<MainContainer style={styles.container}>
			<View style={styles.subContainer}>
				<View style={styles.imageContainer}>
					<Image source={require("@/assets/images/mentoria_logo_no_bg.png")} style={styles.image} resizeMode="contain" />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Découvrez le pouvoir de l'IA pour vous aider à apprendre et à progresser dans vos centres d'intéret.</Text>
				</View>
			</View>
			<PrimaryButton onPress={handleButtonPress} title="Commencer" />
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
		marginTop: -70,
	},

	// Logo
	imageContainer: {
		width: "100%",
		aspectRatio: 1,
		justifyContent: "center",
		marginBottom: -100,
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
		fontSize: 18,
		fontWeight: 400,
		color: Colors.primaryText,
		textAlign: "center",
	},
});
