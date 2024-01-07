import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colors['gray-700'],
    alignItems: 'center',
    justifyContent: 'center',
    height: 173,
  },
  content: {
    flex: 1,
    backgroundColor: colors['gray-600'],
    paddingHorizontal: 24,
    position: 'relative',
  },
});
