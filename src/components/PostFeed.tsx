import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {supabase} from '../services/supabase';
import Colors from '../utils/colors';
import {wp} from '../utils/responsive';
import Constant from '../utils/constant';
import FeedCard from './FeedCard';
import AddPost from './AddPost';
import {Post} from '../interface/Post';

const PostFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [message, setMessage] = useState<string>('');
  const [postModalVisible, setPostModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const {data, error} = await supabase
        .from('posts')
        .select('*')
        .order('created_at', {ascending: false});

      if (!error && data) setPosts(data);
    };

    fetchPosts();

    const channel = supabase
      .channel('posts-updates')
      .on(
        'postgres_changes',
        {event: 'INSERT', schema: 'public', table: 'posts'},
        payload => {
          console.log('payload.new', payload.new);
          setPosts((prev: any) => [payload.new, ...prev]);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleOpenPostModal = () => {
    setPostModalVisible(true);
  };

  const closeModal = () => {
    setPostModalVisible(false);
    setMessage('');
  };

  const handlePost = async () => {
    if (!message.trim()) return;
    await supabase.from('posts').insert([{message}]);
    setMessage('');
    setPostModalVisible(false);
  };

  const renderItem = ({item}: {item: Post}) => {
    return <FeedCard post={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.postFeedHeadingWrapper}>
        <View style={styles.firstWrapper} />
        <View style={styles.secondWrapper}>
          <Text style={styles.postFeedTextWrapper}>{Constant.PostFeeds}</Text>
        </View>
        <TouchableOpacity
          onPress={handleOpenPostModal}
          style={styles.addButtonWrapper}>
          <Text style={styles.addTextWrapper}>{Constant.Add}</Text>
        </TouchableOpacity>
      </View>
      <AddPost
        closeModal={closeModal}
        onChangeMessage={(value: string) => {
          setMessage(value);
        }}
        message={message}
        visible={postModalVisible}
        handlePost={handlePost}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListWrapper}
        contentContainerStyle={styles.flatListContainerWrapper}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item: Post) => {
          return item.id.toString();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  postFeedHeadingWrapper: {
    width: wp(100),
    height: wp(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstWrapper: {
    width: wp(25),
  },
  secondWrapper: {
    width: wp(52),
  },
  postFeedTextWrapper: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  addButtonWrapper: {
    borderRadius: wp(1),
    width: wp(18),
    height: wp(7),
    marginTop: wp(1),
    backgroundColor: Colors.Black,
    justifyContent: 'center',
  },
  addTextWrapper: {
    color: Colors.White,
    textAlign: 'center',
  },
  flatListWrapper: {
    marginTop: wp(3),
  },
  flatListContainerWrapper: {
    paddingBottom: 15,
  },
});

export default PostFeed;
