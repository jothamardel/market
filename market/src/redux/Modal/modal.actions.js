import ConstantActionTypes from './modal.constants';

export const showModal = (index) => ({ 
  type: ConstantActionTypes.SHOW_MODAL,
  payload: index
});