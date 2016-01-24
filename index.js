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
      this.setState({isOpen: true});
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
    const styles = StyleSheet.create({
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: deviceWidth,
        height: deviceHeight
      },
      modal: {
        position: 'absolute',
        top: (deviceHeight - this.props.styles.modal.height) / 2,
        left: (deviceWidth - this.props.styles.modal.width) / 2
      }
    });

    return (
      <Animated.View
         style={[
           styles.overlay,
           styles.flexCenter,
           this.props.styles.overlay,
           {transform: [{translateY: this.state.offset}]}
         ]}>
        <View style={[this.props.styles.modal, styles.modal]}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

Modal.propTypes = {
  styles:  React.PropTypes.object,
  isOpen: React.PropTypes.bool.isRequired
};

Modal.defaultProps = {
  styles: {
    modal: {
      width: 100,
      height: 100,
      backgroundColor: '#FFF'
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.6)'
    }
  },
  isOpen: false
};
