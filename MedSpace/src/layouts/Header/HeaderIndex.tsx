import React from 'react';
import { Pressable, View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import useActualPatient from '@hooks/useActualPatient';


const HeaderIndex = ({ navigation, route }: NativeStackHeaderProps) => {
    const [actualPatient] = useActualPatient([route]);

    const navigateToHome = () => {
        navigation.navigate("Home");
    };

    const navigateToUserPage = () => {
        navigation.navigate("UserPage");
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={navigateToHome}>
                <Image style={styles.logo} source={require('./logo.png')} />
            </Pressable>
            <Pressable onPress={navigateToHome}>
                <Text style={styles.titleFont}>MEDSPACE</Text>
            </Pressable>
            <Pressable onPress={navigateToUserPage}>
                {actualPatient?.icone && <Image style={styles.image} key={actualPatient?.name}
                    source={{ uri: actualPatient.icone }}
                />}
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 60,
        backgroundColor: 'white',
    },
    titleFont: {
        fontFamily: 'Jua-Regular',
        fontSize: 20,
        color: 'black',
        marginLeft: 8,
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'black'
    },
    logo: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});

export default HeaderIndex; 
