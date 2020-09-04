import ConstantActionTypes from './modal.constants';

export const showModal = (index) => ({ 
  type: ConstantActionTypes.SHOW_MODAL,
  payload: index
});

export const showMessage = () => ({ type: ConstantActionTypes.SHOW_MESSAGE });

export const editBusiness = (index) => ({ 
  type: ConstantActionTypes.EDIT_BUSINESS,
  payload: index
});

export const closeAllModal = () => ({ type: ConstantActionTypes.CLOSE_ALL_MODAL });