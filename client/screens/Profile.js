import { View, Text, Image, ScrollView, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleTheme = () => setDarkTheme(previousState => !previousState);

  return (
    <ScrollView>
      <View style={{
          flex: 1,
          width: '100%',
          backgroundColor: '#111827',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,}}>

  {/* Profile Image */}
          <View style={{
                  backgroundColor: 'transparent',
                  borderColor: '#4b556356',
                  borderWidth: 5,
                  padding: 15,
                  width: 125,
                  height: 125,
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  marginTop: 30,
                  }}>
          <Image source={ {uri: 'https://static.vecteezy.com/system/resources/previews/019/900/322/non_2x/happy-young-cute-illustration-face-profile-png.png'}} style={{width: '100%', height: '100%'}} />
          <View style={{position: 'absolute', bottom: 0, right: -5, backgroundColor: '#6366f1', padding: 10, borderRadius: '50%'}}>
            <Icon name="camera" size={18} color="#fdfdffff"/>
          </View>
          </View>

  {/* Username */}
          <View style={{  
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              }}>
              <Text style={{fontSize: 32, fontWeight: '700', marginBottom: 5, color: '#6366F1'}}>John Doe</Text>
              <Text style={{fontSize: 18, marginBottom: 10, color: '#939AA6', fontWeight: '500'}}>@johndoe</Text>
          </View>

  {/* Account Information */}
          <View style={{
              width: '100%',
              padding: 20,
              borderColor: '#1F2937',
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#1F2937',
              marginBottom: 20,
              }}>

              <Text style={{fontSize: 24, fontWeight: '700', color: '#FFFFFF', marginBottom: 30}}>Account Information</Text>

              <View style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,}}>
                <View style={{width: 50, height: 50, borderRadius: 10, backgroundColor: '#1F2F50', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="user-alt" size={24} color="#60A5FA" />
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', height: 50, width: '100%'}}>
                  <Text style={{fontSize: 18, fontWeight: 600, color: '#FFFFFF', marginBottom: 5}}>Full Name</Text>
                  <Text style={{fontSize: 14, color: '#939AA6', marginBottom: 5}}>John Doe</Text>
                </View>
                <View style={{width: 30, height: 30, borderRadius: '50%', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="angle-right" size={16} color="#fdfdffff" />
                </View>
              </View>
  {/* Devider line */}
              <View style={{
                  width: '100%',
                  marginBottom: 20,
              }}>
                  <View style={{
                  borderWidth: 0.5,
                  borderColor: '#4B5563',
                  width: '100%',
                  height: 1,
              }}>
                  </View>
              </View>

              <View style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,}}>
                <View style={{width: 50, height: 50, borderRadius: 10, backgroundColor: '#1C3634', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="at" size={24} color="#4ADE80" />
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', height: 50, width: '100%'}}>
                  <Text style={{fontSize: 18, fontWeight: 600, color: '#FFFFFF', marginBottom: 5}}>Username</Text>
                  <Text style={{fontSize: 14, color: '#939AA6', marginBottom: 5}}>@username</Text>
                </View>
                <View style={{width: 30, height: 30, borderRadius: '50%', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="angle-right" size={16} color="#fdfdffff" />
                </View>
              </View>

  {/* Devider line */}
              <View style={{
                  width: '100%',
                  marginBottom: 20,
              }}>
                  <View style={{
                  borderWidth: 0.5,
                  borderColor: '#4B5563',
                  width: '100%',
                  height: 1,
              }}>
                  </View>
              </View>

              <View style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,}}>
                <View style={{width: 50, height: 50, borderRadius: 10, backgroundColor: '#31254F', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="envelope" size={24} color="#C084FC" />
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', height: 50, width: '100%'}}>
                  <Text style={{fontSize: 18, fontWeight: 600, color: '#FFFFFF', marginBottom: 5}}>Email</Text>
                  <Text style={{fontSize: 14, color: '#939AA6', marginBottom: 5}}>john.doe@email.com</Text>
                </View>
                <View style={{width: 30, height: 30, borderRadius: '50%', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="angle-right" size={16} color="#fdfdffff" />
                </View>
              </View>
              
          </View>

  {/* Security */}
          <View style={{
              width: '100%',
              padding: 20,
              borderColor: '#1F2937',
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#1F2937',
              marginBottom: 20,
              }}>

              <Text style={{fontSize: 24, fontWeight: '700', color: '#FFFFFF', marginBottom: 30}}>Security</Text>
              <View style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,}}>
                <View style={{width: 50, height: 50, borderRadius: 10, backgroundColor: '#3B2B2B', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="lock" size={24} color="#FB923C" />
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', height: 50, width: '100%'}}>
                  <Text style={{fontSize: 18, fontWeight: 600, color: '#FFFFFF', marginBottom: 5}}>Change Password</Text>
                  <Text style={{fontSize: 14, color: '#939AA6', marginBottom: 5}}>Update your password</Text>
                </View>
                <View style={{width: 30, height: 30, borderRadius: '50%', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="angle-right" size={16} color="#fdfdffff" />
                </View>
              </View>

              
          </View>

  {/* Preferences */}
          <View style={{
              width: '100%',
              padding: 20,
              borderColor: '#1F2937',
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#1F2937',
              marginBottom: 20,
              }}>

              <Text style={{fontSize: 24, fontWeight: '700', color: '#FFFFFF', marginBottom: 30}}>Preferences</Text>
              <View style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,}}>
                <View style={{width: 50, height: 50, borderRadius: 10, backgroundColor: '#252B4D', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="moon" size={24} color="#818CF8" />
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', height: 50, width: '100%'}}>
                  <Text style={{fontSize: 18, fontWeight: 600, color: '#FFFFFF', marginBottom: 5}}>Dark Mode</Text>
                  <Text style={{fontSize: 14, color: '#939AA6', marginBottom: 5}}>Toggle theme</Text>
                </View>
                <View style={{width: 30, height: 30, borderRadius: '50%', alignItems: 'center', justifyContent: 'center'}}>
                  <Switch
                    trackColor={{false: '#374151', true: '#6366F1'}}
                    thumbColor={darkTheme ? '#FFFFFF' : '#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleTheme}
                    value={darkTheme}
                  />
                </View>
              </View>
  {/* Devider line */}
              <View style={{
                  width: '100%',
                  marginBottom: 20,
              }}>
                  <View style={{
                  borderWidth: 0.5,
                  borderColor: '#4B5563',
                  width: '100%',
                  height: 1,
              }}>
                  </View>
              </View>

              <View style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,}}>
                <View style={{width: 50, height: 50, borderRadius: 10, backgroundColor: '#3C262F', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name="bell" size={24} color="#F87171" />
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', height: 50, width: '100%'}}>
                  <Text style={{fontSize: 18, fontWeight: 600, color: '#FFFFFF', marginBottom: 5}}>Notifications</Text>
                  <Text style={{fontSize: 14, color: '#939AA6', marginBottom: 5}}>Push notifications</Text>
                </View>
                <View style={{width: 30, height: 30, borderRadius: '50%', alignItems: 'center', justifyContent: 'center'}}>
                  <Switch
                    trackColor={{false: '#374151', true: '#6366F1'}}
                    thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
              
          </View>

          <TouchableOpacity style={{
              width: '100%',
              padding: 15,
              borderRadius: 10,
              backgroundColor: '#EF4444',
              marginBottom: 20,
          }}>
              <View style={{marginLeft: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10}}>
                <Icon name="sign-out-alt" size={24} color="#FFFFFF" />
                <Text style={{fontSize: 24, fontWeight: '600', color: '#FFFFFF'}}>Logout</Text>
              </View>
            </TouchableOpacity>
                  
      </View>
    </ScrollView>
  )
}

export default Profile