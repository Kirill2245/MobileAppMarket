import { StyleSheet, View } from "react-native";
import NavigatePanel from "./NavigatePanel";

const Main = () => {
    return (
        <View style={styles.container}>
            <NavigatePanel/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, // Важно! Занимает весь доступный экран
    },
})
export default Main;