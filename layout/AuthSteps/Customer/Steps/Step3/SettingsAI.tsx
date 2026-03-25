import StyledText from "@/components/StyledText";
import StyledToggleSwitch from "@/components/StyledToggleSwitch";
import { COLORS } from "@/constants/color.const";
import { StyleSheet, View } from "react-native";

const SettingsAI = () => {
    const settings = [
        {
            title:"Автоматический подбор",
            subtitle:"AI будет предлагать кандидатов"
        },
        {
            title:"Уведомления о совпадениях",
            subtitle:"Получать push уведомления"
        },
        {
            title:"Персональные рекомендации",
            subtitle:"На основе ваших предпочтений"
        },
    ]
    return (
        <View style = {styles.contain}>
            <StyledText variant="subtitle" size="small">Настройки AI подбора</StyledText>
            <View style = {styles.frame}>
                {settings.map((item,index) => (
                    <View style = {styles.row} key={index}>
                        <View style = {styles.textBox}>
                            <StyledText variant="subtitle" size="small">{item.title}</StyledText>
                            <StyledText variant="subtitle-grey" size="ower-small">{item.subtitle}</StyledText>
                        </View>
                        <StyledToggleSwitch/>
                    </View>
                ))}
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contain:{
        gap:12
    },
    frame:{
        backgroundColor:COLORS.LIGHT_GREY,
        padding:12,
        gap:16.6,
        borderRadius:14
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textBox:{
        gap:1.4
    }
})
export default SettingsAI