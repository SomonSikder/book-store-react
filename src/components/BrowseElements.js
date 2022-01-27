import React from 'react';

const BrowseElements = ({name, type}) => {
    return (
        <div className={`${type} category card book-scroll`}>
        <h5 className="card-header">{name}</h5>
        <span className="divider"></span>
        <ul>
          <li>
            <span>{type}</span>
          </li>
          <li>
            <span>{type}</span>
          </li>
          <li>
            <span>{type}</span>
          </li>
        </ul>
      </div>
    );
};

export default BrowseElements;