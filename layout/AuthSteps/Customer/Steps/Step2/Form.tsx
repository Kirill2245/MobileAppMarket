import StyledInputLable from "@/components/StyledInputLable";
import StyledText from "@/components/StyledText";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

interface FormProps {
    onDataChange: (data: { nameCompany: string; sizeCompany: string; industry: string }) => void;
}

const Form: React.FC<FormProps> = ({ onDataChange }) => {
    const [nameCompany, setNameCompany] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    
    const itemsSize = [
        { label: '2-10 сотрудников', value: '2-10' },
        { label: '10-30 сотрудников', value: '10-30' },
        { label: '30-100 сотрудников', value: '30-100' },
        { label: '100+ сотрудников', value: '100+' },
    ];

    const itemsIndustry = [
        { label: 'Технологии и IT', value: 'IT' },
        { label: 'Маркетинг и реклама', value: 'Marketing' },
        { label: 'Финансы', value: 'Finance' },
    ];

    useEffect(() => {
        onDataChange({
            nameCompany,
            sizeCompany: selectedSize,
            industry: selectedIndustry
        });
    }, [nameCompany, selectedSize, selectedIndustry]);

    return (
        <View style={styles.form}>
            <View style={styles.contain}>
                <StyledInputLable
                    customLable="Название компании (опционально)"
                    placeholder="ООО"
                    variant="forms-input"
                    value={nameCompany}
                    onChangeText={setNameCompany}
                />
                <StyledText variant="subtitle-grey" size="ower-small">Вы можете пропустить это поле</StyledText>
            </View>
            <StyledInputLable
                customLable="Размер компании"
                drop={true}
                items={itemsSize}
                value={selectedSize}
                onSelect={(item) => setSelectedSize(item.value.toString())}
                variant="forms-input"
            />
            <StyledInputLable
                customLable="Индустрия"
                drop={true}
                items={itemsIndustry}
                value={selectedIndustry}
                onSelect={(item) => setSelectedIndustry(item.value.toString())}
                variant="forms-input"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form:{
        gap:16,
        marginBottom:16
    },
    contain:{
        gap:8
    }
})

export default Form