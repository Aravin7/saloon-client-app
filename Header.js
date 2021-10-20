import React from 'react';
import './Header.css';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

export const Header = () => {
  return (
    <div className={'header'}>
      <span className="logo"> logo</span>
      <div className={'HeaderInfo'}>
        <div>
          <h6>Open</h6>
          <h6>9Am - 9Pm</h6>
        </div>
        <span>
          <QueryBuilderIcon />
        </span>
      </div>
    </div>
  );
};
