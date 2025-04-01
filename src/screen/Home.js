import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import HomeHeader from '../customheader/HomeHeader'

const App = () => {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch("http://10.24.2.222:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setNewArrivals(data.slice(0, 5)); // Giả sử lấy 5 sản phẩm đầu làm hàng mới
        setBestSellers(data.slice(-5)); // Giả sử lấy 5 sản phẩm cuối làm hàng bán chạy
      });
  }, []);

  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.discountPrice} VND</Text>
      <Text style={styles.productOriginalPrice}>{item.price} VND</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView style={styles.bodycontainer} showsHorizontalScrollIndicator={false}>

        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerText}>Limited Time Electronics Sale</Text>
          <Text style={styles.bannerSubText}>Up to 30% off on selected items</Text>
        </View>

        {/* Popular Products */}
        <View style={styles.productSection}>
          <View style={styles.headerContainer}>
            <Text style={styles.sectionTitle}>Popular Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList 
            data={products} 
            horizontal 
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()} 
            renderItem={renderProductItem} 
          />
        </View>

        {/* New Arrivals */}
        <View style={styles.productSection}>
          <View style={styles.headerContainer}>
            <Text style={styles.sectionTitle}>New Arrivals</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList 
            data={newArrivals} 
            horizontal 
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()} 
            renderItem={renderProductItem} 
          />
        </View>

        {/* Best Sellers */}
        <View style={styles.productSection}>
          <View style={styles.headerContainer}>
            <Text style={styles.sectionTitle}>Best Sellers</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList 
            data={bestSellers} 
            horizontal 
            keyExtractor={(item) => item.id.toString()} 
            renderItem={renderProductItem} 
          />
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bodycontainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  bannerContainer: {
    backgroundColor: "#e0f7fa",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  bannerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bannerSubText: {
    fontSize: 12,
    color: "#555",
  },
  productSection: {
    marginTop: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 14,
    color: "#007bff",
  },
  productCard: {
    width: 150,
    marginRight: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ff6347",
  },
  productOriginalPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#999",
  },
});

export default App;
