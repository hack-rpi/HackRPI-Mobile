import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // fetch your FAQs from a local file or an API
    const fetchFAQs = async () => {
      // Your fetch logic here
    };
    
    fetchFAQs();
  }, []);

  const toggleExpanded = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.expanded = !faq.expanded;
        faq.animation.setValue(faq.expanded ? 0 : 1);
        Animated.timing(faq.animation, {
          toValue: faq.expanded ? 1 : 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
      return faq;
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FAQ</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="times" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {faqs.map((faq, index) => (
        <Animated.View key={index} style={[
          styles.faqItem,
          {
            maxHeight: faq.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 300], // You might need to adjust this value
            }),
          },
        ]}>
          <TouchableOpacity
            style={styles.question}
            onPress={() => toggleExpanded(index)}
          >
            <Text style={styles.questionText}>{faq.question}</Text>
            <FontAwesome name={faq.expanded ? 'chevron-up' : 'chevron-down'} size={18} color="#FFF" />
          </TouchableOpacity>
          <Animated.View style={[
            styles.answer,
            {
              opacity: faq.animation,
              transform: [{
                scaleY: faq.animation,
              }],
            },
          ]}>
            <Text>{faq.answer}</Text>
          </Animated.View>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Your styles here with improvements
});

export default FAQPage;
