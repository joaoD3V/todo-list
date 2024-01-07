import { TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { Feather } from '@expo/vector-icons';
import { Task } from '../../screens/Home';

type TaskInputProps = {
  inputValue: string;
  onChangeInputValue: (text: string) => void;
  onAddNewTask: (task: Task) => void;
};

export function TaskInput({
  inputValue,
  onChangeInputValue,
  onAddNewTask,
}: TaskInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors['gray-300']}
        style={styles.input}
        value={inputValue}
        onChangeText={onChangeInputValue}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onAddNewTask({ title: inputValue, completedAt: null })}
      >
        <Feather name="plus-circle" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}
