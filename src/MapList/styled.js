import styled from '@emotion/native';


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
  opacity: 0.8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  justify-content: center;
  margin:10px;
  background-color: #DCDCDD;
  min-width: 90%;
`;
