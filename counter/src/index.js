import hh from 'hyperscript-helpers';
import createElement from 'virtual-dom/create-element';
import { patch, diff, h } from 'virtual-dom';

const { div, button } = hh(h);

const MSG = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
};

const initModel = 0;

function update(msg, model) {
  switch (msg) {
    case MSG.ADD:
      return model + 1;
    case MSG.SUBTRACT:
      return model - 1;
    default:
      return model;
  }
}

function view(dispatch, model) {
  return div([
    div({ className: 'mv2' }, `Count: ${model}`),
    button({ className: 'pv1 ph2 mr2', onclick: () => dispatch(MSG.ADD) }, '+'),
    button(
      { className: 'pv1 ph2', onclick: () => dispatch(MSG.SUBTRACT) },
      '-'
    ),
  ]);
}

// Impure code below

function app(initModel, update, view, node) {
  let model = initModel;
  let currentView = view(dispatch, model);
  let rootNode = createElement(currentView);
  node.appendChild(rootNode);

  function dispatch(msg) {
    model = update(msg, model);
    const updatedView = view(dispatch, model);
    const patches = diff(currentView, updatedView);
    rootNode = patch(rootNode, patches);
    currentView = updatedView;
  }
}

const rootNode = document.getElementById('app');

app(initModel, update, view, rootNode);
