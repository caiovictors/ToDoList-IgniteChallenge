import { Text, View, Image, FlatList, ToastAndroid } from "react-native";

import { ItemsProps } from "../../screens/Home";
import { TaskItem } from "../TaskItem";

import ClipboardIcon from '../../assets/clipboard.png'

import { styles } from "./styles";

interface TaskListProps {
  items: ItemsProps[];
  setItems: (item: ItemsProps[]) => void;
}

export const TaskList = ({items, setItems}: TaskListProps) => {
  const handleRemoveItem = (item: ItemsProps) => {
    const newItems = items.filter(taskItem => taskItem.task !== item.task)
    setItems(newItems)
    ToastAndroid.show("Tarefa removida.", ToastAndroid.SHORT);

  }
  const handleCheckItem = (item: ItemsProps) => {
    const updateItems = [...items]
    const index = items.findIndex((taskItem: ItemsProps) => taskItem.task === item?.task) 
    updateItems[index] = {...item, checked: !item.checked}
   
    setItems(updateItems)
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={items}
        inverted
        keyExtractor={item => item?.task}
        renderItem={({item}) => 
          <TaskItem item={item} onCheck={() => handleCheckItem(item)} onRemove={() => handleRemoveItem(item)}/>        }
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image source={ClipboardIcon} style={styles.emptyIcon}/>
            <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  );
};
