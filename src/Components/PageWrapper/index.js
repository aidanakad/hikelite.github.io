import React from 'react';
import Navigation from '../Navigation'
import PropTypes from 'prop-types'
import style from './page.module.css'

export default function PageWrapper({children}) {
  return (
    <div className={style.page}>
        <Navigation/>
        {children}
    </div>
  );
}

PageWrapper.propTypes={
  children: PropTypes.node.isRequired 
}