import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../styles/colors';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Feather name="clipboard" size={56} color={colors['gray-400']} />

      <View>
        <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={{ ...styles.text, fontFamily: 'Inter_400Regular' }}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
