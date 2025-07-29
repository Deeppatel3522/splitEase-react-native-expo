import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import GroupCard from '../components/Screen/GroupCard';
import BottomNavBar from '../components/BottomNavbar';
import { useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';

const groups = [
  {
    id: "g1",
    groupName: "Summer Vacation 2024",
    members: 5,
    avatarUris: [
      "https://randomuser.me/api/portraits/men/11.jpg",
      "https://randomuser.me/api/portraits/women/23.jpg",
      "https://randomuser.me/api/portraits/men/9.jpg",
      "https://randomuser.me/api/portraits/men/11.jpg",
    ],
    balance: -185.50,
    totalSpent: 1245.75,
    headerColor: "#6C7EE1",
    bodyColor: "#252745"
  },
  {
    id: "g2",
    groupName: "Roommates",
    members: 3,
    avatarUris: [
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/women/14.jpg"
    ],
    balance: 67.25,
    totalSpent: 456.80,
    headerColor: "#46B18C",
    bodyColor: "#202931"
  },
  {
    id: "g3",
    groupName: "Office Lunch Club",
    members: 7,
    avatarUris: [
      "https://randomuser.me/api/portraits/men/8.jpg",
      "https://randomuser.me/api/portraits/women/25.jpg",
      "https://randomuser.me/api/portraits/men/21.jpg"
    ],
    balance: -15.00,
    totalSpent: 879.50,
    headerColor: "#DD8055",
    bodyColor: "#252745"
  },
  {
    id: "g4",
    groupName: "Office Lunch Club",
    members: 7,
    avatarUris: [
      "https://randomuser.me/api/portraits/men/8.jpg",
      "https://randomuser.me/api/portraits/women/25.jpg",
      "https://randomuser.me/api/portraits/men/21.jpg"
    ],
    balance: -15.00,
    totalSpent: 879.50,
    headerColor: "#DD8055",
    bodyColor: "#252745"
  }
];

const Groups = ({ navigation }) => {

    const [searching, setSearching] = useState(false);
    const [searchText, setSearchText] = useState('');
    
    const filteredGroups = useMemo(() => {
        const lower = searchText.trim().toLowerCase();
        return groups.filter(g => g.groupName.toLowerCase().includes(lower));
    }, [searchText]);

    const dispatch = useDispatch();
    const groupsList = useSelector(state => state.groups.list);


return (
    <View style={styles.container}>

      
      <View style={styles.header}>
        {searching ? (
          <SearchBar
            value={searchText}
            onChange={setSearchText}
            onClose={() => {
              setSearching(false);
              setSearchText('');
            }}
            placeholder="Search activity..."
            autoFocus
            style={styles.searchBarRow}
            inputStyle={styles.searchInput}
          />
        ) : (
          <View style={styles.searchIconContainer}>
            <Text style={styles.headerText}>Groups</Text>
            <TouchableOpacity onPress={() => setSearching(true)} style={styles.searchBtn}>
              <Ionicons name="search-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <ScrollView style={styles.scrollView}>

        <View style={styles.groupsList}>
          {filteredGroups.map(g => (
            <GroupCard
              key={g.id}
              groupName={g.groupName}
              members={g.members}
              avatarUris={g.avatarUris}
              balance={g.balance}
              totalSpent={g.totalSpent}
              headerColor={g.headerColor}
              bodyColor={g.bodyColor}
            />
          ))}
        </View>
      </ScrollView>

      <BottomNavBar navigation={navigation} activeTab="Groups" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#181d27" 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#23283b',
    padding: 20,
    paddingTop: 35,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#313454',
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
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    backgroundColor: 'transparent',
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  scrollView: {
    flex: 1,
    paddingBottom: 12,
  },
  searchBtn: {
    padding: 6,
    backgroundColor: 'transparent',
    borderRadius: 23,
    borderColor: 'red'
  },
  searchBarRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  groupsList: {
    paddingTop: 22,
    paddingBottom: 12
  }
});

export default Groups;