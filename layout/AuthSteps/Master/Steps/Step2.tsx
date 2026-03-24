import StarIconSetting from "@/components/Icons/StarIconSetting";
import StyledButton from "@/components/StyledButton";
import StyledInputLable from "@/components/StyledInputLable";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HeaderStep from "../../common/HeaderStep";
interface Slide2Props {
    nextStep:() => void
}
const Step2:React.FC<Slide2Props> = ({nextStep}) => {
    const data = ["Начальный","Средний", "Эксперт"]
    const [onSelectLeavel, setOnSelectLevel] = useState<number|null>(null)
    return (
        <View style = {styles.step}>
            <HeaderStep title="Профессиональный профиль" subtitle="Расскажите о себе, чтобы клиенты могли вас найти"/>
            <View style = {styles.inputContain}>
                <StyledInputLable
                    customLable="Профессиональный заголовок"
                    placeholder="Дизайн"
                    multiline={false}
                    inputContainerStyle={{ backgroundColor: COLORS.SVG_BG}}
                />
                <StyledInputLable
                    customLable="О себе"
                    placeholder="Опишите свой опыт и навыки..."
                    multiline={true}
                    inputContainerStyle={{ backgroundColor: COLORS.SVG_BG}}
                />
            </View>
            <StyledButton 
                variant="txt-btn" 
                style = {{marginTop:14.4,width:212.25,marginLeft:16}} 
                lable="AI поможет вам написать это" 
                variantText="button-text-blue"
                sizeText="small"
            >
                <View>
                    <StarIconSetting color={COLORS.PRIMARY_BUTTON_TEXT}/>
                    
                </View>
            </StyledButton>
            <View style = {styles.conatin}>
                <StyledInputLable
                    customLable="Местоположение(опционально)"
                    placeholder="Пермь, Россия"
                    inputContainerStyle={{ backgroundColor: COLORS.SVG_BG}}
                />
                <View style = {styles.levelBox}>
                    <StyledText variant="title" size="small">Уровень опыта</StyledText>
                    <View style = {styles.skillsLevelList}>
                        {data.map((item,index) => (
                            <StyledButton 
                                variant="transparment-border" 
                                style = {onSelectLeavel === index ? styles.leavelSkills_select : styles.leavelSkills } 
                                onPress={() => setOnSelectLevel(index++)}
                                key={index}
                            >
                                <StyledText variant={onSelectLeavel === index ? "subtitle" : "subtitle-grey"}>
                                    {item}  
                                </StyledText>
                            </StyledButton>
                        ))}
                    </View>
                </View>
                <StyledInputLable
                    customLable="Лет опыта"
                    inputContainerStyle={{ backgroundColor: COLORS.SVG_BG}}
                />
            </View>
            <StyledButton lable="Продолжить" variant="forms-btn" onPress={nextStep}/>
        </View>
    );
}

const styles = StyleSheet.create({
    step:{
        flex:1,
        backgroundColor:'white'
    },
    inputContain:{
        gap:16
    },
    conatin:{
        gap:16,
        marginBottom:24,
        marginTop:17
    },
    levelBox:{
        gap:12
    },
    skillsLevelList:{
        flexDirection:'row',
        gap:12,
        height:44
    },
    leavelSkills:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderColor:COLORS.PRIMARY_BORDER_GREY,
        borderWidth:1.6,
        borderRadius:14
    },
    leavelSkills_select:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderColor:COLORS.PRIMARY_BORDER_COLOR,
        backgroundColor:COLORS.BG_CARD_ACTIVE,
        borderWidth:1.6,
        borderRadius:14
    }
})
export default Step2