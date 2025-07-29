import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import BottomNavBar from '../components/BottomNavbar';
import SearchBar from '../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';

const activities = [
  { id: '1', icon: 'shopping-cart', type: 'grocery', title: 'User 1 added "Item 1" in "Category 1"', time: 'Today, 10:15 a.m.', amount: 13.78, currency: 'CAD', direction: 'debit' },
  { id: '2', icon: 'flash-on', type: 'utility', title: 'User 2 added "Item 2" in "Category 2"', time: 'Today, 11:30 a.m.', amount: 17.56, currency: 'CAD', direction: 'debit' },
  { id: '3', icon: 'shopping-cart', type: 'grocery', title: 'User 3 added "Item 3" in "Category 3"', time: 'Today, 11:45 a.m.', amount: 21.34, currency: 'CAD', direction: 'credit' },
  { id: '4', icon: 'flash-on', type: 'utility', title: 'User 4 added "Item 4" in "Category 4"', time: 'Today, 12:00 a.m.', amount: 25.12, currency: 'CAD', direction: 'debit' },
  { id: '5', icon: 'shopping-cart', type: 'grocery', title: 'User 5 added "Item 5" in "Category 5"', time: 'Today, 12:15 a.m.', amount: 28.90, currency: 'CAD', direction: 'debit' },
  { id: '6', icon: 'flash-on', type: 'utility', title: 'User 6 added "Item 6" in "Category 6"', time: 'Today, 13:30 a.m.', amount: 32.68, currency: 'CAD', direction: 'credit' },
  { id: '7', icon: 'shopping-cart', type: 'grocery', title: 'User 7 added "Item 7" in "Category 7"', time: 'Today, 13:45 a.m.', amount: 36.46, currency: 'CAD', direction: 'debit' },
  { id: '8', icon: 'flash-on', type: 'utility', title: 'User 8 added "S24 Ultra" in "Category 8"', time: 'Today, 14:00 a.m.', amount: 40.24, currency: 'CAD', direction: 'debit' },
  { id: '9', icon: 'shopping-cart', type: 'grocery', title: 'User 9 added "Item 9" in "Category 9"', time: 'Today, 14:15 a.m.', amount: 44.02, currency: 'CAD', direction: 'credit' },
  { id: '10', icon: 'flash-on', type: 'utility', title: 'User 10 added "Item 10" in "Category 10"', time: 'Today, 15:30 a.m.', amount: 47.80, currency: 'CAD', direction: 'debit' },
  { id: '11', icon: 'shopping-cart', type: 'grocery', title: 'User 11 added "Item 11" in "Category 11"', time: 'Today, 15:45 a.m.', amount: 51.58, currency: 'CAD', direction: 'debit' },
  { id: '12', icon: 'flash-on', type: 'utility', title: 'User 12 added "Item 12" in "Category 12"', time: 'Today, 16:00 a.m.', amount: 55.36, currency: 'CAD', direction: 'credit' },
  { id: '13', icon: 'shopping-cart', type: 'grocery', title: 'User 13 added "Item 13" in "Category 13"', time: 'Today, 16:15 a.m.', amount: 59.14, currency: 'CAD', direction: 'debit' },
  { id: '14', icon: 'flash-on', type: 'utility', title: 'User 14 added "Item 14" in "Category 14"', time: 'Today, 17:30 a.m.', amount: 62.92, currency: 'CAD', direction: 'debit' },
  { id: '15', icon: 'shopping-cart', type: 'grocery', title: 'User 15 added "Tomato" in "Category 15"', time: 'Today, 17:45 a.m.', amount: 66.70, currency: 'CAD', direction: 'credit' },
  { id: '16', icon: 'flash-on', type: 'utility', title: 'User 16 added "Item 16" in "Category 16"', time: 'Today, 18:00 a.m.', amount: 70.48, currency: 'CAD', direction: 'debit' },
  { id: '17', icon: 'shopping-cart', type: 'grocery', title: 'User 17 added "Item 17" in "Category 17"', time: 'Today, 18:15 a.m.', amount: 74.26, currency: 'CAD', direction: 'debit' },
  { id: '18', icon: 'flash-on', type: 'utility', title: 'User 18 added "Item 18" in "Category 18"', time: 'Today, 19:30 a.m.', amount: 78.04, currency: 'CAD', direction: 'credit' },
  { id: '19', icon: 'shopping-cart', type: 'grocery', title: 'User 19 added "Item 19" in "Category 19"', time: 'Today, 19:45 a.m.', amount: 81.82, currency: 'CAD', direction: 'debit' },
  { id: '20', icon: 'flash-on', type: 'utility', title: 'User 20 added "Item 20" in "Category 20"', time: 'Today, 20:00 a.m.', amount: 85.60, currency: 'CAD', direction: 'debit' },
  { id: '21', icon: 'shopping-cart', type: 'grocery', title: 'User 21 added "Item 21" in "Category 21"', time: 'Today, 20:15 a.m.', amount: 89.38, currency: 'CAD', direction: 'credit' },
  { id: '22', icon: 'flash-on', type: 'utility', title: 'User 22 added "Item 22" in "Category 22"', time: 'Today, 21:30 a.m.', amount: 93.16, currency: 'CAD', direction: 'debit' },
  { id: '23', icon: 'shopping-cart', type: 'grocery', title: 'User 23 added "Item 23" in "Category 23"', time: 'Today, 21:45 a.m.', amount: 96.94, currency: 'CAD', direction: 'debit' },
  { id: '24', icon: 'flash-on', type: 'utility', title: 'User 24 added "Item 24" in "Category 24"', time: 'Today, 22:00 a.m.', amount: 100.72, currency: 'CAD', direction: 'credit' },
  { id: '25', icon: 'shopping-cart', type: 'grocery', title: 'User 25 added "Item 25" in "Category 25"', time: 'Today, 22:15 a.m.', amount: 104.50, currency: 'CAD', direction: 'debit' },
  { id: '26', icon: 'flash-on', type: 'utility', title: 'User 26 added "Item 26" in "Category 26"', time: 'Today, 23:30 a.m.', amount: 108.28, currency: 'CAD', direction: 'debit' },
  { id: '27', icon: 'shopping-cart', type: 'grocery', title: 'User 27 added "Item 27" in "Category 27"', time: 'Today, 23:45 a.m.', amount: 112.06, currency: 'CAD', direction: 'credit' },
  { id: '28', icon: 'flash-on', type: 'utility', title: 'User 28 added "Item 28" in "Category 28"', time: 'Today, 00:00 a.m.', amount: 115.84, currency: 'CAD', direction: 'debit' },
  { id: '29', icon: 'shopping-cart', type: 'grocery', title: 'User 29 added "Item 29" in "Category 29"', time: 'Today, 00:15 a.m.', amount: 119.62, currency: 'CAD', direction: 'debit' },
  { id: '30', icon: 'flash-on', type: 'utility', title: 'User 30 added "Item 30" in "Category 30"', time: 'Today, 01:30 a.m.', amount: 123.40, currency: 'CAD', direction: 'credit' },
];

