import StyledButton from "@/components/StyledButton";
import { useAuth } from "@/context/AuthContext";
import HeaderStep from "@/layout/AuthSteps/common/HeaderStep";
import { StyleSheet, View } from "react-native";
import ExperienceLevel from "./ExperienceLevel";
import HiringFrequency from "./HiringFrequency";
import ProjectBudget from "./ProjectBudget";
import SettingsAI from "./SettingsAI";

const Step3 = () => {
    const {AuthUser} = useAuth()
    return (
        <View style = {styles.step}>
            <HeaderStep title="Предпочтения найма" subtitle="Помогите нам подобрать лучших кандидатов для вас"/>
            <View style = {styles.contain}>
                <ProjectBudget/>
                <HiringFrequency/>
                <ExperienceLevel/>
                <SettingsAI/>
            </View>
            <StyledButton lable="Завершить регистрацию" variant="forms-btn" onPress={AuthUser}/>
        </View>
    );
}

const styles = StyleSheet.create({
    step:{
        flex:1
    },
    contain:{
        gap:24
    }
})

export default Step3