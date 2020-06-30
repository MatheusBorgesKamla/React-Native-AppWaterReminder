import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { set } from 'react-native-reanimated';


const AddAlarmScreen = props => {

    var current_hour = new Date().getHours();
    var string_current_hour = '';
    if(current_hour < 10)
    {
        string_current_hour = '0' + current_hour;
    }
    else
    {
        string_current_hour = string_current_hour + current_hour;
    }
    const [enteredHourGoal, setHEnteredGoal] = useState(string_current_hour);
    const [enteredHourSubmit, setHEnteredSubmit] = useState(enteredHourGoal);

    const [enteredMinGoal, setMEnteredGoal] = useState('00');
    const [enteredMinSubmit, setMEnteredSubmit] = useState(enteredMinGoal);

    const inputHourHandle = (enteredText) => {
        
        if (enteredText.length == 0) 
        {
           enteredText = '0' + enteredHourGoal;
        }
        var num = parseInt(enteredText);
        if(num > 23)
        {
            enteredText = '0' + enteredText[0];
        }
        setHEnteredGoal(enteredText);
    }

    const submitHourHandle = (ObjectEvent) => {
        
        if(ObjectEvent.nativeEvent.text.length == 1)
        {
            //console.log(ObjectEvent.nativeEvent.text);
            //console.log(enteredHourGoal);
            aux = '0'+ObjectEvent.nativeEvent.text;
            setHEnteredGoal(aux);
        }
    }
    const inputMinHandle = (enteredText) => {
        if (enteredText.length == 0) 
        {
            enteredText = '0' + enteredMinGoal;
        }
        var num = parseInt(enteredText);
        if(num > 59)
        {
            enteredText = '0' + enteredText[0];
        }
        setMEnteredGoal(enteredText);
    }
    const submitMinHandle = (ObjectEvent) => {
        
        if(ObjectEvent.nativeEvent.text.length == 1)
        {
            //console.log(ObjectEvent.nativeEvent.text);
            //console.log(enteredHourGoal);
            aux = '0'+ObjectEvent.nativeEvent.text;
            setMEnteredGoal(aux);
        }
    }
    return (
        <View style={styles.screen}>
            <View style={styles.header_container}>
                <Text style={styles.header_text}>Novo Lembrete</Text>
            </View>
            <View style={styles.input_container}>
                <View style={styles.text_time_container}>
                    <Text style={styles.text_time}>
                        Horário do Lembrete:
                    </Text>
                </View>
                <View style={styles.input_time}>
                <TextInput
                style={styles.hourInp}
                keyboardType={"numeric"}
                value={enteredHourGoal}
                maxLength={2}
                onChangeText={inputHourHandle}
                onSubmitEditing = {submitHourHandle}
                />
                <Text style={styles.hourInp}>
                    :
                </Text>
                <TextInput
                style={styles.minInp}
                keyboardType={"numeric"}
                value={enteredMinGoal}
                maxLength={2}
                onChangeText={inputMinHandle}
                onSubmitEditing = {submitMinHandle}
                />
                <Text>
                    pm
                </Text>
                </View>
                <View style={styles.text_time_container}>
                    <Text style={styles.text_time}>
                        Tipo do Lembrete:
                    </Text>
                </View>
                <TextInput
                style={styles.text_input_container}
                value={'Remedio'}
                />
                <View style={styles.text_time_container}>
                    <Text style={styles.text_time}>
                        Nome do Lembrete:
                    </Text>
                </View>
                <TextInput
                style={styles.text_input_container}
                value={'Dipirona'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#52B1CF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_container: {
        marginTop: 100,
        marginBottom: 50,
        width: '80%',
        //backgroundColor: 'rgb(0,0,255)',
      },
      header_text: {
        color: '#FFFFFF',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      input_container: {
          //backgroundColor: '#ffaf',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
      },
      text_time_container: {
        width: 280, 
        //backgroundColor: '#DDDD',
        marginBottom: 15,
      },
      text_time: {
          color: '#FFFFFF',
          fontSize: 13,
          fontWeight: 'bold',
          textAlign: 'left',
      },
      input_time: {
          flexDirection: 'row',
          backgroundColor: '#FFF',
          padding: 10,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
              width: 0,
              height: 2,},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 15,
          marginBottom: 50,
      },
      hourInp: {
          fontSize: 80,
          fontWeight: 'bold',
      },
      minInp: {
        fontSize: 80,
      },
      text_input_container: {
          backgroundColor: '#FFF',
          width: 300,
          padding: 10,
          borderRadius: 5,
          shadowColor: '#000',
          shadowOffset: {
              width: 0,
              height: 2,},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 15,
          marginBottom: 50,
      },
});

export default AddAlarmScreen;