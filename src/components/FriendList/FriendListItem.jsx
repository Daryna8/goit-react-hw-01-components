import {
  StyledListItem,
  StyledOnlineIndicator,
  StyledAvatar,
  StyledName,
} from './FriendList.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <StyledListItem key={id}>
      <StyledOnlineIndicator $isOnline={isOnline}></StyledOnlineIndicator>
      <StyledAvatar src={avatar} alt="User avatar" width="48" />
      <StyledName>{name}</StyledName>
    </StyledListItem>
  );
};
