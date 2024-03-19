import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_800ExtraBold, Inter_400Regular } from '@expo-google-fonts/inter';

function MentorQue() {
    const [fontsLoaded] = useFonts({
        Inter_800ExtraBold,
        Inter_400Regular,
    });
    
    if (!fontsLoaded) {
        return <View style={styles.container}><Text>Loading...</Text></View>;
    }



    const getQueue = async () => {
        // Get the queue from the database
        // return dummy data for now
        return [
            {
                name: "John Doe",
                table: 20,
                description: "I need help with my project"
            },
            {
                name: "Jane Doe",
                table: 21,
                description: "I need help with my project"
            }
        ];
    };
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.header}>Not Currently Helping</Text>
                <View style={styles.personContainer}>
                    <TouchableOpacity style={styles.startButton}>
                        <Text style={styles.interfaceText}>Start Helping</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.header}>Next in Queue</Text>
                <View style={styles.personContainer}>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.interfaceText}>View Queue</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.darkButton}>
                <Text style={styles.lightInterfaceText}>Call for Backup</Text>
            </TouchableOpacity>
            
        </View >
    );
}

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Inter_400Regular',
        fontSize: 24,
        color: '#F5F5F5',
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 10,
    },
    header2: {
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 22,
        color: '#F5F5F5',
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 10,
    },
    interfaceText: {
        fontSize: 20,
        color: '#25303C',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    lightInterfaceText: {
        fontSize: 20,
        color: '#F5F5F5',
        fontWeight: 'bold',
        marginLeft: 10,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
        width: '100%',
        paddingHorizontal: 20,
    },
    form: {
        // flex:1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#1E262D',
        // height:'60%',
        borderRadius: 12,
        padding: 15,
        marginTop: 34,
        marginBottom: 24,
    },
    personContainer: {
        borderRadius: 10,
        backgroundColor: '#25303C',
        width: "100%",
        height: 120,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#88B63A',
        width: "100%",
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    startButton: {
        borderRadius: 10,
        backgroundColor: '#88B63A',
        width: "80%",
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    darkButton: {
        borderRadius: 10,
        backgroundColor: '#1E262D',
        width: "100%",
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        width: '100%',

      },

});

export default MentorQue;