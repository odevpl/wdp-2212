import React from 'react';
import Login from './components/views/Login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import Blog from './components/views/Blog/Blog';
import CartPage from './components/views/CartPage/CartPage';
import Search from './components/views/Search/Search';
import { Register } from './components/features/Register/Register';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route exact path={'/product/:productId'} component={ProductPage} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/blog'} component={Blog} />
          <Route exact path={'/cart'} component={CartPage} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/search'} component={Search} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
