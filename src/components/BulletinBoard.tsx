import React, { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { addPost, Bulletin, Post } from '../redux/reducers/bulletinPosts';
import { Reducer } from '@reduxjs/toolkit';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { onCreateBulletinPost } from '../graphql/subscriptions';
import { listBulletinPosts } from '../graphql/queries';
import { deleteBulletinPost } from '../graphql/mutations';
import { updatePost } from '../redux/reducers/selectedpost';
// import { BulletinData } from '../util/BulletinData'

//@ts-ignore
export var tempPostInfo;

const BulletinBoard = () => {
  const dispatch = useDispatch();
  const initBulletinData: any[] = [];
  const [BulletinData, setBulletinData] = useState(initBulletinData);
  useEffect(() => {
    async function getPosts() {
      try {
        const posts = (await API.graphql({
          query: listBulletinPosts,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as any;
        console.log('bulletin posts:', posts.data.listBulletinPosts.items);
        setBulletinData(posts.data.listBulletinPosts.items);
      } catch (err) {
        console.log('Error getting bulletin posts: ', err);
      }
    }
    getPosts();

    const subscription = (
      API.graphql(graphqlOperation(onCreateBulletinPost)) as any
    ).subscribe({
      next: ({ provider, value }: { provider: any; value: any }) => {
        console.log('onCreateBulletinPost: ', value.data.onCreateBulletinPost);
        setBulletinData((BulletinData) => [
          ...BulletinData,
          value.data.onCreateBulletinPost,
        ]);
      },
    });
  }, []);
  //@ts-ignore: Unreachable code error
  //   const BulletinData = useSelector((state) => state.bulletinPosts);

  const [clicked, isClicked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const handleBoardClick = (e: any) => {
    e.preventDefault();
    isClicked(true);
    console.log('clicked');
  };

  const [postContext, setPostContext] = useState([[]]);

  //@ts-ignore: Unreachable code error
  useEffect(() => {
    tempPostInfo = postContext;
    console.log('tempPostInfo is: ', tempPostInfo);
    dispatch(updatePost(postContext));
  }, [postContext]);

  const deleteAllPosts = async () => {
    try {
      const posts = (await API.graphql({
        query: listBulletinPosts,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as any;
      // console.log('Profiles: ', profiles.data.listProfiles.items);

      for (let post of posts.data.listBulletinPosts.items) {
        try {
          await API.graphql({
            authMode: 'AMAZON_COGNITO_USER_POOLS',
            query: deleteBulletinPost,
            variables: {
              input: { id: post.id },
            },
          });
          console.log('deleted post');
        } catch (err) {
          console.log('delete error: ', err);
        }
      }
      // setProfileIs(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-4/5 bg-yellow-default rounded-lg m-8 ">
      {/* <button onClick={deleteAllPosts}>deleteAllPosts</button> */}
      <div className="rounded-lg bg-yellow-default flex flex-wrap content-evenly ">
        {BulletinData.sort((a, b) =>
          a.createdAt.localeCompare(b.createdAt)
        ).map((el: Post, i: number) => (
          <div
            className={`flex ${
              clicked
                ? `bg-yellow-default text-white-default`
                : `bg-white-default`
            }  border-8 m-2 border-white-default rounded-lg  cursor-pointer shadow-lg w-full hover:bg-white-default`}
            key={el.id}
            // onClick={() => isClicked(true)}
            //@ts-ignore
            onClick={() => setPostContext(el)}
          >
            <div className="flex  rounded-3xl hover:bg-blue-light bg-white-cream w-full px-20 py-2  hover:text-white-default">
              <img
                className="w-12 h-12 rounded-full object-cover mt-1 mr-4 shadow"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />

              <div className=" w-full">
                <div className="flex relative">
                  <h2 className="text-med">{el.author}</h2>
                </div>
                <small className="text-xs ">
                  {/* {Math.floor(Math.floor(el.posttime.getTime() / 1000) / 60) >
                  90
                    ? `${
                        Math.floor(
                          Math.floor(
                            Math.floor(el.posttime.getTime() / 1000) / 60
                          )
                        ) / 60
                      }h ago`
                    : `${Math.floor(
                        Math.floor(el.posttime.getTime() / 1000) / 60
                      )}m ago`} */}
                  {el.posttime}
                </small>

                <p className=" mt-1 font-medium text-2xl text-center ">
                  {el.subject}
                </p>

                <div className="flex justify-between  mt-2 mb-2 flex items-center">
                  <div className="flex mr-10 text-gray-700 text-sm">
                    <span>
                      {el.resolved === true ? (
                        <h1>
                          <span className="text-resolved-default">??? </span>
                          Resolved
                        </h1>
                      ) : (
                        <h1>
                          <span className="text-open-default">??? </span>Open
                        </h1>
                      )}
                    </span>
                  </div>
                  <div className="flex mr-2 text-gray-700 text-sm mr-8">
                    <span className="text-lg">#{el.hashtags[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletinBoard;
