import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
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
        height: 160,
        backgroundColor: '#FFF'
      },
      overlay : {
        backgroundColor: 'rgba(0,0,0,0.6)'
      }
    };

    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1,paddingBottom:40}}>
          <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <TouchableOpacity
             style={styles.button}
             onPress={this.openModal.bind(this)}>
            <Text style={{color:'#FFF'}}>Open Modal</Text>
          </TouchableOpacity>
        </ScrollView>
        <Modal isOpen={this.state.isOpen}
               styles={modalStyles}>
          <TouchableOpacity
             onPress={this.closeModal.bind(this)}>
            <View style={styles.modalInner}>
              <Text>Close Modal</Text>
            </View>
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
  },
  text: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10
  },
  modalInner: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 70
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    width: 200,
    marginLeft: 100,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: '#1ABC9C'
  }
});


AppRegistry.registerComponent('reactNativeModalAndroid', () => Example);
