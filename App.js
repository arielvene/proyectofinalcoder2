import { StyleSheet,StatusBar } from 'react-native'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import Navigator from './src/navigation/Navigator'
import { useFonts } from "expo-font"

const  App = () => {

  const [fontLoaded] = useFonts({Josefin:require(".assets/Fonts/Josefin_Sans.zip")
})
  if(!fontLoaded) return null
  
  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
      />
      <Navigator/>
    </>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
})