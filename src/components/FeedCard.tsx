import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {wp} from '../utils/responsive';
import Colors from '../utils/colors';
import moment from 'moment';
import {FeedCardProps} from '../interface/FeedCard';

const FeedCard = (props: FeedCardProps) => {
  const {post} = props;

  return (
    <View style={styles.flatlistMainWrapper}>
      <Text numberOfLines={3} style={styles.titleWrapper}>
        {post.message}
      </Text>
      <Text style={styles.dateTimeWrapper}>
        {moment(post?.created_at).format('DD-MM-YYYY HH:mm')}
      </Text>
    </View>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
  flatlistMainWrapper: {
    marginTop: wp(2),
    width: wp(94),
    paddingVertical: wp(4),
    justifyContent: 'center',
    paddingLeft: 15,
    alignSelf: 'center',
    borderColor: Colors.DarkGray,
    borderWidth: 1,
    borderRadius: wp(2),
  },
  titleWrapper: {
    fontSize: 16,
    color: Colors.Black,
    fontWeight: '500',
  },
  dateTimeWrapper: {
    fontSize: 14,
    color: Colors.GreyColor,
  },
});
