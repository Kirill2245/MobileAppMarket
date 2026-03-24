import StyledButton from "@/components/StyledButton";
import StyledInputLable from "@/components/StyledInputLable";
import Tags from "@/components/Tags";
import { COLORS } from "@/constants/color.const";
import HeaderStep from "@/layout/AuthSteps/common/HeaderStep";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Price from "./Price";
import Recomendations from "./Recomendations";

interface Slide3Props {
    nextStep:() => void
}
const Step3:React.FC<Slide3Props> = ({nextStep}) => {
    const [skillsList, setSkillsList] = useState<string[]>([]);
    const [currentSkill, setCurrentSkill] = useState<string>("");

    const handleAddSkill = () => {
        if (currentSkill.trim() && !skillsList.includes(currentSkill.trim())) {
            const updatedSkills = [...skillsList, currentSkill.trim()];
            setSkillsList(updatedSkills);
            setCurrentSkill(""); 
        }
    };

    const handleRemoveSkill = (skillToRemove: string) => {
        const updatedSkills = skillsList.filter(skill => skill !== skillToRemove);
        setSkillsList(updatedSkills);
    };

    const handleKeyPress = (e: any) => {
        if (e.nativeEvent.key === 'Enter') {
            handleAddSkill();
        }
    };
    
    const data = ["User Research", "Wireframing", "Design Systems"]
    return (
        <View style={styles.step}>
            <HeaderStep
                title="Навыки и ставка" 
                subtitle="Выберите навыки и укажите стоимость работы"
            />
            <StyledInputLable
                customLable="Навыки"
                placeholder="Поиск навыков..."
                inputContainerStyle={{ backgroundColor: COLORS.SVG_BG }}
                value={currentSkill}
                onChangeText={setCurrentSkill}
                onSubmitEditing={handleAddSkill}
                onKeyPress={handleKeyPress}
                rightIcon={
                    <Ionicons 
                        name="add-outline" 
                        size={20} 
                        color={COLORS.ICON_GREY_COLOR}
                        onPress={() => handleAddSkill()}
                    />
                }
            />
            <View style={styles.tagsContain}>
                {skillsList.length !== 0 && skillsList.map((item, index) => (
                    <Tags 
                        title={item} 
                        key={index} 
                        color={COLORS.SEMI_BLUE_COLOR} 
                        icon="close" 
                        iconSize={14}
                        onPress={() => handleRemoveSkill(item)}  // 👈 Передаем функцию удаления
                    />
                ))}
            </View>
            <Recomendations data={data} skillsList={skillsList} setSkillsList={setSkillsList}/>
            <Price/>
            <StyledButton lable="Продолжить" variant="forms-btn" onPress={nextStep}/>
        </View>
    );
}

const styles = StyleSheet.create({
    step: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16, // Добавьте отступы для лучшего вида
    },
    tagsContain: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 12,
    },
    recommendations:{
        padding:16,
        backgroundColor:COLORS.SVG_BG,
        borderRadius:14,
        marginTop:16
    },
    recommendations_header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:19.5
    },
    header_title:{
        flexDirection:'row',
        gap:6
    }
})

export default Step3;