import React from 'react';
import { useSelector } from 'react-redux';
import { showSpinner } from '../../redux/selectors';
import './styles.scss';

const CoverSpinner = () => {
  const show = useSelector(showSpinner);
  return show ? <div className="cover-spin" /> : null;
};

export default CoverSpinner;
