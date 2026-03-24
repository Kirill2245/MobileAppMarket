import React from "react";
import { StyleSheet, View } from "react-native";
import { InputProps } from 'react-native-elements';
import StyledInput from "./StyledInput";
import StyledText from "./StyledText";

type StyledInputProps = InputProps & {
    customLable?: string;
    multiline?: boolean; 
    numberOfLines?: number; 
};

const StyledInputLable: React.FC<StyledInputProps> = ({ 
    customLable, 
    multiline = false,
    numberOfLines = 4,
    ...props 
}) => {
    const sizeHeight = customLable ? (multiline ? 120 : 80.2) : (multiline ? 100 : 48);

    return (
        <View style={[
            styles.conatinInputLable,
            { height: sizeHeight }
        ]}>
            {customLable && <StyledText variant="title" size="small">{customLable}</StyledText>}
            <StyledInput 
                {...props} 
                multiline={multiline}
                numberOfLines={numberOfLines}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    conatinInputLable: {
        width: '100%',
        gap: 10
    },
});

export default StyledInputLable;