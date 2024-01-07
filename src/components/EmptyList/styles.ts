import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors['gray-400'],
    paddingTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  text: {
    color: colors['gray-300'],
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    lineHeight: 19.6,
    flexDirection: 'column',
  },
});
