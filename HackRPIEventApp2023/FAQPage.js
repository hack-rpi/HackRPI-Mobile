import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // make sure you have @react-navigation/native installed
import { FontAwesome } from '@expo/vector-icons'; // make sure you have @expo/vector-icons installed

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Replace 'faq-data.json' with the path to your FAQ data or URL if fetching from an API
    const fetchFAQs = async () => {
      try {
        const response = await fetch('faq-data.json');
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchFAQs();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FAQ</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="times" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity
            style={styles.question}
            onPress={() => setFaqs(faqs.map((f, i) => 
              i === index ? {...f, expanded: !f.expanded} : f
            ))}
          >
            <Text style={styles.questionText}>{faq.question}</Text>
            <FontAwesome name={faq.expanded ? 'chevron-up' : 'chevron-down'} size={18} color="#FFF" />
          </TouchableOpacity>
          {faq.expanded && <Text style={styles.answer}>{faq.answer}</Text>}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
});

export default FAQPage;
