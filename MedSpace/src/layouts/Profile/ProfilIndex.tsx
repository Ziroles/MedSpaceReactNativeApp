import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "@navigation/RootStackParamList";
import useSave from "@hooks/useSave"
import Title from "@components/TitleBubble"
import ProfilItem from './ProfilItem';
import { ScrollView } from 'react-native';

type ProfilIndexProps = NativeStackScreenProps<RootStackParamList, 'Profil'>

/** Permet de sélectionner un profil pour accéder à l'application
 */
export default function ProfilIndex({ navigation }: ProfilIndexProps) {
    const [save, setSave] = useSave()
    if (!save) return null
    
    return <ScrollView>
        <Title>Sélectionner un profil</Title>
        {
            save.patients.map((patient, index) => {
                const onClickHandler = () => {
                    setSave({
                        ...save, patients: save.patients.map((p, i) =>
                            i === index ? { ...p, isSelected: true } : { ...p, isSelected: false }
                        )
                    })
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }
                return <ProfilItem
                    key={index}
                    patientLite={{ name: patient.name, icone: patient.icone }}
                    onPress={onClickHandler}
                />
            })
        }
    </ScrollView>
}
