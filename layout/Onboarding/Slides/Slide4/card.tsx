import React from "react";
import { StyleSheet, View } from "react-native";

interface CardProps{
    name:string,
    description:string,
    count:number
}
const Card:React.FC<CardProps> = ({name,description,count}) => {
    return (
        <View></View>
    );
}

const styles = StyleSheet.create({
    card:{}
})

export default Card