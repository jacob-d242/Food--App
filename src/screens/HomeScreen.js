import { Icon } from '@rneui/themed'
import React, { useState } from 'react'
import { View,Dimensions, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable,Image } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import { colors, parameters } from '../global/styles'
import { filterData,restaurantsData } from '../global/Data';
import FoodCart from '../components/FoodCart'

const SCREEN_WIDTH =Dimensions.get('window').width

const HomeScreen = () => {

    const [delivery, setDelivery] = useState(true)
    const [indexCheck,setIndexCheck] = useState("0")
    return (
        <View style={styles.container}>
            <HomeHeader />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}

            >
                <View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(true);
                            }}
                        >
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey5 }}>
                                <Text style={styles.deliveryText}>Delivery</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(false);
                            }}
                        >
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.grey5 : colors.buttons }}>
                                <Text style={styles.deliveryText}>Pick Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.filterContainer}>
                    <View style={styles.filterChild}>
                        <View style={styles.filtericon1}>
                            <Icon
                                type="material-community"
                                name="map-marker"
                                color={colors.grey1}
                                size={25}
                            />
                            <Text style={{ marginLeft: 5, color: colors.buttons, }}>80100 Mombasa ke</Text>
                        </View>
                        <View style={styles.filtericon2}>
                            <Icon
                                type="material-community"
                                name="clock-time-four"
                                color={colors.grey1}
                                size={25}
                            />
                            <Text style={{ color: colors.buttons, }}>Now</Text>
                        </View>
                    </View>
                    <View>
                        <Icon
                            type="material-community"
                            name="tune"
                            color={colors.grey1}
                            size={25}
                        />
                    </View>
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>
            
                <View >
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator ={false}
                        data={filterData }
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={({item,index })=>(
                          <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                          >
                                <View style={indexCheck === item.id ? { ...styles.cardComponentSelected } : { ...styles.cardComponent }}>
                                    <Image
                                        style={{ height: 60, width: 60, borderRadius: 30 }}
                                        source={item.image}

                                    />
                                    <View>
                                        <Text style={indexCheck === item.id ? { ...styles.cardComponenttextSelected } : { ...styles.cardComponenttext }} >{item.name}</Text>
                                    </View>

                        </View>
                        </Pressable>
                        )}
                    />
                </View>
               
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Todays Free Delivery </Text>
                </View>
                
                <View>
                    <FlatList
                        styles={{ marginTop: 10, marginBottom: 10 }}
                        horizontal={true}
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{marginRight: 5,marginTop:5}}>
                                <FoodCart
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}

                                />
                            </View>
                        )}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 12,
        paddingVertical: 5,

    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16,
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    filterChild: {
        flexDirection: 'row',
        backgroundColor: colors.grey4,
        borderRadius: 14,
        paddingVertical: 4
    },
    filtericon1: {
        justifyContent: 'space-between',
        backgroundColor: colors.grey5,
        flexDirection: "row",
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 20,
    },
    filtericon2: {
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 20,
        borderRadius: 12,
        paddingHorizontal: 20,
        marginRight: 20,
        backgroundColor: colors.cardBackground
    },
    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 5,
    },
    headerText: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        borderRadius: 12,
    },
    cardComponent: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: 'center',
        padding: 10,
        width: 80,
        margin: 10,
        height:100
    },
    cardComponentSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 80,
        margin: 10,
        height:100
    },
    cardComponenttext: {
        fontWeight: 'bold',
        color: colors.grey2,
    },
    cardComponenttextSelected: {
        fontWeight: 'bold',
        color: colors.cardBackground,
    }

})

export default HomeScreen