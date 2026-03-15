import { GRADIENT_PRYMARY_BG_FIVE } from "@/constants/color.const";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const Slide5 = () => {
    return(
        <LinearGradient
            colors={GRADIENT_PRYMARY_BG_FIVE.PRYMARY.LIST_COLORS}
            locations={GRADIENT_PRYMARY_BG_FIVE.PRYMARY.COUNT_COLORS}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}   
            style = {styles.contain}
        >

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
        paddingTop: 48.4,
        paddingBottom:15,
        paddingHorizontal: 16,
        alignItems:'center'
    }
})

export default Slide5