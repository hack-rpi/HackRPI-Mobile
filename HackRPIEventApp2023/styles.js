export const globalStyles = {
  //COLORS
  primary: "#191919", //backgroundBlack
  accent: "#910307", //mainRed
  secondary: "#9E9E9E", //mainGray
  icons: "#FFFFFF", //white
  text: "#000000", //black

  //primary, secondary, accent, accent2, text
  fontSize: 20,
  fontWeight: "bold",

  container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: '#121212',
      borderBottomWidth: 1,
      borderBottomColor: '#333',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    faqItem: {
      backgroundColor: '#252525',
      margin: 8,
      padding: 16,
      borderRadius: 8,
      overflow: 'hidden',
    },
    question: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    questionText: {
      fontWeight: '500',
      color: 'white',
      flex: 1,
    },
    answer: {
      paddingTop: 10,
    },
  };
