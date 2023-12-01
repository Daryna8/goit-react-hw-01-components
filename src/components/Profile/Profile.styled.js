import styled from 'styled-components';

export const StyledProfile = styled.div`
  background-color: white;
  border-radius: 30px;
  margin: 40px;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
`;

export const StyledAvatar = styled.img`
  width: 120px;
  height: 140px;
  margin-top: 80px;
  margin-bottom: 30px;
`;

export const StyledName = styled.p`
  font-size: 32px;
  font-style: italic;
`;

export const StyledTag = styled.p`
  font-size: 24px;
  color: grey;
`;

export const StyledLocation = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  color: grey;
`;

export const StyledStats = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  text-align: center;
  padding: 20px;
  background-color: #eeeeee;
  border-radius: 30px;
`;

export const StyledLabel = styled.span`
  font-size: 28px;
`;

export const StyledQuantity = styled.p`
  font-weight: bold;
  font-size: 22px;
`;
