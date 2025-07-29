import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Adjust based on your icon library


const tabs = [
  { name: 'Home', icon: 'home' },
  { name: 'Groups', icon: 'users' },
  { name: 'Friends', icon: 'user-friends' },
  { name: 'Activity', icon: 'chart-line' },
  { name: 'Profile', icon: 'cog' }];

const BottomNavBar = ({
    navigation,
    activeTab = 'Home'
}) => (
  <View style={styles.bottomNav}>
    {tabs.map(tab => (
      <TouchableOpacity
        key={tab.name}
        style={styles.navItem}
        onPress={() => navigation.navigate(tab.name)}
        >
        <Icon name={tab.icon} size={22} color={activeTab === tab.name ? '#fff' : '#a6b1c2'} />
        <Text style={activeTab === tab.name ? styles.navLabelActive : styles.navLabel}>
          {tab.name}
        </Text>
        </TouchableOpacity>
        ))}
  </View>
);

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222637',
    height: 64,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: '#313454',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 6,
  },
  navLabel: {
    color: '#a6b1c2',
    fontSize: 13,
    marginTop: 3,
  },
  navLabelActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 3,
  }
});

export default BottomNavBar;