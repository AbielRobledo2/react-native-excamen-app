import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

const ProblemThreeScreen = () => {
  '';

  function palindromeChecker(str) {
    if (str <= 1000) {
      const newStr = str.replace(/[\W_]/g, '').toLowerCase();
      const strReversed = newStr.split('').reverse().join('');
      return newStr === strReversed ? `el numero ${str} es palindromo` : `el numero ${str} no es palindromo`;
    }
    return ('el numero no es menor a 1000');
  }

  return (
    <Container>
      <Title>Numero Polindromo</Title>

      <TitleResultado>
        {palindromeChecker('999')}
      </TitleResultado>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
  background-color: #581845;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #DAF7A6;
  `;

const TitleResultado = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #DAF7A6;
  margin-top: 20px;
  `;
export default ProblemThreeScreen;
