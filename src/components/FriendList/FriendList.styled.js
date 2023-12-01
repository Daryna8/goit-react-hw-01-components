import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  list-style: none;
  margin-top: 40px;
`;

export const StyledListItem = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 5px;
`;

export const StyledOnlineIndicator = styled.div`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StyledAvatar = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StyledName = styled.p`
  font-size: 28px;
`;
