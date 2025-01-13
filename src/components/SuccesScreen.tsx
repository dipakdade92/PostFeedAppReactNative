import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Colors from '../utils/colors';
import {wp} from '../utils/responsive';
import Assets from '../utils/assets';

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  buttonLable: string;
  subTitle: string;
}

const SuccessModal = (props: SuccessModalProps) => {
  const {visible, onClose, title, buttonLable, subTitle} = props;

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Image
            style={styles.iconWrapper}
            source={Assets.successIcon}
            resizeMode="contain"
          />
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalSubTitle}>{subTitle}</Text>
          <View style={styles.rowWrapper}>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.buttonStyle, {backgroundColor: Colors.Black}]}>
              <Text style={styles.deleteButtonWrapper}>{buttonLable}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BlackOpacity,
  },
  iconWrapper: {
    width: wp(15),
    height: wp(15),
    alignSelf: 'center',
  },
  modalContainer: {
    width: wp(90),
    height: wp(59),
    paddingVertical: wp(5),
    backgroundColor: Colors.White,
    borderRadius: wp(5),
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    width: wp(75),
    fontSize: 22,
    fontWeight: '500',
    color: Colors.Black,
    textAlign: 'center',
  },
  modalSubTitle: {
    width: wp(75),
    fontSize: 22,
    fontWeight: '700',
    color: Colors.Black,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rowWrapper: {
    marginTop: wp(4),
    width: wp(80),
    alignItems: 'center',
  },
  buttonStyle: {
    justifyContent: 'center',
    width: wp(38.5),
    paddingVertical: wp(2),
    borderRadius: wp(25),
  },
  deleteButtonWrapper: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: Colors.White,
  },
  cancelButtonWrapper: {
    alignSelf: 'center',
    fontSize: 20,
    color: Colors.Black,
    fontWeight: '500',
  },
});
