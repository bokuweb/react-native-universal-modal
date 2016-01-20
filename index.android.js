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

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  open () {
    this.setState({modal: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <App openModal={this.open.bind(this)}/>
        {this.state.modal ? <TopModal closeModal={() => this.setState({modal: false}) }/> : null }
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <View style={styles.flexCenter}>
        <TouchableOpacity onPress={this.props.openModal}>
          <Text>Open Modal</Text>  
        </TouchableOpacity>
      </View>
    );
  }
}

class TopModal extends Component {
  constructor(props) {
    super(props);
    this.state = { offset: new Animated.Value(deviceHeight) };
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(this.props.closeModal);
  }

  render() {
    return (
      <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
        <TouchableOpacity onPress={this.closeModal.bind(this)}>
          <Text style={{color: '#FFF'}}>Close Menu</Text>
        </TouchableOpacity>
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
  modal: {
    backgroundColor: '#FF0000',
    position: 'absolute',
    top: (deviceHeight - 280) / 2,
    left: (deviceWidth - 280) / 2,
    width:280,
    height:300
  }
});

AppRegistry.registerComponent('reactNativeModalAndroid', () => Modal);
