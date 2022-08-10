import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home({navigation}){
    
    return(
        <View style={[styles.container, {
            
            flexDirection: "column"
          }]}>
            <View style={{ flex: 1, backgroundColor: "#487eb0" }}>
            <Text onPress={() =>
        navigation.navigate('Why')
      }style={styles.mainText}>{"Why is it needed?"}</Text>
            </View>

            <View style={{ flex: 1, backgroundColor: "#4a69bd" }}>
            <Text style={styles.mainText}>{"Where does it go?"}</Text>
            </View>

            <View style={{ flex: 1, backgroundColor: "#6a89cc" }}>
            <Text style={styles.mainText}>{"TBD"}</Text>
            </View>
            </View>
          
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
   
    },
    mainText: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 100,
        color:'white'
      }
  });
