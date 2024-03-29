import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_800ExtraBold, Inter_400Regular } from '@expo-google-fonts/inter';
import BottomPopup from './BottomPopup';
import QueueEntry from '../Components/QueueEntry/QueueEntry';
import DetailedQueueEntry from '../Components/DetailedQueueEntry/DetailedQueueEntry';

function MentorQue() {
    const [fontsLoaded] = useFonts({
        Inter_800ExtraBold,
        Inter_400Regular,
    });

    const [queue, setQueue] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isHelping, setIsHelping] = useState(false);
    const [helping, setHelping] = useState(null);

    useEffect(() => {
        const fetchQueue = async () => {
          const queueData = await getQueue();
          setQueue(queueData);
        };
      
        fetchQueue();
      }, []);

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
            },
            {
                name: "John Doe",
                table: 20,
                description: "I need help with my project"
            },
            {
                name: "Jane Doe",
                table: 21,
                description: "I need help with my project"
            },            {
                name: "John Doe",
                table: 20,
                description: "I need help with my project"
            },
            {
                name: "Jane Doe",
                table: 21,
                description: "I need help with my project"
            },            {
                name: "John Doe",
                table: 20,
                description: "I need help with my project"
            },
            {
                name: "Jane Doe",
                table: 21,
                description: "I need help with my project"
            },            {
                name: "John Doe",
                table: 20,
                description: "I need help with my project"
            },
            {
                name: "Jane Doe",
                table: 21,
                description: "I need help with my project"
            },
        ];
    };

    const handleStartHelping = () => {
        // Set the current person being helped
        setHelping(queue[0]);
        setIsHelping(true);
        handleNext();
        //handle backend logic
    };

    const handleNext = () => {
        // Remove the first person from the queue
        if(!isHelping) return;
        if(queue.length === 0){
            setHelping(null);
            setIsHelping(false);
            return;
        }
        if(queue.length === 1) {
            setHelping(queue[0]);
            setQueue([]);
            return;
        };
        setHelping(queue[0]);
        const newQueue = queue.slice(1);

        setQueue(newQueue);
    };

    if (!fontsLoaded) {
        return <View style={styles.container}><Text>Loading...</Text></View>;
    }


    return (
        <View style={styles.container}>
            <BottomPopup visible={showPopup} onDismiss={()=>{setShowPopup(false)}}>
                {queue.map((entry, index) => (
                    <QueueEntry key={index} index={index} name={entry.name} table={entry.table} problem={entry.description} />
                ))}
            </BottomPopup>            
            <View style={styles.form}>
                <Text style={styles.header}>Not Currently Helping</Text>
                <View style={styles.personContainer}>
                    {helping ? 
                    isHelping ? 
                        <DetailedQueueEntry name={helping? helping.name : ""} table={helping? helping.table : ""} problem={helping? helping.description : ""} />
                    :
                        <TouchableOpacity style={styles.startButton} onPress={handleStartHelping}>
                            <Text style={styles.interfaceText}>Start Helping</Text>
                        </TouchableOpacity> 
                    :   <TouchableOpacity style={styles.startButton} onPress={handleStartHelping}>
                            <Text style={styles.interfaceText}>Start Helping</Text>
                        </TouchableOpacity> 
                    } 
                </View>
                <Text style={styles.header}>Next in Queue</Text>
                <View style={styles.personContainer}>
                    {queue[0] ? <DetailedQueueEntry name={queue[0].name} table={queue[0].table} problem={queue[0].description} />: ""} 
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>{setShowPopup(!showPopup)}}>
                    <Text style={styles.interfaceText}>View Queue</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.darkButton}>
                <Text style={styles.lightInterfaceText}>Call for Backup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.darkButton} onPress={handleNext}>
                <Text style={styles.lightInterfaceText}>Next</Text>
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
        position: 'relative',
    },
    form: {
        // flex:1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#1E262D',
        // height:'60%',
        borderRadius: 15,
        padding: 15,
        marginTop: 34,
        // marginBottom: 24,
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
        marginTop:10,
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