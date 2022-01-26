import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigation';

type HomeNavigatioProp = NativeStackNavigationProp<RootStackParamList, 'home'>;
type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // const navigation = useNavigation<HomeNavigatioProp>();

  '';

  return (
    <Container>
      <Title>
        Menu de Problemas
      </Title>

      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => navigation.navigate('problemOneScreen' as never)}
      >
        <MenuButton>
          <ButtonTitle>
            Problema 1
          </ButtonTitle>
        </MenuButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('problemTwoScreen' as never)} style={{ width: '100%' }}>
        <MenuButton>
          <ButtonTitle>
            Problema 2
          </ButtonTitle>
        </MenuButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('problemThreeScreen' as never)} style={{ width: '100%' }}>
        <MenuButton>
          <ButtonTitle>
            Problema 3
          </ButtonTitle>
        </MenuButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('problemFourScreen' as never)} style={{ width: '100%' }}>
        <MenuButton>
          <ButtonTitle>
            Problema 4
          </ButtonTitle>
        </MenuButton>
      </TouchableOpacity>
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
  margin: 30px;
  `;

const ButtonTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #900C3F;
  `;

const MenuButton = styled.View`
  justify-content: center;
  align-items: center;
  background: #FFC300;
  padding: 10px;
  height: 60px;
  border-radius: 10px;
  margin: 10px;
`;

export default HomeScreen;
