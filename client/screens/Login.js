import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation}) => {
  return (
    <View style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#111827',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }}>

{/* Logo */}
        <View style={{
                  backgroundColor: '#6366f1', 
                  padding:15, 
                  borderRadius: '50%', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: 20,
                  marginTop: 20,
                  }}>
                  <Image source={require('../assets/splitease-white.png')} style={{width: 50, height: 50}} />
        </View>

{/* Slogan */}
        <View style={{  
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            }}>
            <Text style={{fontSize: 32, fontWeight: 700, marginBottom: 5, color: '#6366F1'}}>SplitEase</Text>
            <Text style={{fontSize: 18, marginBottom: 10, color: '#FFFFFF', fontWeight: 500}}>Splite expenses. Settle easily.</Text>
        </View>

{/* Welcome */}
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
        }}>
            <Text style={{fontSize: 30, fontWeight: 800, color: '#FFFFFF'}}>Welcome Back</Text>
        </View>    

{/* Input Fields */}
        <View style={{
            width: '100%',
            paddingHorizontal: 20,
            }}>
            <Text style={{fontSize: 16, color: '#FFFFFF', marginBottom: 10}}>username</Text>
            <View style={{
                backgroundColor: '#1F2937',
                borderColor: '#4B5563',
                borderWidth: 1,
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                marginBottom: 20,
                flexDirection: 'row',
                gap: 10,
            }}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text ><Icon name="user-alt" size={16} color="#9CA3AF" /></Text>
                </View>
                <TextInput placeholder='Enter your username' placeholderTextColor={'#9CA3AF'} style={{fontSize: 14, color:'#9CA3AF'}} />
            </View>

            <Text style={{fontSize: 16, color: '#FFFFFF', marginBottom: 10}}>Password</Text>
            <View style={{
                backgroundColor: '#1F2937',
                borderColor: '#4B5563',
                borderWidth: 1,
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                marginBottom: 20,
                flexDirection: 'row',
                gap: 10,
            }}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text ><Icon name="lock" size={16} color="#9CA3AF" /></Text>
                </View>
                <TextInput placeholder='Enter your password' placeholderTextColor={'#9CA3AF'} style={{fontSize: 14, color:'#9CA3AF'}} secureTextEntry={true} />
            </View>
        </View>

{/* Login Btn */}
        <TouchableOpacity 
        onPress={() => navigation.navigate('Profile')}
        style={{
            width: '100%',
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
        }}>
            <View style={{
                backgroundColor: '#6366F1',
                padding: 15,
                borderRadius: 10,
                width: '100%',
                alignItems: 'center',
            }}>
                <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 600}}>Log In</Text>
            </View>
        </TouchableOpacity>

{/* Forgot Password */}
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
        }}>
            <TouchableOpacity>
                <Text style={{color: '#5B5FEB', fontSize: 16, fontWeight: 600, }}>Fotgot your password?</Text>
            </TouchableOpacity>
        </View>

{/* Devider line */}
        <View style={{
            width: '100%',
            paddingHorizontal: 20,
            marginBottom: 20,
        }}>
            <View style={{
            borderWidth: 1,
            borderColor: '#4B5563',
            width: '100%',
            height: 1,
        }}>
            </View>
        </View>

{/* Sign Up */}
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
        }}>
            <Text style={{color: '#9CA3AF', fontSize: 16}}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: '#6366F1', fontSize: 16, fontWeight: 600}}>Sign Up</Text>
            </TouchableOpacity>
        </View>

{/* Terms & Conditions */}
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 20,
            flexDirection: 'row',
            marginBottom: 20,
        }}>
            <Text style={{color: '#9CA3AF', fontSize: 12}}>By logging in, you agree to our</Text>
            <TouchableOpacity>
                <Text style={{color: '#6366F1', fontSize: 12, fontWeight: 600}}> Terms & Conditions</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default Login