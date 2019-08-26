import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CardItem from '../components/CardItem';
import demo_shoe from '../assets/data/demo_shoe';

const Home = (props) => {
 
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}>
      <View style={styles.containerMatches}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>shop online</Text>
            
          </View>

            <FlatList
            numColumns={1}
            data={demo_shoe}
            renderItem={({item}) => (
              < TouchableOpacity onPress = {() => {props.navigation.navigate('HShose')}} >
                
                <CardItem
                  image={item.image}
                  name={item.name}
                 
                  variant
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;


