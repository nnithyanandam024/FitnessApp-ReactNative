import React from 'react'
import { Text, View, Image,Switch } from 'react-native';
import { SafeAreaView} from 'react-native'

const Navbar = ({isDarkMode,setIsDarkMode}) => {
  return (
   <SafeAreaView>
     <View style={{backgroundColor:isDarkMode ? "black" : "white" , padding: 20, alignItems: 'center',display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.heading , { color: isDarkMode ? 'white' : 'black'}]}>ZeusFitness</Text>
          <Switch 
            trackColor={{ false: "#767577", true: "white" }}
            thumbColor={isDarkMode ? "grey" : "#f4f3f4"}
            onValueChange={() => setIsDarkMode((prev) => ! prev)}
            value={isDarkMode}
            style={{ marginLeft: 110,marginTop: 10 }}
          />
          <Image 
            source={{ uri: 'https://media-hosting.imagekit.io//09e3dfb525f447b8/Ronona%20-%20Copy.jpeg?Expires=1835847520&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gBDiOt4PfQ14rHMpV1hifLzGNqVsfnoM7hoJBheijxMQnEBsspLaQ1a50K1tFqa~kiD8kzOR9MUvvNTQzUvvdpI9viYsosZ5waVYqsZNmlpuLiBnxDTGjgkCkCEwTy8YZ65NX42SC7h0G0cn8BqnLq~VJpfaq~BpmzZX8C45Tong-Q4KObfjo61dANXRATsVaf31kz0-iInkLBAcj8-iW~TDnQVZnz6TV0CHvXQ-9Vpgvyp6g5N5aFRTsUrRe37FGmBKZqps9jv13j8O3Eo2ud2hOvtRDIMYt5br3b~FKJwNGNXIVOkbx62EbYLGxnFcUu6h5dxz8L4P7joDYJE63A__' }} 
            style={{ width: 50, height: 50,borderRadius: 50 }} 
          />
        </View>    
   </SafeAreaView>
  )
}

const styles = {
    heading: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };

export default Navbar
