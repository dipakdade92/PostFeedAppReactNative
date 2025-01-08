import {GestureResponderEvent, NativeSyntheticEvent} from 'react-native';

export interface AddPostProps {
  visible: boolean;
  message: string;
  handlePost: ((event: GestureResponderEvent) => void) | undefined;
  closeModal: ((event: NativeSyntheticEvent<any>) => void) | undefined;
  onChangeMessage: ((text: string) => void) | undefined;
}
