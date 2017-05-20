import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from './styled';

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginForm = ({ fields, handleChange }) => (
  <InputContainer>
    {fields.map((field, index) => (
      <Input
        type="text"
        required
        name={field}
        placeholder={field}
        value={fields[field]}
        key={index}
        onChange={handleChange}
      />
    ))}
  </InputContainer>
);

LoginForm.propTypes = {
  fields: PropTypes.array,
  handleChange: PropTypes.func,
};

export default LoginForm;
