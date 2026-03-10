import { GRADIENT_PRYMARY_BG_REVERSE } from "@/constants/color.const";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from "react-native";
const Slide1 = () => {
    return (
        <View style = {styles.slide}>
            <LinearGradient
                colors={GRADIENT_PRYMARY_BG_REVERSE.PRYMARY.LIST_COLORS}
                locations={GRADIENT_PRYMARY_BG_REVERSE.PRYMARY.COUNT_COLORS}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
                >
            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    opacity:0.8
  },
  slide:{
    flex:1
  }
});
export default Slide1