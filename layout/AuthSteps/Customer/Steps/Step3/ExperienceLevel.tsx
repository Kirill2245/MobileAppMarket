import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { LevelExperience } from "@/types/level-experience.enum";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

const ExperienceLevel = ({ onLevelChange }: { onLevelChange: (value: LevelExperience) => void }) => {
    const [selectExperienceLevel, setSelectExperienceLevel] = useState<string>("") 
    const data = [
        {
            title:"Начинающий",
            subtitle:"0-2 года"
        },
        {
            title:"Средний",
            subtitle:"2-5 лет"
        },        
        {
            title:"Эксперт",
            subtitle:"5+ лет"
        },
    ]
    
    useEffect(() => {
        if (selectExperienceLevel) {
            onLevelChange(selectExperienceLevel as LevelExperience);
        }
    }, [selectExperienceLevel]);
    
    return (
        <View style={styles.contain}>
            <StyledText variant="subtitle" size="small">Уровень опыта</StyledText>
            <StyledText variant="subtitle-grey" size="ower-small">Выберите один или несколько вариантов</StyledText>
            <View style={styles.list}>
                {data.map((item,index) => (
                    <StyledButton  
                        key={index} 
                        style={{minHeight:71.19}}
                        variant={selectExperienceLevel === item.title ? "tags-btn-active" : "tags-btn"}
                        onPress={() => {
                            setSelectExperienceLevel(item.title) 
                        }}
                    >
                        <View style={styles.textBox}>
                            <StyledText variant="subtitle" size="small" style={{width:'100%'}}>{item.title}</StyledText>
                            <StyledText variant="subtitle-grey" size="ower-small" style={{width:'100%'}}>{item.subtitle}</StyledText>
                        </View>
                    </StyledButton>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contain:{
        gap:12
    },
    list:{
        gap:8
    },
    textBox:{
        width:'100%',
        marginLeft:48
    }
})
export default ExperienceLevel