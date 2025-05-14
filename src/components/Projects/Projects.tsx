import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {projects} from '../../Data/ProjectsData';
import CardImage from '../../Assets/img/card.png';
import CardImageBlur from '../../Assets/img/cardBlur.png';
import Calander from '../../Assets/img/calendar.png';
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

const TaskView = ({item}: any) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#F1F4FF',
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <View
        style={{
          backgroundColor: 'red',
          height: 50,
          width: 50,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={Calander} style={{height: 40, width: 40}} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          marginLeft: 10,
        }}>
        <Text>{item.name}</Text>
        <Text>{moment(item.startDate).startOf('day').fromNow()}</Text>
      </View>
    </View>
  );
};

// const TaskProgress = (selectedCard: number) => {
//   return (
//     <View>
//       {selectedCard !== null && (
//         <SectionList
//           horizontal={false}
//           sections={taskGroup}
//           keyExtractor={(item, index) => item + index}
//           renderItem={item => <TaskView {...item} />}
//           renderSectionHeader={({section}) => (
//             <View style={{marginBottom: 10}}>
//               <Text style={styles.labelText}>{section.title}</Text>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };
const Projects = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const taskGroup = useMemo(() => {
    const tasks = projects.find(project => project.id === selectedCard)?.tasks;
    const group: any = {};
    tasks?.map(task => {
      const existingItem: string = task?.status;
      if (group[existingItem]) {
        group[existingItem] = [...group[existingItem], task];
      } else {
        group[existingItem] = [task];
      }
    });
    const groupArray = Object.keys(group).map(key => {
      return {
        title: key,
        data: group[key],
      };
    });
    console.log(groupArray, 'groupArray');
    return groupArray;
  }, [selectedCard]);
  console.log(selectedCard, 'selectedCard');
  return (
    <>
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
      {selectedCard !== null && (
        <SectionList
          sections={taskGroup}
          keyExtractor={(item, index) => item + index}
          renderItem={item => <TaskView {...item} />}
          renderSectionHeader={({section}) => (
            <View style={{marginBottom: 10}}>
              <Text style={styles.labelText}>{section.title}</Text>
            </View>
          )}
          style={{paddingHorizontal: 20, paddingVertical: 10}}
        />
      )}
    </>
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
