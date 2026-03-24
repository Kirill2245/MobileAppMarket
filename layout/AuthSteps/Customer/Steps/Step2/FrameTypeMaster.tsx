import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

const FrameTypeMaster = () => {
    return (
        <View style = {styles.frame}>
            <View style = {styles.header}>
                <StyledText variant="title" size="small">Тип специалистов</StyledText>
                <StyledText variant="subtitle-grey" size="ower-small">Выберите тех, кого вы планируете нанимать</StyledText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        gap:8,
        marginBottom:12
    },
    frame:{

    }
})

export default FrameTypeMaster