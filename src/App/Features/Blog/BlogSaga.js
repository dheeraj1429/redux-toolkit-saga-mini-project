import { takeEvery, call, put } from 'redux-saga/effects';
import { getBlogs } from '../Blog/BlogSlice';

function* fetchBlogPosts() {
   const posts = yield call(() => fetch(`https://jsonplaceholder.typicode.com/posts`));
   const data = yield posts.json();
   yield put(getBlogs(data));
}

function* blogSage() {
   yield takeEvery('blog/fetchBlogs', fetchBlogPosts);
}

export default blogSage;
