import { profileApi } from "@/api/endpoints/profile";
import StyledButton from "@/components/StyledButton";
import { useAuth } from "@/context/AuthContext";
import { useApiError } from "@/hooks/useFormError";
import HeaderStep from "@/layout/AuthSteps/common/HeaderStep";
import { HiringFrequencyEnum } from "@/types/hiring-frequency.enum";
import { LevelExperience } from "@/types/level-experience.enum";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ExperienceLevel from "./ExperienceLevel";
import HiringFrequency from "./HiringFrequency";
import ProjectBudget from "./ProjectBudget";
import SettingsAI from "./SettingsAI";

interface Step3Props {
    step2Data: {
        nameCompany?: string;
        sizeCompany: string;
        industry: string;
        typeSpecialists: string[];
    };

}

const Step3: React.FC<Step3Props> = ({ step2Data }) => {
    const [budget, setBudget] = useState(30000);
    const [hiringFrequency, setHiringFrequency] = useState<HiringFrequencyEnum | null>(null);
    const [experienceLevel, setExperienceLevel] = useState<LevelExperience | null>(null);
    const { handleApiError, showSuccess } = useApiError();
    const {checkAuth} = useAuth()
    const handleComplete = async() => {
        const completeData = {
            customerProfile: {
                nameCompany: step2Data.nameCompany,
                sizeCompany: step2Data.sizeCompany,
                industry: step2Data.industry,
                typeSpecialists: step2Data.typeSpecialists,
                budget: budget,
                hiringFrequency: hiringFrequency as HiringFrequencyEnum,
                preferenceLevelExperience: experienceLevel as LevelExperience
            }
        };
        try{
            await profileApi.createCustomerProfile(completeData)
            await checkAuth()
        }
        catch(err){
            handleApiError(err, 'Create Customer profile :(');
        }
    };

    return (
        <View style={styles.step}>
            <HeaderStep title="Предпочтения найма" subtitle="Помогите нам подобрать лучших кандидатов для вас"/>
            <View style={styles.contain}>
                <ProjectBudget onBudgetChange={setBudget} />
                <HiringFrequency onFrequencyChange={setHiringFrequency} />
                <ExperienceLevel onLevelChange={setExperienceLevel} />
                <SettingsAI />
                <StyledButton lable="Завершить регистрацию" variant="forms-btn" onPress={handleComplete} />
            </View>
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