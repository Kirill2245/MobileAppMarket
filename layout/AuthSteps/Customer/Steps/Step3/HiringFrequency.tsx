import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const HiringFrequency = () => {
    const list = ["Еженедельно", "Ежемесячно", "Ежеквартально", "Иногда"]
    const [selectHiring, setSelectHiring] = useState<string>("") 
    const rows = [];
    for (let i = 0; i < list.length; i += 2) {
        rows.push(list.slice(i, i + 2));
    }
    
    return (
        <View style = {styles.contain}>
            <StyledText variant="subtitle" size="small">Частота найма</StyledText>
            <View style = {styles.tab}>
                {rows.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((itemRow, index) => (
                            <StyledButton 
                                lable={itemRow} 
                                key={index} 
                                variant={selectHiring === itemRow ? "tags-btn-active" : "tags-btn"}
                                onPress={() => {
                                    setSelectHiring(itemRow) 
                                }}
                            >
                            </StyledButton>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contain:{
        gap:12
    },
    tab:{
        gap:8
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        marginBottom:0
    },
})

export default HiringFrequency;