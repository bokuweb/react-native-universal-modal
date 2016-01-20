import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Modal from './index.js';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  openModal () {
    this.setState({ isOpen: true });
  }

  closeModal () {
    this.setState({ isOpen: false });
  }

  render() {
    const modalStyles = {
      modal : {
        width: 240,
        height: 300,
        backgroundColor: '#FFF'
      },
      overlay : {

      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.flexCenter}>
          <TouchableOpacity onPress={this.openModal.bind(this)}>
            <Text>Open Modal</Text>
          </TouchableOpacity>
        </View>
        <Modal isOpen={this.state.isOpen}
               styles={modalStyles}>
          <TouchableOpacity onPress={this.closeModal.bind(this)}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
});


AppRegistry.registerComponent('reactNativeModalAndroid', () => Example);
