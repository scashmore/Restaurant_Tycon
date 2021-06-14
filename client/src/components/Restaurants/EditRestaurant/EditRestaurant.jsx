// import React, {useState} from 'react';
// import {Button, Modal} from 'react-bootstrap';
// import EditForm from './EditForm/EditForm'

// const EditRestaurant = ({generateRestaurant, restName, restCuisine, restMenu, restMenuNum, restId}) => {
//     const [show, setShow] = useState(false);
//     const [modalId1, setModalId1] = useState('')

//     const handleModal = (e) =>{
//         setModalId1(e.currentTarget.value)
        
//     }

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return (
//         <div>
//             <Button className="editBtn" variant="link" size="lg" onClick={(e)=> {handleShow(); handleModal(e)}} value={restId}>✎</Button>
//             <Modal show={show && (modalId1 === restId)} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Restaurant</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                         <EditForm generateRestaurant={generateRestaurant} handleClose={handleClose} restName={restName} restCuisine={restCuisine} restMenu={restMenu} restMenuNum={restMenuNum} restId={restId}/>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>Cancel</Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }

// export default EditRestaurant
