import React, {FC, useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";

const App: FC = () => {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            {/*{isLoading && <h1>Loading</h1>}*/}
            {/*{error && <h1>Error</h1>}*/}
            {/*{JSON.stringify(users, null, 2)}*/}
            <div style={{display: "flex", gap: 20}}>
                <PostContainer />
                <PostContainer2 />
            </div>
        </div>
    );
};

export default App;