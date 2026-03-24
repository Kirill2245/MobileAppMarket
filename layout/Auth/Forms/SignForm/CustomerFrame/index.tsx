import CustomerSign from "@/layout/AuthSteps/Customer";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";


interface CustomerFrameProps {
    onSwitchToLogin: () => void;
}
const CustomerFrame:React.FC<CustomerFrameProps> = ({onSwitchToLogin}) => {
    const [isOpenSign, setIsOpenSign] = useState(false)
    return (
        <ScrollView 
            style = {styles.frame}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={true}
            bounces={true}
        >
                <CustomerSign onSwitchToLogin={onSwitchToLogin}/> 
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    frame:{
        flex: 1,
        backgroundColor:'white'
    },
    contentContainer: {
        flexGrow: 1
    }
})
export default CustomerFrame