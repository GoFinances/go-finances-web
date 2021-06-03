/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import * as Icons from 'react-icons/fi';
import { OptionProps, SingleValueProps, OptionTypeBase } from 'react-select';

import { Container } from "./styles";

const CategoryIconOptionConfig: React.FC<OptionProps<OptionTypeBase, boolean> | SingleValueProps<OptionTypeBase>
  > = ({ innerProps, data }) => {
    const { id } = data;
    const [, iconName] = id.split('/');
    const Icon = (Icons as any)[iconName];
    return (
      <Container {...innerProps}>
        <Icon size={20} />
      </Container>
    );
  };

export default CategoryIconOptionConfig;
