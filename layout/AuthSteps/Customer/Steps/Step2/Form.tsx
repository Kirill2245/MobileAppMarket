import StyledInputLable from "@/components/StyledInputLable";
import StyledText from "@/components/StyledText";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const Form = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const itemsSize = [
        { label: '2-10 сотрудников', value: 'option1' },
        { label: '10-30 сотрудников', value: 'option2' },
        { label: '30-100 сотрудников', value: 'option3' },
    ];

    const itemsIndustry = [
        { label: 'Технологии и IT', value: 'option1' },
    ];
    return (
        <View style = {styles.form}>
            <View style = {styles.contain}>
                <StyledInputLable
                    customLable="Название компании (опционально)"
                    placeholder="ООО"
                    variant="forms-input"
                />
                <StyledText variant="subtitle-grey" size="ower-small">Вы можете пропустить это поле</StyledText>
            </View>
            <StyledInputLable
                customLable="Размер компании"
                drop = {true}
                items={itemsSize}
                value={selectedSize}
                onSelect={(item) => setSelectedSize(item.value.toString())}
                variant="forms-input"
            />
            <StyledInputLable
                customLable="Индустрия"
                drop = {true}
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