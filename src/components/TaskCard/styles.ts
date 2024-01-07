import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingLeft: 12,
    paddingRight: 8,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors['gray-400'],
    backgroundColor: colors['gray-500'],
    width: '100%',
    minHeight: 64,
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 14,
    lineHeight: 19.6,
    color: colors['gray-100'],
    fontFamily: 'Inter_400Regular',
  },
  trashButton: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
