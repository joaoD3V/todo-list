import { Image, View } from 'react-native';
import { styles } from './styles';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.content}>{children}</View>
    </>
  );
}
