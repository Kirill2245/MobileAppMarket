import RangeSlider from "@/components/RangeSlider";
import StyledText from "@/components/StyledText";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const ProjectBudget = ({ onBudgetChange }: { onBudgetChange: (value: number) => void }) => {
    const [price, setPrice] = useState(30000);
    
    const handlePriceChange = (newPrice: number) => {
        setPrice(newPrice);
        onBudgetChange(newPrice);
    }
    
    const start = 10000
    const end = 50000
    return (
        <View>
            <StyledText variant="subtitle" size="small">{`Бюджет проекта (${price}₽)`}</StyledText>
            <View style={styles.priceContain}>
                <StyledText variant="subtitle-grey" size="ower-small">{start}</StyledText>
                <StyledText variant="subtitle-grey" size="ower-small">{end}</StyledText>
            </View>
            <RangeSlider
                minValue={start}
                maxValue={end}
                value={price}
                onChange={handlePriceChange}
                step={1000}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    priceContain:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:12
    }
})
export default ProjectBudget