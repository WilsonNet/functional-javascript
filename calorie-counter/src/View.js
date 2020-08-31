import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { pre, h1, div } = hh(h);

function view(dispatch, model) {
  return div({ className: 'mw6' }, [
    h1({ className: 'f2 pv2 bb' }, 'Calorie Counter'),
    pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;
