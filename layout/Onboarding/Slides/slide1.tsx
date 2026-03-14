import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { GRADIENT_PRYMARY_BG_REVERSE } from "@/constants/color.const";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
interface Slide1Props {
    onNext?: () => void; 
}
const Slide1:React.FC<Slide1Props> = ({ onNext }) => {
    return (

        <ImageBackground
           source={require('../../../assets/images/bg.png')}
            style={styles.slide}
            resizeMode="cover"
        >
          <LinearGradient
              colors={GRADIENT_PRYMARY_BG_REVERSE.PRYMARY.LIST_COLORS}
              locations={GRADIENT_PRYMARY_BG_REVERSE.PRYMARY.COUNT_COLORS}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradient}
          >
            <View style = {styles.header}>
              <StyledText variant="title" size="large" style = {{width:290,height:176}}>
                Найдите идеальное совпадение. За считанные минуты.
                </StyledText>
              <StyledText variant="subtitle" size="medium" style = {{width:280,height:72}}>
                Опишите ваш проект. Наш AI найдет идеального фрилансера или клиента.
                </StyledText>
            </View>
            <View style = {styles.contain}>
              <StyledButton lable="Начать прямо сейчас" variantText="button-text-grey"></StyledButton>
              <StyledButton 
                lable="Как это работает" 
                variantText="button-text-grey" 
                variant="transparment"
                onPress={onNext}
              >
              </StyledButton>
            </View>
          </LinearGradient>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingLeft: 13,
    textAlign:'left',
    paddingTop:79,
    paddingBottom:73,
    borderRadius: 10,
    opacity:0.8,
  },
  slide:{
    flex:1,

  },
  header:{
    flex:1,
    gap:9
  },
  contain:{
    paddingRight:16,
    paddingLeft:3,
    gap:18
  }
});
export default Slide1