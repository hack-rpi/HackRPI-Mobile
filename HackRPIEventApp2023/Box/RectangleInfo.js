import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Icon } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RectangleInfo = ({ workshop_title, time, location, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpansion}>
      <View style={[styles.rectangle, expanded ? styles.expanded : null]}>
        <View>
          <Text style={styles.workshop_title}>{workshop_title}</Text>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.location}>{location}</Text>
          {expanded && <Text style={styles.description}>{description}</Text>}
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name={expanded ? "up" : "down"} size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 250,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  expanded: {
    height: 200, // Adjust the height as needed
  },
  workshop_title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time:{
    fontSize: 14,
  },
  location:{
    fontSize: 14,
  },
  description: {
    marginTop: 10,
  },
});

export default RectangleInfo;