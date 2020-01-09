import { Button, useState } from 'native-base';


function ButtonWrapper({ onPress, onDoublePress, ...remainingProps }) {
  const [lastClickedAt, setLastClickedAt] = useState(0);


  const onPressHandler = (...args) => {
    if (new Date().getTime() - lastClickedAt < 500) {
      if (typeof onDoublePress === 'function') {
        onDoublePress(...args);
      }
      return;
    }

    setLastClickedAt(new Date().getTime());
    if (typeof onPress === 'function') {
      onPress(...args);
    }
  };

  return new Button({ onPress: onPressHandler, ...remainingProps });
}


export default ButtonWrapper;