const ActivityItem = ({ item }) => (
  <View style={styles.activityItem}>
    <View style={styles.iconContainer}>
      <MaterialIcons
        name={
          item.type === 'utility' ? 'flash-on'
            : item.type === 'grocery' ? 'shopping-cart'
              : 'receipt'
        }
        size={32}
        color="#418bfc"
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
    <Text
      style={[
        styles.amount,
        { color: item.direction === 'credit' ? '#38b18c' : '#fb8055' }
      ]}
    >
      {(item.direction === 'credit' ? 'You get back ' : 'You owe ') +
        item.currency +
        item.amount.toFixed(2)}
    </Text>
  </View>
);

const BATCH_SIZE = 15;

const RecentActivity = ({navigation}) => {
  const [showAll, setShowAll] = useState(false);

  // const partialData = activities.slice(0, BATCH_SIZE);
  // const dataToShow = (!showAll && activities.length > BATCH_SIZE)
  //   ? [...partialData, { id: 'view_all_button', type: 'view_all' }]
  //   : activities;

  const renderItem = ({ item }) => {
    if (item.type === 'view_all') {
      return (
        <TouchableOpacity
          style={styles.viewAllBtn}
          onPress={() => setShowAll(true)}
        >
          <Text style={styles.viewAllText}>View all activity</Text>
        </TouchableOpacity>
      );
    }
    return <ActivityItem item={item} />;
  };

  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState('');

  let filteredActivities = activities;
    if (searchText.trim()) {
      const query = searchText.trim().toLowerCase();
      filteredActivities = activities.filter(
        act =>
          act.title.toLowerCase().includes(query) ||
          act.type.toLowerCase().includes(query)
      );
    }
    const partialData = filteredActivities.slice(0, BATCH_SIZE);
    const dataToShow = (!showAll && filteredActivities.length > BATCH_SIZE)
      ? [...partialData, { id: 'view_all_button', type: 'view_all' }]
      : filteredActivities;

    const disptch = useDispatch();
    const expenses = useSelector(state => state.expenses.list);

  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.headerText}>Recent Activity</Text>
            <TouchableOpacity onPress={() => setSearching(true)}>
              <Ionicons name="search-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Text style={{ color: '#fff', padding: 10, fontSize: 16 }}>
        {expenses.length} {expenses.length === 1 ? 'activity' : 'activities'} found
      </Text>

      <FlatList
        data={dataToShow}
        keyExtractor={(item, idx) => item.id || idx.toString()} // Fallback for special entry
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <BottomNavBar navigation={navigation} activeTab="Activity" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#181d27' 
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
  searchBtn: {
    padding: 6,
    backgroundColor: 'transparent',
    borderRadius: 23,
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
  list: {
    padding: 10,
    paddingBottom: 0,
    marginBottom: 60,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    borderRadius: 14,
    marginBottom: 14,
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  iconContainer: {
    width: 46,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  textContainer: { flex: 1 },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 3,
  },
  time: {
    color: '#ccc',
    fontSize: 12,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  viewAllBtn: {
    backgroundColor: '#116548',
    margin: 12,
    borderRadius: 22,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  viewAllText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
});

export default RecentActivity;
