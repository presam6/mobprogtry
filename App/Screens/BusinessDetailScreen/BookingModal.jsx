import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from '../../Components/PageHeading'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';

export default function BookingModal({ hideModal }) {

    const [timeList, setTimeList] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [note, setNote] = useState();

    useEffect(() => {
        getTime();
    }, [])
    const getTime = () => {
        const timeList = [];
        for (let i = 8; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 7; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
        setTimeList(timeList);
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView style={{ padding: 20, }}>
                <TouchableOpacity style={{
                    display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 10
                }}
                    onPress={() => hideModal()}>
                    <AntDesign name="back" size={30} color="black" />
                    <Text style={{ fontSize: 25, fontFamily: 'outfit-medium', }}> Order Details </Text>
                </TouchableOpacity>

                {/* Calendar Section */}
                <Heading text={'Select Date to Pick Up'} />
                <View style={styles.calenderContainer}>
                    <CalendarPicker
                        onDateChange={setSelectedDate}
                        width={320}
                        minDate={Date.now()}
                        todayBackgroundColor={Colors.BLACK}
                        todayTextStyle={{ color: Colors.WHITE }}
                        selectedDayColor={Colors.PRIMARY}
                        selectedDayTextColor={Colors.WHITE}
                    />
                </View>

                {/* Time Section */}
                <View style={{ marginTop: 20 }}>
                    <Heading text={'Select Time to Pick Up'} />
                    <FlatList
                        data={timeList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ marginRight: 10, }}
                                onPress={() => setSelectedTime(item.time)}>
                                <Text style={[selectedTime == item.time ? styles.selectedTime : styles.unSelectedTime]}>
                                    {item.time} </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Note Section */}
                <View style={{ padding: 20, }}>
                    <Heading text={'Order Information'} />
                    <TextInput placeholder='Note'
                        numberOfLines={4}
                        multiline={true}
                        style={styles.noteTextArea}
                        onChange={(text) => setNote(text)}
                    />
                </View>

                {/* Confirmation Button */}
                <TouchableOpacity>
                    <Text style={styles.confirmBtn}> Confirm & Order </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    calenderContainer: {
        backgroundColor: Colors.LIGHT_PRIMARY,
        padding: 20,
        borderRadius: 15,
    },
    selectedTime: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.BLACK,
        borderRadius: 99,
        backgroundColor: Colors.PRIMARY,
        paddingHorizontal: 15,
        color: Colors.WHITE,
    },
    unSelectedTime: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        paddingHorizontal: 15,
        color: Colors.PRIMARY
    },
    noteTextArea: {
        borderWidth: 1,
        borderRadius: 5,
        textAlignVertical: 'top',
        padding: 10,
        fontSize: 15,
        fontFamily: 'outfit',
        borderColor: Colors.PRIMARY,
    },
    confirmBtn: {
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        fontSize: 15,
        backgroundColor: Colors.PRIMARY,
        color: Colors.WHITE,
        borderRadius: 90,
        padding: 10,
        elevation: 5,
    },
})