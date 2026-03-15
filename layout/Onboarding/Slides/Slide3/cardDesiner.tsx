import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Image, StyleSheet, View } from "react-native";

const CardDesiner = () => {
    return (
        <View style = {styles.card}>

            <View style = {styles.notification}>
                <StyledText size="ower-small">3 совпадения AI</StyledText>
            </View>
            <StyledText variant="title" size="secondary">Редизайн Мобильного Приложения</StyledText>
            <StyledText variant="subtitle-grey" size="small" style = {{width:288, marginTop:8}}>Ищем дизайнера для модернизации нашего iOS приложения...</StyledText>
            <Image
                source={require('@assets/images/listimg.jpg')}
                resizeMode="contain"
                style = {styles.image}
            />
            <StyledText variant="button-text-blue" size="ower-small">✓ Совпадения найдены за 12 секунд</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width:'100%',
        height:211,
        backgroundColor:COLORS.CARD_BG,
        borderRadius:24,
        marginTop:20,
        position:'relative',
        paddingLeft:24,
        paddingTop:22.6,
        paddingRight:13
    },
    notification:{
        width:122.55,
        height:23.99,
        backgroundColor:COLORS.NOTIFICATION_BG,
        borderRadius:26843500,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        left:236,
        top:-8
    },
    image:{
        width:310,
        height:40,
        marginVertical:16
    }
})
export default CardDesiner