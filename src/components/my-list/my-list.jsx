import React, {PureComponent, Fragment} from 'react';
import ProfileIcon from '../profile-icon/profile-icon.jsx';

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <Fragment>
        <div className="user-page">
          <header className="page-header user-page__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <h1 className="page-title user-page__title">My list</h1>
            <div className="user-block">
              <ProfileIcon />
            </div>
          </header>
        </div>


        <div>
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <div className="catalog__movies-list">
            </div>
          </section>
          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default MyList;
