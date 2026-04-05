import StyledButton from "@/components/StyledButton";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import HeaderStep from "../../../common/HeaderStep";
import Form from "./Form";
import FrameTypeMaster from "./FrameTypeMaster";
interface Step2Props {
    nextStep: () => void;
    onDataChange: (data: {
        nameCompany?: string;
        sizeCompany: string;
        industry: string;
        typeSpecialists: string[];
    }) => void;
}

const Step2: React.FC<Step2Props> = ({ nextStep, onDataChange }) => {
    const [companyData, setCompanyData] = useState({
        nameCompany: '',
        sizeCompany: '',
        industry: ''
    });
    
    const [specialistsData, setSpecialistsData] = useState<string[]>([]);

    // Передаем данные наверх при изменении
    useEffect(() => {
        onDataChange({
            nameCompany: companyData.nameCompany,
            sizeCompany: companyData.sizeCompany,
            industry: companyData.industry,
            typeSpecialists: specialistsData
        });
    }, [companyData, specialistsData]);

    return (
        <View style={styles.step}>
            <HeaderStep title="Профиль компании" subtitle="Расскажите нам о вашей компании и потребностях"/>
            <Form onDataChange={setCompanyData} />
            <FrameTypeMaster onDataChange={setSpecialistsData} />
            <StyledButton lable="Продолжить" variant="forms-btn" onPress={nextStep} />
        </View>
    );
}

const styles = StyleSheet.create({
    step:{
        flex:1
    },
    form:{
        gap:16
    }
})

export default Step2