import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  createdText: {
    color: colors.blue,
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    lineHeight: 17,
  },
  countText: {
    color: colors['gray-200'],
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
    lineHeight: 15,
    backgroundColor: colors['gray-400'],
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
});
