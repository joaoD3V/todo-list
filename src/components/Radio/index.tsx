import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { Task } from '../../screens/Home';

type RadioProps = {
  task: Task;
  handleCompletedTask: (task: Task) => void;
};

export function Radio({ task, handleCompletedTask }: RadioProps) {
  return (
    <TouchableOpacity
      style={task.completedAt ? styles.active : styles.inactive}
      onPress={() => handleCompletedTask(task)}
    >
      {!!task.completedAt && <Feather name="check" size={14} color="white" />}
    </TouchableOpacity>
  );
}
