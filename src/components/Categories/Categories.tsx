import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
interface CategoryProps {
  id: number;
  title: string;
  selectedCategory: number[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<number[]>>;
}
const categors = [
  {
    id: 1,
    title: 'Italian',
    // color: 'blue',
  },
  {
    id: 2,
    title: 'Chinese',
    // color: 'red',
  },
  {
    id: 3,
    title: 'Brazilian',
    // color: 'green',
  },
  {
    id: 4,
    title: 'Dutch',
    // color: 'yellow',
  },
  {
    id: 5,
    title: 'Egyptian',
    // color: 'black',
  },
  {
    id: 6,
    title: 'Russian',
    // color: 'white',
  },
];
const Chip = ({
  id,
  title,
  selectedCategory,
  setSelectedCategory,
}: CategoryProps) => {
  const onPressHandler = (pressId: number) => {
    if (selectedCategory.includes(pressId)) {
      setSelectedCategory(selectedCategory.filter(item => item !== pressId));
    } else {
      setSelectedCategory([...selectedCategory, pressId]);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => onPressHandler(id)}
      style={[
        styles.chip,
        {
          backgroundColor: selectedCategory.includes(id)
            ? '#00408c'
            : '#dbedff',
        },
      ]}>
      <Text
        style={{
          color: selectedCategory.includes(id) ? 'white' : 'black',
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={false}>
      {categors.map(item => (
        <Chip
          {...item}
          key={item.id}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  listContainer: {
    // flexDirection: 'row',
    gap: 16,
    marginTop: 10,
  },
  chip: {
    backgroundColor: '#dbedff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    width: 'auto',
  },
});
