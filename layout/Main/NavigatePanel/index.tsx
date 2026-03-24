import { COLORS } from "@/constants/color.const";
import Chats from "@/layout/Screens/Chats";
import Coincidences from "@/layout/Screens/Coincidences";
import Home from "@/layout/Screens/Home";
import Profile from "@/layout/Screens/Profile";
import Search from "@/layout/Screens/Search";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import ChatIcon from '../../../components/Icons/ChatIcon';
import HomeIcon from '../../../components/Icons/HomeIcon';
import ProfileIcon from '../../../components/Icons/ProfileIcon';
import SearchIcon from '../../../components/Icons/SearchIcon';
import StarIcon from '../../../components/Icons/StarIcon';
const Tab = createBottomTabNavigator();

const NavigatePanel = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    const size = 24
                    if (route.name === 'Главная') {
                        return <HomeIcon focused={focused} color={color} size={size} />;
                    } else if (route.name === 'Поиск') {
                        return <SearchIcon focused={focused} color={color} size={size} />;
                    }
                    else if (route.name == 'Совпадения'){
                        return <StarIcon focused={focused} color={color} size={size}/>
                    }
                    else if (route.name == 'Чаты'){
                        return <ChatIcon focused={focused} color={color} size={size}/>
                    }
                    else if (route.name == 'Профиль'){
                        return <ProfileIcon focused={focused} color={color} size={size} />
                    }
                },
                tabBarActiveTintColor: COLORS.PRIMARY_BUTTON_TEXT,
                tabBarInactiveTintColor: COLORS.NO_ENABLE_ICON,
                tabBarStyle: {
                    height: 100,
                    paddingBottom: 0,
                    paddingTop: 0,
                    alignItems:'center',
                    justifyContent:'center',
                    paddingHorizontal:23.68,
                },
                tabBarIconStyle: {
                    marginTop: 8, 
                    marginBottom: 3.8,
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontWeight: '500',
                    marginBottom: 8, 
                },
                headerShown: false,
            })}
        >
            <Tab.Screen 
                name="Главная" 
                component={Home} 

            />
            <Tab.Screen 
                name="Поиск" 
                component={Search} 

            />
            <Tab.Screen
                name="Совпадения"
                component={Coincidences}
            />
            <Tab.Screen
                name="Чаты"
                component={Chats}
            />
            <Tab.Screen
                name="Профиль"
                component={Profile}
            />
        </Tab.Navigator>
    );
}

export default NavigatePanel;