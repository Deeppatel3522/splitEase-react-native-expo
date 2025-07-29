import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "../global.css";
import ScreenList from '../list/ScreenList';
import { Provider, useDispatch } from 'react-redux';
import store from '../store/Store';
import { fetchUsers } from '../context/slices/userSlice';
import { fetchGroups } from '../context/slices/groupSlice';
import { fetchExpenses } from '../context/slices/expenseSlice';
import { useEffect } from 'react';

function AppContent() {
  const disptch = useDispatch();

  useEffect(() => {
    // Fetch users when the app starts
    disptch(fetchUsers());
    disptch(fetchGroups());
    disptch(fetchExpenses());
  }, [disptch]);

  return (
    <View style={{flex: 1, }}>
      <StatusBar style="light"/>
      <ScreenList />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
