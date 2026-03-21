import React from "react";
import { StyleSheet, View } from "react-native";
import CardStats from "./card-stats";

interface CardStatsProps{
    id:string
    nameStats:string
    countStats:string
}
interface StatsFrameProps{
    list: Array<CardStatsProps>
}
const StatsFrame:React.FC<StatsFrameProps> = ({list}) => {
    const rows = [];
    for (let i = 0; i < list.length; i += 2) {
        rows.push(list.slice(i, i + 2));
    }

    return (
        <View style = {styles.contain}>
                {rows.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((item) => (
                            <View key={item.id}>
                                <CardStats
                                    nameStats={item.nameStats} 
                                    countStat={item.countStats}
                                />
                            </View>
                        ))}
                    </View>
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: 12,
        marginBottom:0

    },
    contain:{
        gap:12
    }
})

export default StatsFrame