import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface CardProps{
    title:string,
    subtitle:string,
    imageSource?: any
}
const Card:React.FC<CardProps> = ({title,subtitle,imageSource}) => {
    return (
        <View style = {styles.contain}>
            {imageSource && (
                <Image
                    source={imageSource} 
                    style={styles.image}
                    resizeMode="contain"
                />
            )}
            <StyledText variant="title" size="regular">{title}</StyledText>
            <StyledText variant="subtitle-grey" size="medium">{subtitle}</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    contain:{
        borderRadius:24,
        backgroundColor:COLORS.CARD_BG,
        width:'100%',
        height:196,
        justifyContent:'center',
        paddingHorizontal:24,
        gap:9.2
    },
    image: {
        width: 48,  // настройте под ваш дизайн
        height: 48,
        marginBottom: 16,
    }
})
export default Card