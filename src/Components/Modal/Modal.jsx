
import './Modal.css'


// const Modal = ({ isOpen, closeModal, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <button className="close-button" onClick={closeModal}>
//           Close
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default App;

