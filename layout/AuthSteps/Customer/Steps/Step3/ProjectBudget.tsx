import RangeSlider from "@/components/RangeSlider";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const ProjectBudget = () => {
    const [price, setPrice] = useState(30000);
    const handlePriceChange = (newPrice: number) => {
        setPrice(newPrice);
        // Здесь можно добавить дополнительную логику
        console.log('Цена изменена:', newPrice);
        // Например, отправить запрос на сервер
        // fetchPrices(newPrice);
    };
    return (
        <View>
            <RangeSlider
                minValue={0}
                maxValue={100000}
                value={price}
                onChange={handlePriceChange}
                step={1000}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({

})
export default ProjectBudget