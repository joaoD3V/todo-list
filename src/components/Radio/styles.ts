import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  active: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: colors.purple,
    borderRadius: 999,
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactive: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 999,
  },
});
