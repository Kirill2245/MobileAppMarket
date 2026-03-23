import { GRADIENTS } from "@/constants/gradient.const";
import MasterSign from "@/layout/AuthSteps/Master";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

interface MasterFrameProps {
    onSwitchToLogin: () => void;
}
const MasterFrame:React.FC<MasterFrameProps> = ({onSwitchToLogin}) => {
    const [isOpenSign, setIsOpenSign] = useState(false)
    return (
        <ScrollView 
            style = {styles.frame}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={true}
            bounces={true}
        >
            {
                isOpenSign ? 
                    <MasterSign onSwitchToLogin={onSwitchToLogin}/> :
                    <View style = {styles.content}>
                        <LinearGradient
                            colors={GRADIENTS.PRIMARY_VERTICAL_LIGHT.colors}
                            locations={GRADIENTS.PRIMARY_VERTICAL_LIGHT.locations}
                            start={GRADIENTS.PRIMARY_VERTICAL_LIGHT.start}
                            end={GRADIENTS.PRIMARY_VERTICAL_LIGHT.end}
                            style={styles.gradient}
                            pointerEvents="box-none"
                        >
                            <Header/>
                            <Main/>
                            <Footer onSwitchToLogin={onSwitchToLogin} onOpenSignUp={() => setIsOpenSign(true)}/>
                        </LinearGradient>
                    </View>
                }
            
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
    },
    gradient: {
        flex: 1,
        paddingHorizontal: 16,
        textAlign:'left',
        paddingTop:39.2,
        paddingBottom:51.35,
        alignItems:'center'
    },
    content:{
        flex:1
    }
})
export default MasterFrame