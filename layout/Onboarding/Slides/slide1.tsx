import StyledText from "@/components/StyledText";
import { GRADIENT_PRYMARY_BG_REVERSE } from "@/constants/color.const";
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, View } from "react-native";
const Slide1 = () => {
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
  // image_bg:{
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   width: '100%',
  //   height: '100%',
  //   zIndex: 1, 
  //   resizeMode: 'cover', 
  // }
});
export default Slide1