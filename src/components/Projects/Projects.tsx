import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {projects} from '../../Data/ProjectsData';
import CardImage from '../../Assets/img/card.png';
import CardImageBlur from '../../Assets/img/cardBlur.png';
import moment from 'moment';

interface CardProps {
  id: number;
  label: string;
  name: string;
  image: string;
  startDate: string;
  selectedCard: number;
  setSelectedCard: React.Dispatch<React.SetStateAction<number>>;
}

const Card = ({
  id,
  label,
  name,
  image,
  startDate,
  selectedCard,
  setSelectedCard,
}: CardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => setSelectedCard(id)}>
      <ImageBackground
        source={selectedCard === id ? CardImage : CardImageBlur}
        resizeMode="stretch"
        style={styles.imageBackground}>
        <View style={styles.cardContent}>
          <View style={{flexDirection: 'column', gap: 6, padding: 10}}>
            {image && (
              <Image source={{uri: image}} style={{width: 50, height: 50}} />
            )}
            <View>
              <Text style={styles.text}>{label}</Text>
              <Text style={[styles.text, {fontWeight: 'bold', fontSize: 18}]}>
                {name}
              </Text>
              <Text style={styles.text}>
                {moment(startDate).format('MMMM Do YYYY')}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Projects = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <FlatList
      horizontal
      data={projects}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <Card
          {...item}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      )}
      contentContainerStyle={styles.cardContainer}
      style={{padding: 5}}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Projects;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  labelText: {
    fontWeight: 'bold',
  },
  card: {
    width: 220,
    height: 150,
    borderRadius: 16,
  },
  cardContent: {
    position: 'absolute',
  },
  imageBackground: {
    height: '100%',
  },
  text: {
    color: 'white',
  },
});
