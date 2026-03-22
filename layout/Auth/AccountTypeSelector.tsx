import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { GRADIENTS } from "@/constants/gradient.const";
import { Role } from "@/types/role.enum";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CardTypeAuth from "./CardTypeAuth";

interface AccountTypeSelectorProps{
    isOpenLogin:() => void
    isOpenSign:(role:Role) => void
}
    const AccountTypeSelector:React.FC<AccountTypeSelectorProps> = ({isOpenLogin, isOpenSign}) => {
        const cards = [
            {
                iconText:"👥",
                title:"Я — Заказчик",
                subtitle:"Мне нужно нанять специалиста",
                list:[
                    "Публикуйте проекты и находите фрилансеров",
                    "ИИ подберёт идеальных кандидатов",
                    "Безопасные эскроу-платежи",
                    "Наймите за часы, а не за недели"
                ],
                onPress:() => isOpenSign(Role.CUSTOMER)
            },
            {
                iconText:"✨",
                title:"Я — Фрилансер",
                subtitle:"Я хочу найти работу",
                list:[
                    "Создайте профессиональный профиль",
                    "AI подберёт проекты, которые вам понравятся",
                    "Устанавливайте свои ставки",
                    "Никаких торгов, только возможности"
                ],
                onPress:() => isOpenSign(Role.MASTER)
            },
        ]
    return(
        <ScrollView
            style={styles.form}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={true}
            bounces={true}
        >
            <LinearGradient
                colors={GRADIENTS.PRIMARY_VERTICAL.colors}
                locations={GRADIENTS.PRIMARY_VERTICAL.locations}
                start={GRADIENTS.PRIMARY_VERTICAL.start}
                end={GRADIENTS.PRIMARY_VERTICAL.end}
                style={styles.gradient}
                pointerEvents="box-none"
            >
                <View>  
                    <View style = {styles.header}>
                        <StyledText variant="title" size="large" style = {{textAlign:'center'}}>Light</StyledText>
                        <StyledText variant="title" size="medium-large" style = {{textAlign:'center'}}>Добро пожаловать в Light</StyledText>
                        <StyledText variant="subtitle-grey" size="small" style = {{textAlign:'center'}}>Ваш фриланс-маркетплейс на базе AI</StyledText>
                    </View>
                    <View style = {styles.list}>
                        {
                            cards.map((item, index) => 
                            <CardTypeAuth 
                                iconText = {item.iconText} 
                                title = {item.title} 
                                subtitle = {item.subtitle} 
                                list = {item.list}
                                onPress={item.onPress}
                                key={index}
                            />
                            )
                        }
                    </View>
                    <View style = {styles.box}>
                        <StyledText variant="subtitle-grey" size="small">Уже есть аккаунт?</StyledText>
                        <StyledButton  
                            variant="txt-btn" 
                            variantText="button-text-blue" 
                            style = {{minHeight:21}}
                            onPress={isOpenLogin}
                        >
                            <StyledText variant="button-text-blue" size="small">Войти</StyledText>
                        </StyledButton>
                    </View>
                </View>
                
            </LinearGradient>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1
    },
    gradient: {
        flex: 1,
        paddingHorizontal: 20,
        textAlign:'left',
        paddingTop:57.7,
        paddingBottom:73,
        alignItems:'center'
    },
    box:{
        flexDirection:'row',
        height:21,
        alignItems:'center',
        justifyContent:'center',
        gap:5,
        marginTop:40
    },
    header:{
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        marginBottom:32
    },
    list:{
        gap:16
    }
})
export default AccountTypeSelector