import React from 'react';
import { View, Text, ScrollView, Button, Linking } from 'react-native';
import stylesSupport from '../IU/styles/stylesSupport';

const Support = () => {
  const openEmail = () => {
    Linking.openURL('mailto:support@yourapp.com');
  };

  const openPhone = () => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <ScrollView style={stylesSupport.container}>
      <Text style={stylesSupport.title}>Support</Text>

      <Text style={stylesSupport.sectionTitle}>Frequently Asked Questions</Text>
      <View style={stylesSupport.faqContainer}>
        <Text style={stylesSupport.faqQuestion}>Q1: How can I reset my password?</Text>
        <Text style={stylesSupport.faqAnswer}>
          A1: To reset your password, go to the login screen and click on "Forgot my password". Follow the instructions sent to your email.
        </Text>

        <Text style={stylesSupport.faqQuestion}>Q2: How do I update my profile information?</Text>
        <Text style={stylesSupport.faqAnswer}>
          A2: Go to "Account Settings" from the profile menu and edit your personal details.
        </Text>

        <Text style={stylesSupport.faqQuestion}>Q3: How can I contact customer support?</Text>
        <Text style={stylesSupport.faqAnswer}>
          A3: You can contact us via email or phone, or fill out the contact form below.
        </Text>
      </View>

      <Text style={stylesSupport.sectionTitle}>Contact Us</Text>
      <View style={stylesSupport.contactContainer}>
        <Button title="Support via Email" onPress={openEmail} />
        <Button title="Call Support" onPress={openPhone} />
      </View>

      <Text style={stylesSupport.sectionTitle}>Troubleshooting Tips</Text>
      <View style={stylesSupport.troubleshootingContainer}>
        <Text style={stylesSupport.troubleshootingTip}>
          • Make sure you are connected to a stable internet connection before using the app.
        </Text>
        <Text style={stylesSupport.troubleshootingTip}>
          • Restart the app if you experience any unexpected behavior.
        </Text>
        <Text style={stylesSupport.troubleshootingTip}>
          • Update the app to the latest version to ensure all features work correctly.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Support;