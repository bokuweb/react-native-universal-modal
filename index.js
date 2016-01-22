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

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      offset: new Animated.Value(deviceHeight)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && !this.state.isOpen) {
      this.setState({isOpen: 'false'});
      Animated.timing(this.state.offset, {
        duration: 200,
        toValue: 0
      }).start();
    } else if (!nextProps.isOpen && this.state.isOpen) {
      Animated.timing(this.state.offset, {
        duration: 200,
        toValue: deviceHeight
      }).start(() => {this.setState({isOpen: false});});
    }
  }

  render() {
    if (!this.state.isOpen) return null;
    const style = {
      position: 'absolute',
      top: (deviceHeight - this.props.styles.modal.height) / 2,
      left: (deviceWidth - this.props.styles.modal.width) / 2
    };
    return (
      <Animated.View style={[styles.overlay, styles.flexCenter, this.props.styles.overlay, {transform: [{translateY: this.state.offset}]}]}>
        <View style={[this.props.styles.modal, style]}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: deviceWidth,
    height: deviceHeight
  }
});
