import StyledText from "@/components/StyledText";
import { Role } from "@/types/role.enum";
import React from "react";
import { StyleSheet, View } from "react-native";

interface SignFormProps {
    type: Role;
    onSwitchToLogin: () => void;
}

const SignForm: React.FC<SignFormProps> = ({ type, onSwitchToLogin }) => {
    return (
        <View style={styles.container}>
            <StyledText>{type}</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 50,
    }
})

export default SignForm