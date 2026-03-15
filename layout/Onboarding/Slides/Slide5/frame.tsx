import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Image, StyleSheet, View } from "react-native";

const Frame = () => {
    return (
        <View style = {styles.frame}>
            <StyledText style = {{color:COLORS.NOTIFICATION_BG}} size="medium">★★★★★</StyledText>
            <StyledText 
                variant="subtitle" 
                size="medium" 
                style = {{textAlign:'center', width:260, marginTop:16, marginBottom:2.2}}
            >"Light нашел мне идеального разработчика меньше чем за час.      Лучший опыт найма в моей жизни."</StyledText>
            <View style = {styles.card}>
                <Image
                    source={require('@assets/images/t.jpg')}
                    resizeMode="contain"
                    style = {styles.image}
                />
                <View>
                    <StyledText variant="subtitle" size="small">Дженнифер Адамс</StyledText>
                    <StyledText variant="subtitle-grey" size="ower-small">Основатель, TechStart</StyledText>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    frame:{
        width:'100%',
        height:248,
        backgroundColor:COLORS.CARD_BG,
        borderRadius:24,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:55.5
    },
    image:{
        width:48,
        height:48,
    },
    card:{
        flexDirection:'row',
        gap:12
    }
})

export default Frame