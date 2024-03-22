import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_800ExtraBold, Inter_400Regular } from '@expo-google-fonts/inter';

function QueueEntry({index, name, table, problem}){
    return(
        <View style={styles.container}>
            <Text style={styles.index}>{index+1}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.table}> Table #{table}</Text>
        </View>
    )
}

styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'row',
        padding:15,
        backgroundColor: "#1E262D",
        alignItems: "center",
        justifyContent: "left",
        borderRadius: 10,
        marginBottom: 5,
    }, 
    index: {
        color: "#ffffff",
        fontSize: 22,
        fontWeight: "bold",
        width: 30,
    },
    name: {
        color: "#ffffff",
        fontSize: 19,
        fontWeight: "bold",
        textAlign: "left",
        marginRight: 10,
    },
    table: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "left",
    },

})
export default QueueEntry;