import Title from './title';
import PropTypes from 'prop-types';
import {View,Switch} from 'react-native';
import React,{useState} from 'react';
import {listItemWrapperStyle} from '../shared/theme';

export default function ListItemSwitch(props){
  const {data,onChange,icon,title} = props;
  return(
    <View style={listItemWrapperStyle}>
    <Title icon={icon} title={title}/>
    <Switch
      onValueChange={onChange}
      value={data}
    />
    </View>
  )
}
ListItemSwitch.propTypes = {
  title: PropTypes.string.isRequired
};
