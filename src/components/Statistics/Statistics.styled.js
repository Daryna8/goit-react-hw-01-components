import styled from 'styled-components';

export const StyledStatistics = styled.section`
  background-color: white;
  margin: 40px;
  width: 600px;
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const StyledStatList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
`;

export const StyledItem = styled.li`
  background-color: ${props => props.backgroundColor};
`;

export const StyledLabel = styled.span`
  font-size: 24px;
`;

export const StyledPercentage = styled.p`
  font-size: 30px;
  padding-bottom: 10px;
`;
