/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Lunch Pick</h1>
            <p className={s.bannerDesc}>우리 오늘 점심 뭐 먹을까요 ?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
