import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native';

const { height: deviceHeight} = Dimensions.get('window');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  open () {
    console.log('press');
    this.setState({modal: true});
  }

  renderScene(route, navigator) {
    const Component = route.component;
    return (
      <Component openModal={this.open.bind(this)}/>
    );
  }

  render() {
    //return <Text>a</Text>
    return (
      <View style={styles.container}>
        <Navigator
           initialRoute={{
             component: App
           }}
           renderScene={this.renderScene.bind(this)}
           />
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
        <TouchableOpacity onPress={this.closeModal}>
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
    backgroundColor: 'rgba(0,0,0,.8)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width:280
  }
});

AppRegistry.registerComponent('reactNativeModalAndroid', () => Modal);
