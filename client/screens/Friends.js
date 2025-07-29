import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BottomNavBar from '../components/BottomNavbar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import { useSelector } from 'react-redux';

// Sample friends data with images
const friends = [
  {
    id: '1',
    name: 'Sarah Johnson',
    lastActivity: '2 days ago',
    balance: 45.25,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: 'Mike Chen',
    lastActivity: '1 week ago',
    balance: -32.50,
    avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
  },
  {
    id: '3',
    name: 'Emma Davis',
    lastActivity: '3 days ago',
    balance: 78.00,
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    id: '4',
    name: 'Alex Rodriguez',
    lastActivity: '5 days ago',
    balance: -55.00,
    avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    lastActivity: '1 day ago',
    balance: 122.50,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '6',
    name: 'David Wilson',
    lastActivity: '4 days ago',
    balance: -38.00,
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  },
  {
    id: '7',
    name: 'David Wilson',
    lastActivity: '4 days ago',
    balance: -38.00,
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  },
  {
    id: '8',
    name: 'David Wilson',
    lastActivity: '4 days ago',
    balance: -38.00,
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  },
  {
    id: '9',
    name: 'David Wilson',
    lastActivity: '4 days ago',
    balance: -38.00,
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  },
  {
    id: '10',
    name: 'David Wilson',
    lastActivity: '4 days ago',
    balance: -38.00,
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  },
  {
    id: '11',
    name: 'David Wilson',
    lastActivity: '4 days ago',
    balance: -38.00,
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  },
  {
    id: '12',
    name: 'David Wilson',
    lastActivity: '4 days ago',
    balance: -38.00,
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  },
  // Add more if needed
];


const Friends = ({ navigation }) => {

    const [searching, setSearching] = useState(false);
    const [searchText, setSearchText] = useState('');

    // const users = useSelector(state => state.users.list);
    // const status = useSelector(state => state.users.status);

  // Filter friends live as the user types
  const filteredFriends = useMemo(() => {
    const lower = searchText.trim().toLowerCase();
    return friends.filter(f =>
      f.name.toLowerCase().includes(lower)
    );
  }, [searchText]);

  // Calculate totals
  const totalYouOwe = friends
    .filter(f => f.balance < 0)
    .reduce((sum, f) => sum + Math.abs(f.balance), 0)
    .toFixed(2);

  const totalOwedToYou = friends
    .filter(f => f.balance > 0)
    .reduce((sum, f) => sum + f.balance, 0)
    .toFixed(2);

  const renderFriendItem = ({ item }) => {
    const isOwe = item.balance < 0;
    return (
      <View style={styles.friendItem}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.friendInfo}>
          <Text style={styles.friendName}>{item.name}</Text>
          <Text style={styles.friendSubtitle}>Last activity: {item.lastActivity}</Text>
        </View>
        <Text style={[styles.balanceAmount, { color: isOwe ? '#ff5a5f' : '#57db82' }]}>
          {isOwe ? '-' : '+'}${Math.abs(item.balance).toFixed(2)}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Sticky Top Section: Search + Totals */}
      <View style={styles.stickyTopSection}>
        {/* Search Bar */}

        <View style={styles.header}>
        
        {searching ? (
          <SearchBar
            value={searchText}
            onChange={setSearchText}
            onClose={() => {
              setSearching(false);
              setSearchText('');
            }}
            placeholder="Search friends..."
            autoFocus
            style={styles.searchBarRow}
            inputStyle={styles.searchInput}
          />
        ) : (
          <View style={styles.searchIconContainer}>
            <Text style={styles.headerText}>Friends</Text>
            <TouchableOpacity onPress={() => setSearching(true)}>
              <Ionicons name="search-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
        </View>


        {/* Divider Line */}
        <View style={{
                    width: '100%',
                    marginVertical: 10,
                }}>
                    <View style={{
                    borderWidth: 1,
                    borderColor: '#374151',
                    width: '100%',
                    height: 1,
                }}>
                    </View>
        </View>

        {/* Totals Summary */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>Total you owe</Text>
            <Text style={[styles.summaryAmount, { color: '#ff5a5f' }]}>
              ${totalYouOwe}
            </Text>
          </View>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>Total owed to you</Text>
            <Text style={[styles.summaryAmount, { color: '#57db82' }]}>
              ${totalOwedToYou}
            </Text>
          </View>
        </View>
      </View>
      
      {/* Friends List */}
      <FlatList
        data={filteredFriends}
        keyExtractor={item => item.id}
        renderItem={renderFriendItem}
        contentContainerStyle={styles.friendsList}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />

      {/* Bottom Navigation Bar */}
      <BottomNavBar navigation={navigation} activeTab="Friends" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#181d27' 
  },
  stickyTopSection: {
    backgroundColor: '#23283b',
    paddingHorizontal: 16,
    padding: 20,
    paddingTop: 35,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#313454',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  searchIconContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%', 
    paddingHorizontal: 10, 
    height: 44
  },
  searchBarRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 4,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#374151',
    color: '#fff',
    fontSize: 16,
    borderRadius: 14,
    paddingHorizontal: 14,
    marginRight: 7,
    height: 40,
  },
  summaryBox: {
    alignItems: 'center',
  },
  summaryLabel: {
    color: '#b3b9c9',
    fontSize: 14,
    marginBottom: 4,
  },
  summaryAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  friendsList: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 16,
    backgroundColor: '#686c7a',
  },
  friendInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 12,
  },
  friendName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  friendSubtitle: {
    color: '#abb4c8',
    fontSize: 12,
    marginTop: 4,
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 80,
    textAlign: 'right',
  },
});

export default Friends;