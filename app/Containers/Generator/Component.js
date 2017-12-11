import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Item, Input, Label, Button, Text, Content } from 'native-base';


const StatisticDashboard = ({

}) =>
  <Form>
    <Item floatingLabel>
      <Label>Interval</Label>
      <Input />
    </Item>
    <Content padder>
      <Button primary block><Text> Start </Text></Button>
    </Content>
    <Content padder>
      <Button dark block><Text> Stop </Text></Button>
    </Content>
  </Form>;



StatisticDashboard.propTypes = {
  //statuses: PropTypes.array.isRequired,
  // statistics: PropTypes.object.isRequired,
  // toFixed: PropTypes.func.isRequired,
  // getColor: PropTypes.func.isRequired,
  // getSquares: PropTypes.func.isRequired,
  // getTranslate: PropTypes.func.isRequired,
  // getPercentage: PropTypes.func.isRequired,
};

export default StatisticDashboard;
