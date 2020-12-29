import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(20,33,61,0.5)'
  },
  content: {
    top: '47%',
    left: '45%',
    width: '300px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-30%, -30%)',
    backgroundColor: '#14213d',
    color: '#fff',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
};

const CharecterDetailsModal = ({ character, openModal, closeModal }) => {
  return (
    <Modal isOpen={openModal} onRequestClose={closeModal} ariaHideApp={false} style={customStyles}>
      {character && (
        <>
          <h4 id="heading">{character.name}</h4>
          <table>
            <tbody>
              <tr className="row">
                <td>Height</td>
                <td>:</td>
                <td>{character.height}</td>
              </tr>
              <tr className="row">
                <td>Gender</td>
                <td>:</td>
                <td>{character.gender}</td>
              </tr>
              <tr className="row">
                <td>Mass</td>
                <td>:</td>
                <td>{character.mass}</td>
              </tr>
              <tr className="row">
                <td>Skin color</td>
                <td>:</td>
                <td>{character.skin_color}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <button className="closeButton" onClick={closeModal}>
        Ok
      </button>
    </Modal>
  );
};

export default CharecterDetailsModal;
