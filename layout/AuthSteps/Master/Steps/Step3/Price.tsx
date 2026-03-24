import StyledButton from "@/components/StyledButton";
import StyledInputLable from "@/components/StyledInputLable";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const Price = () => {
    const [onActiveBtn, setOnActiveBtn] = useState(0)
    
    return (
        <View style = {styles.priceContain}>
            <View style = {styles.typePrice}>
                <StyledText variant="title" size="small">Тип ставки</StyledText>
                <View style = {styles.contain}>
                    <StyledButton 
                        style = {onActiveBtn === 0 ? styles.isActiveBtn : styles.isNoActiveBtn}
                        lable="Почасовая" 
                        sizeText="small" 
                        variantText={onActiveBtn === 0 ? "subtitle": "subtitle-grey"}
                        onPress={() => setOnActiveBtn(0)}
                    />
                    <StyledButton 
                        style = {onActiveBtn === 1 ? styles.isActiveBtn : styles.isNoActiveBtn} 
                        lable="За проект" 
                        sizeText="small" 
                        variantText={onActiveBtn === 1 ? "subtitle": "subtitle-grey"}
                        onPress={() => setOnActiveBtn(1)}
                    />
                </View>
            </View>
            <StyledInputLable
                customLable = {onActiveBtn === 0 ?"Ставка в час": "Ставка за проект"}
                placeholder="₽3,000"
                inputContainerStyle={{ backgroundColor: COLORS.SVG_BG}}
            />
            <View style = {styles.info}>
                <Ionicons name="information-circle-outline" color={COLORS.ICON_GREY_COLOR} size={20}/>
                <StyledText variant="subtitle-grey" size="ower-small">
                    Средняя рыночная ставка: <StyledText variant="subtitle" size="ower-small">
                        {onActiveBtn === 1 ? "₽42,000 - ₽100,000/проект" : "₽2,500 - ₽5,000/час"}
                    </StyledText>
                </StyledText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    priceContain:{
        marginTop:25,
        marginBottom:44.5
    },
    typePrice:{
        gap:14,
        marginBottom:16
    },
    contain:{
        flexDirection:'row',
        width:247.85000610351562,
        height:45,
        backgroundColor:COLORS.SVG_BG,
        padding:4,
        borderRadius:14,
        justifyContent:'space-between'
    },
    isActiveBtn:{
        backgroundColor:'white',
        borderRadius:10,
        minWidth:127,
        minHeight:37,
        borderWidth:0,
        shadowColor:'#00000042'
    },
    isNoActiveBtn:{
        backgroundColor:COLORS.SVG_BG,
        minWidth:114,
        borderRadius:10,
        minHeight:37,
        borderWidth:0,
        shadowColor:'transparent'
    },
    info:{
        flexDirection:'row',
        gap:8,
        alignItems:'center',
        marginTop:8
    }
})

export default Price