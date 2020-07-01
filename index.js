import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';
import colors from './src/utils/colors';


const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    // accent: '#393e46',
    // background: '#393e46',
    // surface: '#393e46',
    text: '#393e46',
    // // disabled: '#393e46',
    // // // placeholder: '#393e46',
    // // backdrop: '#393e46',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App></App>
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
