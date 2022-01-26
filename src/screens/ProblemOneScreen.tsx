import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

const ProblemThreeScreen = () => {
  const numero = 10;

  const fibonacci = (n) => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2));

  const numeroFibonacci = (n) => {
    const numero1 = fibonacci(n - 1);
    const numero2 = fibonacci(n);
    const numero3 = fibonacci(n + 1);
    return `los numero son ${numero1} : ${numero2} : ${numero3}`;
  };

  return (
    <Container>
      <Title>
        Secuencia Fibonacci
        {'\n #'}
        {numero}
      </Title>

      <TitleResultado>
        {numeroFibonacci(numero)}
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
  text-align: center;
  `;

const TitleResultado = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #DAF7A6;
  margin-top: 20px;
  `;
export default ProblemThreeScreen;
