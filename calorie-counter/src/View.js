import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import {
  showFormMsg,
  calorieInputMsg,
  mealInputMsg,
  saveMealMsg,
} from './Update';

const { pre, h1, div, button, form, input, label } = hh(h);

function fieldSet(labelText, inputValue, oninput) {
  return div([
    label({ className: 'db mn1' }, labelText),
    input({
      className: 'pa2 input-reset ba w-100 mb2',
      type: 'text',
      value: inputValue,
      oninput,
    }),
  ]);
}

function buttonSet(dispatch) {
  return div([
    button(
      {
        className: 'f3 pv2 ph3 bg-blue white bn mr2 dim',
        type: 'submit',
      },
      'Save'
    ),
    button(
      {
        className: 'f3 pv2 ph3 bn bg-light-gray dim',
        type: 'button',
        onclick: () => dispatch(showFormMsg(false)),
      },
      'Cancel'
    ),
  ]);
}

function formView(dispatch, model) {
  const { description, calories, showForm } = model;
  if (showForm) {
    return form(
      {
        className: 'w-100 mv2',
        onsubmit: (e) => {
          e.preventDefault();
          dispatch(saveMealMsg);
        },
      },
      [
        fieldSet('Meal', description, (e) =>
          dispatch(mealInputMsg(e.target.value))
        ),
        fieldSet('Calories', calories || '', (e) =>
          dispatch(calorieInputMsg(e.target.value))
        ),
        buttonSet(dispatch),
      ]
    );
  } else {
    return button(
      {
        className: 'f3 pv2 ph3 bg-blue white bn',
        onclick: () => dispatch(showFormMsg(true)),
      },
      'Add Meal'
    );
  }
}

function view(dispatch, model) {
  return div({ className: 'mw6' }, [
    h1({ className: 'f2 pv2 bb' }, 'Calorie Counter'),
    formView(dispatch, model),
    pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;
