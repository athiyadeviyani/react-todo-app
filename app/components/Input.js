// Record the user input using TextInout
// Uses the device keyboard
// Features: multiline input, placeholder text, limit characters, keyboard styles, etc.

import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { inputPlaceholder } from '../utils/Colors';

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    style={styles.input}

    // the value of the text input. By default, it will be an empty string since we are using the local state to set it. As the state updates, the value of the text input updates.
    value={inputValue}

    // a callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
    onChangeText={onChangeText}

    // just like in HTML, placeholder is to define a default message in the input field indicating as if what is expected
    placeholder="Type here to add note."

    // the custom text color of the placeholder string.
    placeholderTextColor={inputPlaceholder}

    // if true, the text input can be multiple lines. Like we have set in above.
    multiline={true}

    // to automatically capitalize certain characters. We are passing sentences as the default value. This means, every new sentence will automatically have its first character capitalized.
    autoCapitalize="sentences"

    // works only with android. It prompts sets a bottom border or an underline.
    underlineColorAndroid="transparent"

    selectionColor={'white'}

    // helps you define the maximum number of characters that you can allow for the user to enter.
    maxLength={30}

    // determines how the return key on the device's keyboard should look. You can find more values or platform specific values here. Some of the values are specific to each platform.
    returnKeyType="done"

    //  this prop let us decide whether to show the autocorrect bar along with keyboard or not. In our case, we have set it to false.
    autoCorrect={false}

    // In case of multiline TextInput field, this behaves as when pressing return key, it will blur the field and trigger the onSubmitEditing event instead of inserting a newline into the field.
    blurOnSubmit={true}

    // contains the business the logic in form of a callback as to what to do when the return key or input's submit button is pressed. We will be defining this callback in Main.js.
    onSubmitEditing={onDoneAddItem}

  />
);

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: 'white',
    fontWeight: '500'
  }
});

export default Input;

// To add this component to Main.js you will have to import it. The props we are passing to the Input component at inputValue are from the state of Main. Other such as onChangeText is a custom method. Define them inside the Main component.
