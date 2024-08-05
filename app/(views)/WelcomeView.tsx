import customColors from '@/assets/theme/customColors';
import { View } from '@/components/theme/Themed';
import { StyleSheet } from 'react-native';
import { Button, useTheme, Text as Text } from 'react-native-paper';

const { background, buttonSecondary } = customColors.colors
export default function WelcomeScreen() {
  return (
    <View style={styles.page} lightColor={background}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.container} lightColor={background}>
        <Button mode="contained" dark={false} onPress={() => console.log('hi')} >
          <Text>Get Started</Text>
        </Button>
        <Button mode="contained" dark={false} onPress={() => console.log('hi')} buttonColor={buttonSecondary}>
          <Text>Learn More</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 25,
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

