import { Text, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { Task } from '../../screens/Home';

type TasksInfoProps = {
  tasks: Task[];
};

export function TasksInfo({ tasks }: TasksInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.createdText}>Criadas</Text>
        <Text style={styles.countText}>{tasks.length}</Text>
      </View>

      <View style={styles.info}>
        <Text style={{ ...styles.createdText, color: colors.purple }}>
          Concluídas
        </Text>
        <Text style={styles.countText}>
          {tasks.filter((task) => task.completedAt !== null).length}
        </Text>
      </View>
    </View>
  );
}
