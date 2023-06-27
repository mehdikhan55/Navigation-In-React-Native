import { View, Text, SectionList, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
)
const Seperator = () => <View style={menuStyles.seperator}></View>
const Header = () => <Text style={menuStyles.headerText}> View Menu</Text>

export default function NavMenuItems({ navigation }) {


    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />

    const renderSectionHeader = ({ section: { title } }) => (
        <View style={menuStyles.headerStyle}>
            <Text style={menuStyles.sectionHeader}>{title}</Text>
        </View>
    );

    return (
        <View style={menuStyles.container}>


            <Text style={menuStyles.buttonText}>Home</Text>


            <SectionList
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={Seperator}
                ListHeaderComponent={Header} />
            <Pressable style={menuStyles.backButton} onPress={() => navigation.goBack()}>
                <Text style={[menuStyles.buttonText, { color: 'white' }]}>Go Back</Text>
            </Pressable>
        </View>
    )
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    sectionText: {
        fontSize: 20,
        color: '#333333',
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        color: '#F4CE14',

        fontSize: 20,
    },
    sectionHeader: {
        color: 'black',
        fontSize: 26,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    headerStyle: {
        backgroundColor: '#F4CE14',
    },
    sectionHeader: {
        color: 'black',
        fontSize: 26,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    backButton: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 20,
        padding: 10,

    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
      },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#EDEFEE',
        borderColor: '#EDEFEE',
        borderWidth: 2,
        borderRadius: 12
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
})


const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];