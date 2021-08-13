import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled.View`
  height:100%;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

export const CustomFlatList = styled.FlatList`
  background-color: white;
  width: 100%;
`;

export const PreviewContainer = styled.View`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  justify-content: center;
  margin:1px;
  background-color: #DCDCDD;
  min-width: 90%;
`;

export const LinearCustom = styled(LinearGradient)`
  border-radius: 10;
  margin:10;
`;