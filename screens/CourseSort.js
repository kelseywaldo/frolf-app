import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
// import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, GrayButton } from '../components/common';

class CourseSort extends Component {

  render() {
    return(
      <Card>
      <CardSection>
      <Text>Sort Courses</Text>
      </CardSection>

      <CardSection>
      <Text>Sort</Text>
      </CardSection>
      </Card>
    )
  }
}

const styles = {
  headerStyle: {
    fontSize: 21,
    fontWeight: '600',
  },
  textStyle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)'
  },
}

export default CourseSort;