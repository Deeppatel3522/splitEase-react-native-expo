import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import BottomNavBar from "../components/BottomNavbar";
import HomeScreenGroupCard from "../components/Screen/HomeScreenGroupCard";

const Home = ({navigation}) => {

    const recentActivity = [
  {
    id: "1",
    icon: <Icon name="utensils" size={22} color="#1e7bff" />,
    iconBackground: "#1E3A8A",
    title: "Dinner at Olive Garden",
    group: "Apartment Group",
    lastActivityTime: "2 days ago",
    recentActivity: "You paid $90.00",
    amount: "+$45.00",
    amountColor: "#57db82",
    background: "#1F2937",
  },
  {
    id: "2",
    icon: <Icon name="shopping-cart" size={20} color="#38b2ac" />,
    iconBackground: "#14532D",
    title: "Grocery Shopping",
    group: "Roommates",
    lastActivityTime: "3 days ago",
    recentActivity: "Alex paid $97.50",
    amount: "-$32.50",
    amountColor: "#ff5a5f",
    background: "#1F2937",
  },
  {
    id: "3",
    icon: <Icon name="ticket-alt" size={22} color="#9b59b6" />,
    iconBackground: "#581C87",
    title: "Movie Night",
    group: "Friends",
    lastActivityTime: "1 week ago",
    recentActivity: "You paid $60.00",
    amount: "+$15.00",
    amountColor: "#57db82",
    background: "#1F2937",
  },
];

const groups = [
  {
    id: "g1",
    label: "Roommates",
    color: "#5583f7",
    members: 3,
    balance: 125.00
  },
  {
    id: "g2",
    label: "Road Trip",
    color: "#58e27f",
    members: 5,
    balance: -42.50
  },
  {
    id: "g3",
    label: "Roommates",
    color: "#5583f7",
    members: 3,
    balance: 125.00
  },
  {
    id: "g4",
    label: "Road Trip",
    color: "#58e27f",
    members: 5,
    balance: -42.50
  },
];


  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.headerRow}>
        <Text style={styles.appTitle}>SplitEase</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={styles.avatarPlaceholder} > 
                <Image source={ {uri: 'https://static.vecteezy.com/system/resources/previews/019/900/322/non_2x/happy-young-cute-illustration-face-profile-png.png'}} style={styles.avtarImage} />
            </View>
        </TouchableOpacity>
      </View>

      {/* Balance Summary */}
      <View style={styles.balanceCard}>
        <View style={styles.balanceLeft}>
          <Text style={styles.balanceLabel}>TOTAL BALANCE</Text>
          <Text style={styles.balanceAmount}>$245.50</Text>
          <Text style={styles.balancePositive}>You are owed</Text>
        </View>
        <TouchableOpacity style={styles.settleButton}>
          <Text style={styles.settleButtonText}>Settle Up</Text>
        </TouchableOpacity>
        <View style={styles.balanceFooter}>
          <Text style={styles.balanceOwe}>You owe{'\n'}<Text style={styles.balanceOweAmount}>$75.00</Text></Text>
          <Text style={styles.balanceOwed}>{`You are owed\n`}<Text style={styles.balanceOwedAmount}>$320.50</Text></Text>
        </View>
      </View>

      <ScrollView style={styles.flexGrow} showsVerticalScrollIndicator={false}>
        {/* Recent Activity */}
        <View>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionHeader}>Recent Activity</Text>
            <TouchableOpacity >
              <Text style={styles.seeAllLink}>See All</Text>
            </TouchableOpacity>
          </View>

          {recentActivity.map((item) => (
  <View key={item.id} style={[styles.activityItem, { backgroundColor: item.background }]}>
    <View style={styles.activityRow}>
      
      <View style={styles.activityLeft}>
        <View style={[styles.activityIcon, {backgroundColor: item.iconBackground}]}>{item.icon}</View>
        <View style={styles.activityDetails}>
          <Text style={styles.activityTitle}>{item.title}</Text>
          <Text style={styles.activitySubtitle}>
            {item.group} • {item.lastActivityTime}
          </Text>
        </View>
      </View>

      
      <View style={styles.activityAmountBlock}>
        <Text style={[styles.activityAmount, { color: item.amountColor }]}>
          {item.amount}
        </Text>
        <Text style={styles.activitySubtitle}>{item.recentActivity}</Text>
      </View>
      
    </View>
  </View>
))}

        </View>

        {/* Groups Section */}
        <View>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionHeader}>Your Groups</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Groups')}>
              <Text style={styles.seeAllLink}>See All</Text>
            </TouchableOpacity>
          </View>
          
            <FlatList
                horizontal
                data={groups}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <HomeScreenGroupCard
                    groupName={item.label}
                    membersCount={item.members}
                    balance={item.balance}
                    headerColor={item.color}
                    bodyColor="#23283b"
                    />
                )}
                contentContainerStyle={styles.groupsRow}
            />

        </View>
      </ScrollView>

      {/* Bottom Navigation (for static demo; consider libraries for routing in real apps) */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={22} color="#a6b1c2" />
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="users" size={22} color="#a6b1c2" />
          <Text style={styles.navLabel}>Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user-friends" size={22} color="#a6b1c2" />
          <Text style={styles.navLabel}>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="chart-pie" size={22} color="#a6b1c2" />
          <Text style={styles.navLabel}>Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cog" size={22} color="#a6b1c2" />
          <Text style={styles.navLabel}>Settings</Text>
        </TouchableOpacity>
      </View> */}

      <BottomNavBar navigation={navigation} activeTab="Home" />

        <TouchableOpacity style={styles.addButton}>
            <Icon name="plus" size={28} color="#fff" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#181d27", paddingTop: 36 },
  headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 18, marginBottom: 10 },
  appTitle: { fontSize: 22, color: "#fff", fontWeight: "bold" },
  avatarPlaceholder: {
    width: 38, height: 38, borderRadius: 19, backgroundColor: "#c4e0fb",
    borderWidth: 2, borderColor: "#eee",
  },
  avtarImage: { width: '100%', height: '100%', borderRadius: 19 },

  balanceCard: {
    backgroundColor: "#23283b", borderRadius: 18, padding: 20,
    marginHorizontal: 16, marginBottom: 24, marginTop: 2,
  },
  balanceLeft: {},
  balanceLabel: { color: "#b3b9c9", fontSize: 13, fontWeight: "500", marginBottom: 5 },
  balanceAmount: { fontSize: 30, color: "#fff", fontWeight: "bold" },
  balancePositive: { fontSize: 14, color: "#57db82", marginTop: 2 },

  settleButton: { position: "absolute", right: 18, top: 20, backgroundColor: "#6f79ff", borderRadius: 10, paddingVertical: 8, paddingHorizontal: 18 },
  settleButtonText: { color: "#fff", fontWeight: "bold", fontSize: 15, letterSpacing: 0.5 },
  balanceFooter: { flexDirection: "row", justifyContent: "space-between", marginTop: 24 },
  balanceOwe: { color: "#ccc", fontSize: 13 },
  balanceOweAmount: { color: "#ff5a5f", fontWeight: "bold" },
  balanceOwed: { color: "#ccc", fontSize: 13, textAlign: "right" },
  balanceOwedAmount: { color: "#57db82", fontWeight: "bold" },

  flexGrow: { flex: 1, paddingHorizontal: 10 },
  sectionHeaderRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 20,},
  sectionHeader: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  seeAllLink: { color: "#6f79ff", fontWeight: "500", fontSize: 14 },

