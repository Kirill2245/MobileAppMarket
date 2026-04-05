import BellIcon from "@/components/Icons/BellIcon";
import CardIcon from "@/components/Icons/CardIcon";
import ExitIcon from "@/components/Icons/ExitIcon";
import HelpIcon from "@/components/Icons/HelpIcon";
import ProfileIconSetting from "@/components/Icons/ProfileIconSetting";
import ShieldIcon from "@/components/Icons/ShieldIcon";
import StarIconSetting from "@/components/Icons/StarIconSetting";
import UsersIcon from "@/components/Icons/UsersIcon";
import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { useAuth } from "@/context/AuthContext";
import { StyleSheet, View } from "react-native";

const SettingFrame = () => {
    const {logout} = useAuth()
    const listBtn = [
        {
            title:'Настроики аккаунта',
            icon:ProfileIconSetting,
            onClick:() => {}
        },
        {
            title:'Способы оплаты',
            icon:CardIcon,
            onClick:() => {}
        },
        {
            title:'Уведомления',
            icon:BellIcon,
            onClick:() => {}
        },
        {
            title:'Настройки AI',
            icon:StarIconSetting,
            onClick:() => {}
        },
        {
            title:'Члены команды',
            icon:UsersIcon,
            onClick:() => {}
        },
        {
            title:'Безопасность',
            icon:ShieldIcon,
            onClick:() => {}
        },
        {
            title:'Помощь и поддержка',
            icon:HelpIcon,
            onClick:() => {}
        },
    ]
    return (
        <View style = {styles.contain}>
            <StyledText variant="title" size="secondary">Настроики</StyledText>
            <View style = {styles.listBox}>
                {
                    listBtn.map((item, index) => (
                        <StyledButton 
                            variant="setting-btn" 
                            key={index} 
                            icon="chevron-forward" 
                            sizeIcon = {20}
                            colorIcon={COLORS.PRYMARY_SVG_COLOR}
                            style = {index !== listBtn.length - 1 ?{borderBottomWidth:0.8} :{borderBottomWidth:0}}
                        >
                            <View style = {styles.box_btn} >
                                <item.icon/>
                                <StyledText>{item.title}</StyledText>
                            </View>
                        </StyledButton>
                    ))
                }
            </View>
            <StyledButton 
                variant="leave-btn"
                icon="chevron-forward" 
                sizeIcon = {20}
                colorIcon={COLORS.PRYMARY_SVG_COLOR}
                onPress={logout}
            >
                <View  style = {styles.box_btn}>
                    <ExitIcon/>
                    <StyledText style = {{color:COLORS.PRYMARY_RED_COLOR}}>Выход </StyledText>
                </View>
            </StyledButton>
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
        marginBottom:2.6
    },
    box_btn:{
        flex:1,
        flexDirection:'row',
        gap:12,
        marginRight:'auto',
        alignItems:'center'
    }
})

export default SettingFrame