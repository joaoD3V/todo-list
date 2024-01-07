import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { Radio } from '../Radio';
import { Task } from '../../screens/Home';

type TaskCardProps = {
  task: Task;
  onChangeTask: (task: Task) => void;
  onRemoveTask: (task: Task) => void;
};

export function TaskCard({ task, onChangeTask, onRemoveTask }: TaskCardProps) {
  return (
    <View style={styles.container}>
      <Radio task={task} handleCompletedTask={onChangeTask} />

      <Text
        style={
          task.completedAt
            ? {
                ...styles.title,
                color: colors['gray-300'],
                textDecorationLine: 'line-through',
              }
            : styles.title
        }
      >
        {task.title}
      </Text>

      <TouchableOpacity
        style={styles.trashButton}
        onPress={() => onRemoveTask(task)}
      >
        <FontAwesome5 name="trash-alt" size={14} color={colors['gray-200']} />
      </TouchableOpacity>
    </View>
  );
}
