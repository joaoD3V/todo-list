import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    position: 'absolute',
    top: -30,
    left: 24,
  },
  input: {
    backgroundColor: colors['gray-500'],
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors['gray-700'],
    flex: 1,
    height: 54,
    color: colors['gray-100'],
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 22.4,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: colors['blue-dark'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
