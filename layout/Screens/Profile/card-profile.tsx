import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { formatDateToCustom } from "@/helpers/dateHelpers";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface CardProfileProps{
    firstName?:string;
    lastName?:string;
    titleImg?:string;
    location?:string;
    createdAt:string;
    specialization?:string;
}
const CardProfile:React.FC<CardProfileProps> = (props: CardProfileProps) => {
    return (
        <View style = {styles.card}>
            <Image
                source={{ uri: props.titleImg}}
                style = {styles.image}
            />
            <View style = {styles.containInfo}>
                <StyledText variant="title" size="regular">{props.firstName}</StyledText>
                <StyledText variant="title" size="regular">{props.lastName}</StyledText>
                <StyledText variant="subtitle-grey" size="small" style ={{width:113, marginTop:3.6}} >
                    {props.specialization ? props.specialization : 'Не указанно'}
                </StyledText>
                <View style = {styles.locationContain}>
                    <View style = {styles.box}>
                        <Ionicons name="location-outline" size={16} color="#666" />
                        <StyledText variant="subtitle-grey" size="ower-small" style = {{width:64}}>{props.location ? props.location : 'Не указанно'}</StyledText>
                    </View>
                    <View style = {styles.box}>
                        <Ionicons name="calendar-outline" size={16} color="#666" />
                        <StyledText variant="subtitle-grey" size="ower-small" style = {{width:58}}>{`C ${formatDateToCustom(props.createdAt)}`}</StyledText>
                    </View>
                </View>
            </View>
            <StyledButton image={require('@assets/images/Button.png')} variant="image-btn"></StyledButton>
        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        paddingTop:24.8,
        paddingBottom:40,
        backgroundColor:'white',
        borderWidth:0.8,
        borderColor:COLORS.TAG_BG,
        borderRadius:16,
        flexDirection:'row',
        justifyContent:'center',
        gap:16
    },
    image:{
        width:80,
        height:80,
        borderRadius:40
    },
    containInfo:{

    },
    locationContain:{
        flexDirection:'row',
        gap:12,
        marginTop:8
    },
    box:{
        flexDirection:'row',
        gap:4,
        alignItems:'center'
    }
})
export default CardProfile;