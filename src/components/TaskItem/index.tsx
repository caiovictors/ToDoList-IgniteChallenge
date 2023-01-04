import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { ItemsProps } from "../../screens/Home";

import TrashIcon from '../../assets/trash.png'
import CheckIcon from '../../assets/check.png'

import { styles } from "./styles";

interface TaskItemProps {
  item: ItemsProps;
  onCheck: () => void;
  onRemove: () => void;
}

export const TaskItem = ({item, onCheck, onRemove}: TaskItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCheck}>
        {item.checked ? (
          <View style={[styles.circle, styles.checkedCircle]}>
            <Image source={CheckIcon} style={styles.checkIcon}/>
          </View>
          ) : (
            <View style={[styles.circle, styles.emptyCircle]}/>
          )}
      </TouchableOpacity>
      <Text style={[styles.text, item.checked && styles.strikeText]}>{item.task}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={TrashIcon} style={styles.trashIcon}/>
      </TouchableOpacity>
    </View>
  )
}