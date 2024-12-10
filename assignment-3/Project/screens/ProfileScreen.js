import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const recentOrders = [
    {
      id: '1',
      items: 'Beef Burger, Ice Cream, Berries',
      date: '2 | Thu 10:00',
      price: '$38.15',
      image: require(), // Replace with your image path
    },
    {
      id: '2',
      items: 'Beef Burger, Pepperoni Moo, Cheese Bust',
      date: '15 | Fri 18:00',
      price: '$38.15',
      image: require(), // Replace with your image path
    },
    {
      id: '3',
      items: 'Beef Burger, Ketchup, French Fries',
      date: '7 | Mon 10:00',
      price: '$30.50',
      image: require(), // Replace with your image path
    },
  ];

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <Image source={item.image} style={styles.orderImage} />
      <View style={styles.orderDetails}>
        <Text style={styles.orderItems}>{item.items}</Text>
        <Text style={styles.orderDate}>{item.date}</Text>
      </View>
      <Text style={styles.orderPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
        <TouchableOpacity>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Kari Rasmussen</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>14.850</Text>
            <Text style={styles.statLabel}>Product Sells</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>30bil+</Text>
            <Text style={styles.statLabel}>Earning</Text>
          </View>
        </View>
      </View>

      {/* Recent Orders Section */}
      <View style={styles.recentOrdersHeader}>
        <Text style={styles.recentOrdersTitle}>Recent Orders</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recentOrders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.ordersList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsIcon: {
    fontSize: 20,
  },
  profileCard: {
    backgroundColor: '#fef7eb',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  recentOrdersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recentOrdersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#ff6347',
  },
  ordersList: {
    paddingBottom: 20,
  },
  orderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  orderItems: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 12,
    color: '#666',
  },
  orderPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
