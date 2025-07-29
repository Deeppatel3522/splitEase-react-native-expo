import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreenGroupCard = ({
  groupName = "Road Trip",
  membersCount = 5,
  balance = -42.50,
  headerColor = "#5583f7", 
  bodyColor = "#22283b",
  negative = balance < 0 ? true : false,
}) => (

<View style={styles.cardWrapper}>
    <View style={[styles.header, { backgroundColor: headerColor }]}>
      <Text style={styles.groupName}>{groupName}</Text>
    <LinearGradient
      colors={['#00000085', 'transparent']}
      style={styles.shadow}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      pointerEvents="none"
    />
    </View>


    <View style={[styles.body, { backgroundColor: bodyColor }]}>
      <Text style={styles.membersText}>{membersCount} members</Text>
      <Text
        style={[
          styles.balance,
          { color: negative ? "#ff5a5f" : "#57db82" }
        ]}
      >
        {balance < 0 ? `-$${Math.abs(balance).toFixed(2)}` : `+$${balance.toFixed(2)}`}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardWrapper: {
    width: 135,
    height: 135,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    marginBottom: 10,
    elevation: 2,
  },
  header: {
    height: '60%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // paddingHorizontal: 14,
    paddingBottom: 15,
  },
  groupName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 14,
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    zIndex: 3,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#22283b',
  },
  membersText: {
    color: '#e2e8ef',
    fontSize: 12,
    marginBottom: 0,
  },
  balance: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default HomeScreenGroupCard;