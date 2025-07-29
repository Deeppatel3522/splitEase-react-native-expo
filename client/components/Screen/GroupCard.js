import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const groupGradients = {
  "#6C7EE1": ["#6C7EE1", "#a24b92ff"],
  "#46B18C": ["#46B18C", "#508be3ff"],
  "#DD8055": ["#DD8055", "#f758daff"]
};

const GroupCard = ({
  groupName,
  members,
  avatarUris = [],
  balance,
  totalSpent,
  headerColor,
  bodyColor = '#181b20',
  cardWidth = '100%',
}) => (
  <View style={[styles.cardWrapper, { width: cardWidth }]}>
    {/* Header */}

    <LinearGradient
        colors={groupGradients[headerColor] || [headerColor, headerColor]} // Replace with your preferred gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
    >
        <Text style={styles.groupName}>{groupName}</Text>
    </LinearGradient>
    
    {/* Body */}
    <View style={[styles.body, { backgroundColor: bodyColor }]}>
      <View style={styles.avatarsRow}>
        {avatarUris.slice(0, 3).map((uri, idx) => (
          <Image
            key={idx}
            source={{ uri }}
            style={[
              styles.avatar,
              { left: idx * 18, zIndex: 10 - idx }
            ]}
          />
        ))}
        {avatarUris.length > 3 && (
          <View style={[styles.avatar, styles.extraAvatar, { left: 54 }]}>
            <Text style={styles.extraAvatarText}>{`+${avatarUris.length - 3}`}</Text>
          </View>
        )}
      </View>
      <View style={styles.bodyRow}>
        <View>
          <Text style={styles.balanceLabel}>Your balance</Text>
          <Text style={[
            styles.balance,
            { color: balance < 0 ? '#EB6262' : '#49bb89' }
          ]}>
            {balance < 0
              ? `-$${Math.abs(balance).toFixed(2)}`
              : `+$${Math.abs(balance).toFixed(2)}`
            }
          </Text>
        </View>
        <View style={styles.infoRight}>
          <Text style={styles.membersText}>{members} members</Text>
          <Text style={styles.totalLabel}>Total spent</Text>
          <Text style={styles.totalSpent}>${parseFloat(totalSpent).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardWrapper: {
    height: 250,
    borderRadius: 18,
    marginBottom: 22,
    paddingHorizontal: 22,
    backgroundColor: 'transparent',
    elevation: 4,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  header: {
    height: '40%',
    justifyContent: 'flex-end',
    paddingHorizontal: 22,
    paddingBottom: 22,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  groupName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.2,
  },
  shadow: {
    position: 'absolute',
    top: 52,
    left: 0,
    width: '100%',
    height: 12,
    zIndex: 2,
  },
  body: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    position: 'relative',
    minHeight: 92,
    zIndex: 0,
  },
  avatarsRow: {
    flexDirection: 'row',
    marginBottom: 16,
    marginLeft: 2,
    height: 36,
    position: 'relative',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#22283b',
    position: 'absolute',
    backgroundColor: '#cbd2e5'
  },
  extraAvatar: {
    backgroundColor: '#494d5a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  extraAvatarText: {
    color: '#fff',
    fontSize: 13,
  },
  bodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%'
  },
  balanceLabel: {
    fontSize: 13,
    color: '#a3a7ad',
    fontWeight: '600',
    marginBottom: 2,
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 1,
  },
  infoRight: {
    alignItems: 'flex-end'
  },
  membersText: {
    color: '#dadada',
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 4,
    textAlign: 'right'
  },
  totalLabel: {
    color: '#a3a7ad',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'right',
  },
  totalSpent: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21
  },
});

export default GroupCard;