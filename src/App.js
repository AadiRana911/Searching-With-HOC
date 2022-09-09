import './App.css';
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/albums

import PostsWithSearch from './Posts';
import AlbumsWithSearch from './Albums';
function App() {
  return (
    <div className='App'>
      <h2 style = {{textAlign: 'center'}}>Higher Order Component</h2>
      <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <div>
          <h3>Posts</h3>
          <PostsWithSearch />
        </div>
        <div>
          <h3>Albums</h3>
          <AlbumsWithSearch />
        </div>
      </div>
    </div>
  );
}

export default App;
