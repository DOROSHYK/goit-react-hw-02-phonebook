import React from 'react';
import shortid from 'shortid';

const Phonebook = ({ date, onDelete }) => {
  // const keyId = shortid.generate();

  return (
    <ul>
      {date.map(({ name, number }) => (
        <li key={shortid.generate()}>
          <span>{name}:</span>
          <span>{number}</span>
          <button type="button" onClick={() => onDelete(name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Phonebook;
