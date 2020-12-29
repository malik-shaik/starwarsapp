import React, { useState } from 'react';
import CharecterDetailsModal from './CharecterDetailsModal';

const Charecters = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [character, setCharacter] = useState(undefined);

  const handleClick = (evt, character) => {
    evt.preventDefault();
    setOpenModal(true);
    setCharacter(character);
  };

  const handleCloseModal = () => setOpenModal(false);

  const displayCharacters = () => {
    const rows = [];
    for (var i = 0; i < data.length; i += 5) {
      rows.push(data.slice(i, i + 5));
    }
    return rows.map((row, index) => (
      <tr key={index}>
        {row.map((character, index) => (
          <td key={index} id="charecter-name">
            <a href="#" onClick={(e) => handleClick(e, character)}>
              {character.name}
            </a>
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <>
      <CharecterDetailsModal
        character={character}
        openModal={openModal}
        closeModal={handleCloseModal}
      />
      <div className="charecters-container">
        <hr />
        <h4 id="heading">Charecters</h4>
        {data && (
          <table className="table">
            <tbody>{displayCharacters()}</tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Charecters;
