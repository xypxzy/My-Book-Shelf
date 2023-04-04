import { Layout, withLayout } from './layouts/Layout';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MyShelf } from './pages/MyShelf/MyShelf';
import { Search } from './pages/Search/Search';
import { Contribute } from './pages/Contribute/Contribute';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='/myshelf' element={<MyShelf />}></Route>
      <Route path='/contribute' element={<Contribute />}></Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
export default withLayout(App);
