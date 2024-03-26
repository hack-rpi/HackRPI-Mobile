import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_800ExtraBold, Inter_400Regular } from '@expo-google-fonts/inter';

function DetailedQueueEntry({name, table, problem}){
    return(
        <View style={styles.queueEntryContainer}>
            <View style={styles.row}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.table}> Table #{table}</Text>
            </View>
            <Text style={styles.problem}>{problem}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    queueEntryContainer:{
        display:'flex',
        flexDirection: 'column',
        padding:10,
        backgroundColor: "#25303C",
        alignItems: "flex-start",
        justifyContent: "left",
        borderRadius: 10,
        marginBottom: 5,
        width:'100%',
        height: '100%',
    }, 
    row: {
        display:'flex',
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: "left",

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
        marginLeft:5,
    },
    table: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "left",
    },
    problem: {
        backgroundColor: '#D9D9D9',
        color: "#25303C",
        borderRadius: 10,
        width: "100%",
        height:"70%",
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop:5,
    }
})
export default DetailedQueueEntry;