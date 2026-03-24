import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import HeaderStep from "../../common/HeaderStep";

const Step4 = () => {
    return (
        <View style = {styles.step}>
            <HeaderStep title="Портфолио" subtitle="Добавьте проекты, чтобы показать свой опыт"/>
            <View style = {styles.addFileFrame}>
                <StyledButton variant="add-file-btn">
                    <View style = {styles.box}>
                        <View style = {styles.circle}>
                            <Ionicons
                                name="add-outline" 
                                size={24} 
                                color={COLORS.ICON_GREY_COLOR}
                            />
                        </View>
                        <StyledText variant="subtitle-grey" size="small">Добавить проект</StyledText>
                    </View>
                    
                </StyledButton>
                <StyledButton lable="Пропустить этот шаг" variant="txt-btn" variantText="subtitle-grey" sizeText="small"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    step:{
        flex:1,
        backgroundColor:'white'
    },
    addFileFrame:{

    },
    circle:{
        width:48,
        height:48,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.SVG_BG,
        borderRadius:26843500
    },
    box:{
        alignItems:'center'
    }
})

export default Step4