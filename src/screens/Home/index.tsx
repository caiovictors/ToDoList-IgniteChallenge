import React, { useState, useCallback, useEffect } from "react";	
import { Alert, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import { TaskList } from "../../components/TaskList";

import Logo from '../../assets/logo.png'
import PlusIcon from '../../assets/plusIcon.png'

import Theme from "../../styles/Theme";
import { styles } from "./styles";

export interface ItemsProps {
  task: string;
  checked: boolean;
}

export const Home = () => {
  const [items, setItems] = useState<ItemsProps[]>([])
  const [inputItem, setInputItem] = useState('')
  const [finishedItems, setFinishedItems] = useState<Number>(0)
 
  useEffect(() => {
    setFinishedItems(items.filter(item => item.checked).length)
  }, [items])

  const handleAddItem = useCallback(()=> {
    if(inputItem === '') return

    if(items.find(item => item.task.toLowerCase() === inputItem.toLowerCase())){
      Alert.alert("Item já existe!", "Você não pode cadastrar uma tarefa com o mesmo nome")
      return
    } 
    const data = {
      "task": inputItem,
      "checked": false
    }
    setItems(old => [...old,data])
    setInputItem('')
  }, [inputItem, setItems, items, setInputItem])

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}/>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            value={inputItem}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={Theme.colors.GRAY_300}
            onChangeText={setInputItem}
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleAddItem}>
            <Image source={PlusIcon} style={styles.buttonIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <Text style={styles.textBlue}>Criadas</Text>
            <Text style={styles.valueCounter}>{items?.length || 0}</Text>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.textPurple}>Concluídas</Text>
            <Text style={styles.valueCounter}>{String(finishedItems)}</Text>
          </View>
        </View>
        <TaskList items={items} setItems={setItems}/>
      </View>
    </View>
  );
};


