import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

const SwiperComponentLenevo = () => {
    return (
        <Swiper
            style={StyleSheet.wrapper}
            dotStyle={{
                marginTop: -200,
                width: 15,
                height: 5,
                borderRadius: 10,
                backgroundColor: "#FFF",

            }}
            activeDotColor="#FFF"
            activeDotStyle={{
                marginTop: -200,
                width: 30,
                height: 6,
                borderRadius: 10,
                backgroundColor: "#FFF",
                activeDotColor: "#FFF"

            }}
        >
            <View style={styles.slide}>
                <Image
                    source={require('../images/lenevo.jpg')}
                    style={{
                        marginBottom: 130,
                        height: 300,
                        width: 360,
                        marginTop: 60,
                        borderRadius: 10,
                        resizeMode: "stretch"
                    }}
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../images/lenovo1.jpg')}
                    style={{

                        marginBottom: 130,
                        height: 280,
                        width: 350,
                        marginTop: 60,
                        borderRadius: 10,
                        resizeMode: "stretch"
                    }}
                />
            </View>
            <View style={styles.slide}>
                <Image
                    source={require('../images/lenovo2.jpg')}
                    style={{

                        marginBottom: 130,
                        height: 300,
                        width: 350,
                        marginTop: 60,
                        borderRadius: 10,
                        resizeMode: "stretch"
                    }}
                />
            </View>
        </Swiper>
    )
}
const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ADD8E6"
    }
})
export default SwiperComponentLenevo;