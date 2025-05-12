import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerIcon from '../../Assets/img/menu.png';
import ProfileIcon from '../../Assets/img/ProfileEmpty.png';
import Button from '../../components/Button/Button';
import Categories from '../../components/Categories/Categories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button style={styles.menuButton}>
          <Image source={DrawerIcon} style={styles.image} />
        </Button>
        <Button style={styles.menuButton}>
          <Image source={ProfileIcon} style={styles.image} />
        </Button>
      </View>
      <View>
        <Text style={styles.TextBold}>Hello, Nepolion</Text>
        <Text style={styles.TextSmall}>Have a nice day</Text>
      </View>
      <Categories />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', padding: 15, gap: 10},
  menuButton: {width: 20, backgroundColor: 'transparent'},
  TextBold: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  TextSmall: {color: 'black'},
  image: {width: 30, height: 30},
});
