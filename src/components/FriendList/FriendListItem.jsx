import {
  StyledListItem,
  StyledOnlineIndicator,
  StyledAvatar,
  StyledName,
} from './FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <StyledListItem>
      <StyledOnlineIndicator $isOnline={isOnline}></StyledOnlineIndicator>
      <StyledAvatar src={avatar} alt="User avatar" width="48" />
      <StyledName>{name}</StyledName>
    </StyledListItem>
  );
};
