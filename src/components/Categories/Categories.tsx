import {Text, View} from 'react-native';
import React from 'react';
interface CategoryProps {
  id: string;
  title: string;
  color: string;
}
const categors = [
  {
    id: '1',
    title: 'Italian',
    color: 'blue',
  },
  {
    id: '2',
    title: 'Chinese',
    color: 'red',
  },
];
const Chip = (item: CategoryProps) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};
const Categories = () => {
  return (
    <View>
      {categors.map(item => (
        <Chip {...item} key={item.id} />
      ))}
    </View>
  );
};

export default Categories;

// const styles = StyleSheet.create({});
