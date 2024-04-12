import React from "react";
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions } from 'react-native'
import InfoButton from "./InfoButton";

const { width, height } = Dimensions.get('window');

export default function InfoButtonWrapper({circleColor, text, icon, func}) {
    return (
        <View style={styles.wrapper}>
            <View flex={0.9} style={styles.row}>
                <View flex={2}></View>
                <View flex={0.5} style={styles.line}>
                    <View style={styles.stop}>
                        <View style={styles.inner}></View>
                    </View>
                </View>
                <View flex={2}></View>
            </View>
            <View marginTop={height*0.01} marginBottom={height*0.01}>
                <InfoButton circleColor={circleColor} text={text} icon = {icon} func = {func}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        
    },
    row: {
        flexDirection: "row",
    },
    line: {
        backgroundColor: "#74B7EF",
        alignItems: "center",
        justifyContent: "center",
    },
    stop: {
        width: width * 0.07,
        height: width * 0.07,
        borderRadius: width * 0.07,
        backgroundColor: "#74B7EF",
        alignItems: "center",
        justifyContent: "center",
    },
    inner: {
        width: width * 0.04,
        height: width * 0.04,
        borderRadius: width * 0.04,
        backgroundColor: "#25303C",
    },
})