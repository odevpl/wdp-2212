import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(ProductPage);