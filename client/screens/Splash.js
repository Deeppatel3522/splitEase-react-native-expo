import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      width: '100%',
      backgroundColor: '#6366f1',
      alignItems: 'center',
      justifyContent: 'center',
      }}>
        <View style={{
            backgroundColor: '#FFFFFF', 
            padding:10, 
            borderRadius: '50%', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: 20
            }}>
            <Image source={require('../assets/splitease.png')} style={{width: 100, height: 100}} />
        </View>
      <Text style={{fontSize: 32, fontWeight: 700, marginBottom: 5, color: '#FFFFFF'}}>SplitEase</Text>
      <Text style={{fontSize: 18, marginBottom: 10, color: '#FFFFFF', fontWeight: 500}}>Splite expenses. Settle easily.</Text>

      <TouchableOpacity 
      onPress={() => navigation.navigate('Login')}
      style={{
        backgroundColor: '#ffffffff',
        padding: 10,
        position: 'absolute',
        bottom: 50,
        borderRadius: 10,
        marginTop: 20,
      }}>
        <Text style={{fontSize: 18, fontWeight: 700, paddingHorizontal: 10, color: '#6366F1'}}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Splash