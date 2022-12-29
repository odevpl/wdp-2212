import React from 'react';
import PropTypes, { func } from 'prop-types';
import shortid from 'shortid';
import clsx from 'clsx';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import scssVariables from '../../../styles/settings.scss';
import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fade: true,
  };

  handlePageChange(newPage) {
    this.setState({ fade: false });
    setTimeout(() => {
      this.setState({ activePage: newPage });
      this.setState({ fade: true });
    }, parseInt(scssVariables.fadeTime));
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { categories, products, display, amount } = this.props;
    const { activeCategory, activePage, fade } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);

    const pagesCount = Math.ceil(
      categoryProducts.length / (amount || display.amount || 8)
    );

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={shortid()}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    const leftAction = () => {
      this.setState({ activePage: activePage + 1 });
      if (activePage >= pagesCount - 1) {
        this.setState({ activePage: activePage });
      }
    };

    const rightAction = () => {
      this.setState({ activePage: activePage - 1 });
      if (activePage <= 0) {
        this.setState({ activePage: activePage });
      }
    };

    return (
      <Swipeable rightAction={rightAction} leftAction={leftAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-sm-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={
                            item.id === activeCategory ? styles.active : undefined
                          }
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-sm-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx('row', fade ? styles.fadeIn : styles.fadeOut)}>
            {categoryProducts
              .slice(
                activePage * (amount || display.amount),
                (activePage + 1) * (amount || display.amount)
              )
              .map(item => (
                <div
                  key={item.id}
                  className={
                    (display.viewportSize === 'desktop' && 'col-3') ||
                    (display.viewportSize === 'tablet' && 'col-4') ||
                    (display.viewportSize === 'mobile' && 'col-6')
                  }
                >
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  display: PropTypes.object,
  amount: PropTypes.number,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  display: [],
};

export default NewFurniture;
