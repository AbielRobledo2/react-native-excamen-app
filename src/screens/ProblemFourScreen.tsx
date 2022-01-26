import React from 'react';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

const calcularSaludos = (n) => {
  let k = 0;
  let y = 0;
  let num = 0;
  let result;

  const asistentes = n;
  num = asistentes;

  k = 2;
  y = num - k;

  result = factorial(num) / (factorial(k) * factorial(y));

  return result;
};

const factorial = (x) => {
  let fact = 1;

  for (let i = 1; i <= x; i++) {
    fact *= i;
  }
  return fact;
};

const numeroDeAsistentes = 5;

const HomeScreen: React.FC = () => (
  <Container>
    <Title>
      Numero de asistentes
      {' '}
      {numeroDeAsistentes}
    </Title>

    <TitleResultado>
      el numero total de interacciones son
      {' '}
      {calcularSaludos(numeroDeAsistentes)}
    </TitleResultado>

  </Container>
);

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

export default HomeScreen;
