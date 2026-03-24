import LampIcon from "@/components/Icons/LampIcon";
import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { GRADIENTS } from "@/constants/gradient.const";
import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import HeaderStep from "../../common/HeaderStep";

const Step4 = () => {
    const {AuthUser} = useAuth()
    const data = [
        "Добавьте 3-5 лучших работ",
        "Опишите свою роль в проекте",
        "Укажите результаты и метрики",
        "Используйте качественные изображения"
    ]
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
            <LinearGradient
                colors={GRADIENTS.PRIMARY_DIAGONAL_THREE.colors}
                locations={GRADIENTS.PRIMARY_DIAGONAL_THREE.locations}
                start={GRADIENTS.PRIMARY_DIAGONAL_THREE.start}
                end={GRADIENTS.PRIMARY_DIAGONAL_THREE.end}
                style={styles.gradient}
                pointerEvents="box-none"
            >
                <View style = {styles.header}>
                    <LampIcon/>
                    <StyledText variant="title" size="small">Советы по портфолио</StyledText>
                </View>
                <View style = {styles.list}>
                    {data.map((item,index) => (
                        <View key={index} style = {styles.listItem}>
                            <Ionicons 
                                name="ellipse" 
                                size={8}
                                color={COLORS.SEMI_BLUE_COLOR}
                             />
                             <StyledText variant="subtitle-grey" size="small">{item}</StyledText>
                        </View>
                    ))}
                </View>
            </LinearGradient>
            <StyledButton lable="Завершить регистрацию" variant="forms-btn" onPress={AuthUser}/>
        </View>
    );
}

const styles = StyleSheet.create({
    step:{
        flex:1,
        backgroundColor:'white'
    },
    addFileFrame:{
        gap:16,
        marginBottom:32
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
        alignItems:'center',
        gap:12
    },
    gradient:{
        height:191,
        borderRadius:16,
        padding:20,
        gap:16,
        marginBottom:80
    },
    header:{
        flexDirection:'row',
        gap:8,
        alignItems:'center'
    },
    list:{
        gap:12
    },
    listItem:{
        flexDirection:'row',
        alignItems:'center',
        gap:12
    }
})

export default Step4