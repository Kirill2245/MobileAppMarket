import React from "react";
import { StyleSheet, View } from "react-native";
import { InputProps } from 'react-native-elements';
import StyledInput from "./StyledInput";
import StyledText from "./StyledText";

type StyledInputProps = InputProps & {
    customLable?:string;
};

const StyledInputLable: React.FC<StyledInputProps> = ({ customLable ,...props }) => {
    const sizeHeight = customLable ? 70 : 48
        return (
            <View style = {[
                    styles.conatinInputLable,
                    {height:sizeHeight}
                ]}>
                {customLable && <StyledText >{customLable}</StyledText>}
                <StyledInput {...props} />
            </View>
        );
};

const styles = StyleSheet.create({

    conatinInputLable:{
        width:'100%',
        gap:4
    },

});

export default StyledInputLable;