# react-native-universal-modal

Universal simple modal component for React Native


## screen shot

- iOS    
   
![](https://raw.githubusercontent.com/bokuweb/react-native-universal-modal/master/screenshot/ios-modal.gif)
  
- Android     

![](https://raw.githubusercontent.com/bokuweb/react-native-universal-modal/master/screenshot/android-modal.gif)
   
   
## Important Note

This repository is heavily under development and unstable.

## Installation

```sh
npm i react-native-universal-modal
```

## Overview

- example

``` javascript
<Modal isOpen={this.state.isOpen}
       styles={modalStyles}>
  <TouchableOpacity
     onPress={() => this.setState{isOpen: false}}>
    <View style={styles.modalInner}>
      <Text>Close Modal</Text>
    </View>
  </TouchableOpacity>
</Modal>
```

## Properties

#### styles {object}

The style of `modal` and `overlay`.   
See example.

- example
``` jabascript
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
``````

#### isOpen {bool}

If set `true`, modal is open.

## License

The MIT License (MIT)

Copyright (c) 2015 @Bokuweb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                             


