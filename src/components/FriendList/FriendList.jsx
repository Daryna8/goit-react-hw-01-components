import PropTypes from 'prop-types';
import {
  StyledFriendList,
  StyledListItem,
  StyledOnlineIndicator,
  StyledAvatar,
  StyledName,
} from './FriendList.styled';

export const FriendList = ({ friends = [] }) => {
  return (
    <StyledFriendList>
      {friends.map(el => (
        <StyledListItem key={el.id}>
          <StyledOnlineIndicator isOnline={el.isOnline}></StyledOnlineIndicator>
          <StyledAvatar src={el.avatar} alt="User avatar" width="48" />
          <StyledName>{el.name}</StyledName>
        </StyledListItem>
      ))}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
