import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {wp} from '../utils/responsive';
import Constant from '../utils/constant';
import Colors from '../utils/colors';
import {AddPostProps} from '../interface/AddPost';

const AddPost = (props: AddPostProps) => {
  const {visible, message, handlePost, closeModal, onChangeMessage} = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text style={styles.titleWrapper}>{Constant.AddPost}</Text>
          <TextInput
            style={styles.inputWrapper}
            placeholder={Constant.WriteAFeed}
            value={message}
            maxLength={100}
            onChangeText={onChangeMessage}
          />
          <View style={styles.bottomButtonRowWrapper}>
            <TouchableOpacity style={styles.buttonWrapper} onPress={handlePost}>
              <Text style={styles.buttonTextWrapper}>{Constant.Post}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButtonWrapper}
              onPress={closeModal}>
              <Text style={styles.closeButtonTextWrapper}>
                {Constant.Cancel}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BlackOpacity,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '80%',
    backgroundColor: Colors.White,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  titleWrapper: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputWrapper: {
    width: '100%',
    height: wp(12),
    borderColor: Colors.LightGray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonWrapper: {
    backgroundColor: Colors.Black,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonTextWrapper: {
    color: Colors.White,
    fontSize: 16,
  },
  closeButtonWrapper: {
    borderColor: Colors.Black,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  closeButtonTextWrapper: {
    color: Colors.Black,
    fontSize: 16,
  },
  bottomButtonRowWrapper: {
    marginTop: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp(60),
  },
});
