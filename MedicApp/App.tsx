import { SafeAreaView, Button } from 'react-native';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import Save from './src/models/Save';
import NewPrescriptionView from './src/layouts/NewPrescriptions';


function App(): JSX.Element {
  (function initData(): void {
    RNSecureStorage.exists('save')
      .then((exists) => {
        if (!exists) {
          const save = Save.default()
          RNSecureStorage
            .set('save', JSON.stringify(save.toJson()),
              { accessible: ACCESSIBLE.WHEN_UNLOCKED })

        }
      }
      )
  })();
  console.log("inited")

  return (
    <SafeAreaView>
      {__DEV__ && <>
        <Button title="afficher" onPress={() => {
          console.log("test")
          console.log(Save.default())
        }
        }></Button>
        <Button title="resetDataBase" onPress={() => {
          RNSecureStorage
            .set('save', JSON.stringify(Save.default().toJson()),
              { accessible: ACCESSIBLE.WHEN_UNLOCKED })
        }}></Button>
      </>}
      <NewPrescriptionView></NewPrescriptionView>
    </SafeAreaView>
  );
}


export default App;
