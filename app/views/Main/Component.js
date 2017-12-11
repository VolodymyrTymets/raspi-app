import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Content, Spinner } from 'native-base';

import Generator from '../../Containers/Generator';

const MainView = ({ isLoading }) =>
  <Container>
    <Header />
    <Content>
      {!isLoading ? <Generator /> :  <Spinner />}
    </Content>
  </Container>;

MainView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default MainView;
