import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//ส่วนของเเทปไปหน้าต่างๆ
import TabHome from "./tab-home";
import TabStackCurriculum from "./tab-stack-curriculum";
import TabStackAbout from "./tab-stack-about";
//import TabStackCurriculumDetail from './tab-stack-curriculum-detail'
import TabStackTeacher from "./tab-stack-teacher";
import TabStackTeacherPanyawatn from "./tab-stack-teacher-panyawatn";
import TabStackTeacherSunun from "./tab-stack-teacher-sunun";
import TabMenu from "./tab-menu";


export default function App() {
  //หน้าเเสดงชื่อหลักสูตร
  const Curriculum = () => {
    const Curri = createStackNavigator();
    return (
      <Curri.Navigator>
        <Curri.Screen
          name="TabStackCurriculum"
          component={TabStackCurriculum}
          options={{ headerTitle: "หลักสูตรที่เปิดสอน" }}
        />
      </Curri.Navigator>
    );
  };

  //หน้าเสดงชื่อเกี่ยวกับเรา
  const About = () => {
    const About = createStackNavigator();
    return (
      <About.Navigator>
        <About.Screen
          name="TabStackAbout"
          component={TabStackAbout}
          options={{ headerTitle: "เกี่ยวกับเรา" }}
        />
      </About.Navigator>
    );
  };

  //หน้าเเสดงชื่อบุคลากร
  const TeacherStack = () => {
    const Teacher = createStackNavigator();
    return (
      <Teacher.Navigator>
        <Teacher.Screen
          name="TabStackTeacher"
          component={TabStackTeacher}
          options={{ headerTitle: "อาจารย์ประจำแผนกวิชา" }}
        />
        <Teacher.Screen
          name="TabStackTeacherPanyawatn"
          component={TabStackTeacherPanyawatn}
          options={{ headerTitle: "อ.ปัญญวัฒน์ สุภาคาร", headerBackTitle: " " }}
        />
		<Teacher.Screen
          name="TabStackTeacherSunun"
          component={TabStackTeacherSunun}
          options={{ headerTitle: "อ.สุนันต์ สุขเจริญ", headerBackTitle: " " }}
        />
      </Teacher.Navigator>
    );
  };


//ส่วนของเมนูด้านล่างจอ
  const Tab = createBottomTabNavigator();
  return (
  
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 14 },
            showLabel: true,
            activeTintColor: "brown",
            inactiveTintColor: "blue",
          }}
        >
          <Tab.Screen
            name="Welcome CT.TKC"
            component={TabHome}
            options={{
              tabBarLabel: "หน้าแรก",
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="md-home" size={18} color={color} />;
              },
            }}
          />

          
          <Tab.Screen
            name="Curriculums"
            component={Curriculum}
            options={{
              tabBarLabel: "หลักสูตร",
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="book-outline" size={20} color={color} />;
              },
            }}
          />

          <Tab.Screen
            name="About"
            component={About}
            options={{
              tabBarLabel: "เกี่ยวกับเรา",
              tabBarIcon: ({ color, size }) => {
                return (
                  <Ionicons name="business-outline" size={20} color={color} />
                );
              },
              
            }}
          />

          
          <Tab.Screen
            name="Teachers"
            component={TeacherStack}
            options={{
              tabBarLabel: "บุคลากร",
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="person" size={18} color={color} />;
              },
            }}
          />

          <Tab.Screen
            name="TabMenu"
            component={TabMenu}
            options={{
              tabBarLabel: "เมนู",
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="menu" size={20} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

  );
}
