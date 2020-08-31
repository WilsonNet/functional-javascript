const MSGS = {
  SHOW_FORM: 'SHOW_FORM',
};

// Typing the reducer
export function showFormMsg(showForm) {
  return {
    type: MSGS.SHOW_FORM,
    showForm,
  };
}

function update(msg, model) {
  switch (msg.type) {
    case MSGS.SHOW_FORM:
      const { showForm } = msg;
      return { ...model, showForm: showForm, description: '', calories: 0 };
    default:
      return model;
  }
}

export default update;
