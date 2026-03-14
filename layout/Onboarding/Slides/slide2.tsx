import { COLORS } from "@/constants/color.const";
import React from "react";
import { StyleSheet, View } from "react-native";
interface Slide1Props {
    onNext?: () => void; 
}
const Slide2:React.FC<Slide1Props> = ({ onNext }) => {
    const tagList = [
        {
            title:'✓ Проверено'
        },
        {
            title:'🔒 Безопасные Платежи'
        },
        {
            title:'⭐ 5 Звезд'
        },        
    ]
    return (
        <View style = {styles.contain}>
            <View>
                {/* <FlatList

                /> */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contain:{
        flex:1,
        backgroundColor:COLORS.PRIMARY_BG
    }
});
export default Slide2