activityItem: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, // Supported in RN 0.71+
  },
  activityIcon: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    justifyContent: "center",
    alignItems: "center",
  },
  activityDetails: {
    justifyContent: "center",
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  activitySubtitle: {
    fontSize: 13,
    color: "#cbd5e1",
    marginTop: 2,
  },
  activityAmountBlock: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: "600",
  },

  groupsRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 12,
  paddingLeft: 6, // Add some left padding for better visuals
  paddingRight: 12,
},

  groupCard: { borderRadius: 11, minWidth: 110, height: 42, justifyContent: "center", alignItems: "center", marginRight: 14, paddingHorizontal: 18 },
  groupLabel: { fontSize: 15, color: "#fff", fontWeight: "bold" },
  
  addButton: {
    position: 'absolute', right: 15, bottom: 75, width: 50, height: 50, borderRadius: '50%', backgroundColor: "#6366F1", justifyContent: "center", alignItems: "center",
  },

  bottomNav: {
    flexDirection: "row", justifyContent: "space-around", alignItems: "center",
    backgroundColor: "#222637", height: 64, borderTopWidth: 1, borderColor: "#313454",
  },
  navItem: { alignItems: "center", flex: 1, paddingTop: 6 },
  navLabelActive: { color: "#fff", fontWeight: "bold", fontSize: 13, marginTop: 3 },
  navLabel: { color: "#a6b1c2", fontSize: 13, marginTop: 3 },
});

export default Home