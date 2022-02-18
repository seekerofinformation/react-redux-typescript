import React, {FC} from 'react';
import {postApi} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2: FC = () => {
    const {data: posts, error, isLoading} = postApi.useFetchAllPostsQuery(100)
    return (
        <div>
            {isLoading && <h1>Is Loading</h1>}
            {error && <h1>{error}</h1>}
            {/*{posts && posts.map(post =>*/}
            {/*    <PostItem key={post.id} post={post} />*/}
            {/*)}*/}
        </div>
    );
};

export default PostContainer2;