/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import pickLogo from './pick-logo.png';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <div className={s.logo}>
          <Link className={s.brand} to="/">
            <img
              src={pickLogo}
              width="38"
              height="38"
              alt="React"
            />
            <span className={s.brandTxt}>LunchPick</span>
          </Link>
        </div>

        <div className={s.menu}>
          <Link className={s.link} to="/about">
            About
          </Link>
          <Link className={s.link} to="/contact">
            Contact
          </Link>
          <Link className={s.link} to="/lunch">
            Lunch
          </Link>
          <span className={s.spacer}> | </span>
          <Link className={s.link} to="/login">
            Log in
          </Link>
          <span className={s.spacer}>or</span>
          <Link className={cx(s.link, s.highlight)} to="/register">
            Sign up
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
