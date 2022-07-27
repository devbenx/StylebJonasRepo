import React from 'react'

const XModal = () => {
      return ( 
            <div> Formx </div>
      )
}

export default XModal;

const ModalCard = styled(Box)`

      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;

      margin: 1rem auto;
      width: 100%;
      height: auto;
      overflow: scroll;
      max-width: 600px;
      border-radius: 12px;
      background-color: #242424;
`;

const Modalx = styled(Modal)`
      display: flex;
      justify-content: center;
      align-items: center;
`;