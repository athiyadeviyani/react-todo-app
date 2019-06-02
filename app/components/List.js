// Add value from the Input component

import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions, // Dimensions is a component that helps us to set the initial width and height of a component before the application runs. We are using its get() method to acquire any device's width and height.
  StyleSheet,
  TouchableOpacity,
  Platform, // React Native provides an API module called Platform that detects the platform on which the app is running. You can use the detection logic to implement platform-specific code for styling just like we did above or with any other component. To use Platform module, we have to import it from React Native. We are using it to apply styles in the form of shadow that will appear under the every row component when a to do item is being add.
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  itemListText,
  itemListTextStrike,
  circleInactive,
  circleActive,
  deleteIconColor,
} from '../utils/Colors';

const { height, width } = Dimensions.get('window');

class List extends Component {

  // We are also defining a method called toggleCircle that will respond to the onPress action on TouchableOpacity that accordingly respond by checking or unchecking the to do list item.
  onToggleCircle = () => {
    const { isCompleted, id, completeItem, incompleteItem } = this.props;
    if (isCompleted) {
      incompleteItem(id);
    } else {
      completeItem(id);
    }
  };

  render() {
    const { text, deleteItem, id, isCompleted } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this.onToggleCircle}>
            <View
              style={[
                styles.circle,
                isCompleted
                  ? { borderColor: circleActive }
                  : { borderColor: circleInactive },
              ]}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              isCompleted
                ? {
                    color: itemListTextStrike,
                    textDecorationLine: 'line-through',
                  }
                : { color: itemListText },
            ]}>
            {text}
          </Text>
        </View>
        { isCompleted ? (
          <View style={styles.button}>
          // Our List component uses TouchableOpactiy from React Native that behaves like a button but responds to touch on a mobile rather than a normal button as we use in web. It also makes use of different colors that we defined earlier.
            <TouchableOpacity onPressOut={() => deleteItem(id)}>
              <MaterialIcons
                name="delete-forever"
                size={24}
                color={deleteIconColor}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'white',
    height: width / 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50,50,50)',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 2,
          width: 0
        }
      },
      android: {
        elevation: 5
      }
    })
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.5
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 15
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    margin: 10
  },
  button: {
    marginRight: 10
  }
});
export default List;
