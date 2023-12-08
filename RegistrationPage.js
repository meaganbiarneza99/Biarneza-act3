import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const showToast = (message) => {
  
    console.log(message);
  };

  const handleRegistration = async () => {
    try {
      setLoading(true);
      if (name === '' || email === '' || password === '') {
        showToast('Please input required data');
        setIsError(true);
        setLoading(false);
        return false;
      }

      if (password !== repassword) {
        showToast('Password does not match');
        setIsError(true);
        setLoading(false);
        return false;
      }

      const url = 'http://192.168.0.109/api/v1/register';
      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      };

    } catch (error) {
      console.error('Registration failed:', error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join CuisineClick and Taste the Extraordinary! </Text>
      <Text style={styles.description}>Create Account:</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={repassword}
        onChangeText={(text) => setRepassword(text)}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default RegistrationPage;
