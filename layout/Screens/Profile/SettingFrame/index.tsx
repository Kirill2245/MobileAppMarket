import BellIcon from "@/components/Icons/BellIcon";
import CardIcon from "@/components/Icons/CardIcon";
import ProfileIconSetting from "@/components/Icons/ProfileIconSetting";
import StarIconSetting from "@/components/Icons/StarIconSetting";
import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { StyleSheet, View } from "react-native";

const SettingFrame = () => {
    const listBtn = [
        {
            title:'Настроики аккаунта',
            icon:ProfileIconSetting
        },
        {
            title:'Способы оплаты',
            icon:CardIcon
        },
        {
            title:'Уведомления',
            icon:BellIcon
        },
        {
            title:'Настройки AI',
            icon:StarIconSetting
        },
        {
            title:'Члены команды',
            icon:ProfileIconSetting
        },
        {
            title:'Безопасность',
            icon:ProfileIconSetting
        },
        {
            title:'Помощь и поддержка',
            icon:ProfileIconSetting
        },
    ]
    return (
        <View style = {styles.contain}>
            <StyledText variant="title" size="secondary">Настроики</StyledText>
            <View style = {styles.listBox}>
                {
                    listBtn.map((item, index) => (
                        <StyledButton variant="setting-btn" key={index}>
                            <View style = {styles.box_btn}>
                                <item.icon/>
                                <StyledText>{item.title}</StyledText>
                            </View>
                        </StyledButton>
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contain:{
        gap:13.4
    },
    listBox:{
        backgroundColor:'while',
        borderRadius:16,
        borderWidth:0.8,
        borderColor:COLORS.PRIMARY_BORDER_GREY,
    },
    box_btn:{
        flexDirection:'row',
        gap:12
    }
})

export default SettingFrame