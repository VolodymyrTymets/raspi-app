import _ from 'lodash';
import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';


import Component from './Component';

const enhance = compose(
  connect(state => ({

  })),
  withHandlers({

  }),
);

export default enhance(Component);
