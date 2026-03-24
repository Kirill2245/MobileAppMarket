import StarIconSetting from "@/components/Icons/StarIconSetting";
import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import Tags from "@/components/Tags";
import { COLORS } from "@/constants/color.const";
import React from "react";
import { StyleSheet, View } from "react-native";
interface RecomendationsProps{
    setSkillsList:(item:string[]) => void,
    skillsList:string[],
    data:string[]
}
const Recomendations:React.FC<RecomendationsProps> = ({setSkillsList,skillsList,data}) => {
    return (
        <View style = {styles.recommendations}>
            <View style = {styles.recommendations_header}>
                <View style = {styles.header_title}>
                    <StarIconSetting color={COLORS.SEMI_BLUE_COLOR}/>
                    <StyledText size="small" style = {{color:COLORS.SEMI_BLUE_COLOR}}>AI рекомендации</StyledText>
                </View>
                <StyledButton
                    variant="txt-btn" 
                    lable="Добавить все" 
                    sizeText="ower-small" 
                    style = {{marginTop:5}}
                    onPress={() => {
                        const newSkills = data.filter(skill => !skillsList.includes(skill));
                        setSkillsList([...skillsList, ...newSkills]);
                    }}
                />
            </View>
            <View style={styles.tagsContain}>
                {data.length !== 0 && data.map((item, index) => (
                    <Tags 
                        title={item} 
                        key={index} 
                        isBorder = {true}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

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
    },
    tagsContain: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 12,
    },
})

export default Recomendations