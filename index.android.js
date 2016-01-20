import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native';

const { height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

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
    return (
      <View style={styles.container}>
        <View style={styles.flexCenter}>
          <TouchableOpacity onPress={this.openModal.bind(this)}>
            <Text>Open Modal</Text>
          </TouchableOpacity>
        </View>
        <Modal isOpen={this.state.isOpen}>
          <TouchableOpacity onPress={this.closeModal.bind(this)}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { offset: new Animated.Value(deviceHeight) };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      Animated.timing(this.state.offset, {
        duration: 100,
        toValue: 0
      }).start();
    } else {
      //Animated.timing(this.state.offset, {
      //  duration: 100,
      //  toValue: deviceHeight
      //}).start(this.props.closeModal);
    }
  }

  render() {
    if (!this.props.isOpen) return null;
    return (
      <Animated.View style={[styles.overlay, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
        <View style={styles.modal}>
          {this.props.children}
        </View>
      </Animated.View>
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
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: deviceWidth,
    height: deviceHeight
  },
  modal: {
    backgroundColor: '#FF0000',
    position: 'absolute',
    top: (deviceHeight - 300) / 2,
    left: (deviceWidth - 280) / 2,
    width:280,
    height:300
  }
});

AppRegistry.registerComponent('reactNativeModalAndroid', () => Example);
