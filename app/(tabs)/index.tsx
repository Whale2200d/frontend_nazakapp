import ParallaxScrollView from '@/components/parallax-scroll-view';
import { useRef, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type TodoItemProps = {
  id: string;
  todo: string;
};

export default function HomeScreen() {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);
  const [todo, setChangeTodo] = useState('');
  const textInputRef = useRef<TextInput>(null);

  function onClickAdd() {
    console.log(todo);
    const newTodo = { id: todos.length.toString(), todo };
    setTodos([...todos, newTodo]);

    // init
    setChangeTodo('');
  }

  const TodoItem = ({ todo }: { todo: string }) => {
    return (
      <View>
        <Text>{todo}</Text>
        <Button title="Delete" onPress={() => {}} />
        <Button title="Edit" onPress={() => {}} />
      </View>
    );
  };

  return (
    <ParallaxScrollView>
      <Text>Todo List</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TextInput
          ref={textInputRef}
          value={todo}
          onChangeText={setChangeTodo}
          style={styles.input}
          placeholder="Add a todo"
          onSubmitEditing={onClickAdd}
          returnKeyType="done"
        />
        <Button title="Add" onPress={onClickAdd} />
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item.todo} />}
        keyExtractor={(item) => item.id}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
  },
});
