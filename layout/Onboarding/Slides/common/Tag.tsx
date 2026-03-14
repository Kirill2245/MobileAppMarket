import StyledText from "@/components/StyledText";
import React from "react";
import { StyleSheet, View } from "react-native";
interface TagProps{
    title:string
}
const Tag:React.FC<TagProps> = ({title}) => {
    return (
        <View style = {styles.contain}>
            <StyledText>{title}</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    contain:{

    }
})
export default Tag