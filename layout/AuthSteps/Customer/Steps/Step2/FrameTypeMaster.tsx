import StyledButton from "@/components/StyledButton";
import StyledInputLable from "@/components/StyledInputLable";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const FrameTypeMaster = () => {
    const [select, setSelect] = useState('')
    const [selectMaster, setSelectMaster] = useState<number[]>([])
    const items = [
        { label: 'Социальные сети', value: 'option1' },
    ]
    const masters = ["Дизайнеры", "Разработчики", "Копирайтеры", "Маркетологи"]
    return (
        <View style = {styles.frame}>
            <View style = {styles.header}>
                <StyledText variant="title" size="small">Тип специалистов</StyledText>
                <StyledText variant="subtitle-grey" size="ower-small">Выберите тех, кого вы планируете нанимать</StyledText>
            </View>
            <View style = {styles.list}>
                {masters.map((item,index) => (
                    <StyledButton 
                        lable={item}
                        key={index}
                        style = {selectMaster.includes(index)?[
                                {paddingHorizontal:20},
                                { backgroundColor: COLORS.SEMI_BLUE_COLOR },
                                { borderWidth: 1.6 },
                                { borderColor:COLORS.PRIMARY_BORDER_COLOR}
                            ] :[
                                {paddingHorizontal:20},
                                { backgroundColor: 'white' },
                                { borderWidth: 1.6 },
                                { borderColor:COLORS.PRIMARY_BORDER_GREY}
                            ]
                        }
                        variantText="subtitle"
                        sizeText="small"
                        onPress={() => {
                            if (selectMaster.includes(index)){
                                setSelectMaster(selectMaster.filter(item => item !== index))
                            }else{
                                setSelectMaster([...selectMaster, index])
                            }
                        }}
                    />
                ))}
                <StyledButton 
                        lable="Добавить"
                        style = {[
                            { backgroundColor: 'white' },
                            { borderWidth: 1.6 },
                            { borderColor:COLORS.PRIMARY_BORDER_GREY},
                            { borderStyle:'dashed'}
                        ]}
                        variantText="subtitle-grey"
                        sizeText="small"
                    >
                        <Ionicons 
                            name="add-outline" 
                            size={20} 
                            color={COLORS.ICON_GREY_COLOR}
                        />
                    </StyledButton>
            </View>
            <View style = {styles.contain}>
                <StyledText variant="title" size="small">Как вы узнали о нас?</StyledText>
                <StyledInputLable 
                drop = {true}                 
                items={items}
                value={select}
                onSelect={(item) => setSelect(item.value.toString())}
                variant="forms-input"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        gap:8,
        marginBottom:12
    },
    frame:{

    },
    contain:{
        gap:8,
        marginBottom:24
    },
    list:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:8
    }
})

export default FrameTypeMaster