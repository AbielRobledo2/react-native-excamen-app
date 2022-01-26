import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const ProblemThreeScreen = () => {
  let billetes_de_500;
  let billetes_de_200;
  let billetes_de_50;
  let monedas_de_10;
  let monedas_de_5;
  let monedas_de_2;
  let monedas_de_1;
  const cantidadDeDinero = 2563;

  const cantidadDeRegreso = (cantidad_de_dinero) => {
    monedas_de_1 = cantidad_de_dinero % 500;
    billetes_de_500 = (cantidad_de_dinero - monedas_de_1) / 500;
    billetes_de_200 = (monedas_de_1 - monedas_de_1 % 200) / 200;
    monedas_de_1 %= 200;
    billetes_de_50 = (monedas_de_1 - monedas_de_1 % 50) / 50;
    monedas_de_1 %= 50;
    monedas_de_10 = (monedas_de_1 - monedas_de_1 % 10) / 10;
    monedas_de_1 %= 10;
    monedas_de_5 = (monedas_de_1 - monedas_de_1 % 5) / 5;
    monedas_de_1 %= 5;
    monedas_de_2 = (monedas_de_1 - monedas_de_1 % 2) / 2;
    monedas_de_1 %= 2;

    return `
      Dinero devuelto es:
      
      Billetes de $500: ${billetes_de_500}
      Billetes de $200: ${billetes_de_200}
      Billetes de $50: ${billetes_de_50}
      Monedas de $10: ${monedas_de_10}
      Monedas de $5: ${monedas_de_5}
      Monedas de $2: ${monedas_de_2}
      Monedas de $1: ${monedas_de_1}
      `;
  };

  return (
    <Container>
      <Title>
        Cajero de billetes
        {'\n $'}
        {cantidadDeDinero}
      </Title>

      <TitleResultado>
        {cantidadDeRegreso(cantidadDeDinero)}
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
