import { Role } from "@/types/role.enum";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomerFrame from "./CustomerFrame";
import MasterFrame from "./MasterFrame";


interface SignFormProps {
    type: Role;
    onSwitchToLogin: () => void;
}

const SignForm: React.FC<SignFormProps> = ({ type, onSwitchToLogin }) => {
    return (
        <View style={styles.container}>
            {type === Role.MASTER ? <MasterFrame onSwitchToLogin={onSwitchToLogin}/> : <CustomerFrame onSwitchToLogin={onSwitchToLogin}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default SignForm