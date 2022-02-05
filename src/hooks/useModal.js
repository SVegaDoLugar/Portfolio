import {useState} from 'react';
const useModal = () =>{
    const [modalState, setModalState] = useState(false);
    const handleModalState = () => {
        if(modalState ==true){}
        setModalState(!modalState);
    }
    return {    
        handleModalState,
        setModalState,
        modalState
    }
}
export default useModal;



