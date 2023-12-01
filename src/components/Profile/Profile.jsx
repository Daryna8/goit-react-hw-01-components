import PropTypes from 'prop-types';
import {
  StyledProfile,
  StyledDescription,
  StyledAvatar,
  StyledName,
  StyledTag,
  StyledLocation,
  StyledStats,
  StyledLabel,
  StyledQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <StyledProfile>
      <StyledDescription>
        <StyledAvatar src={avatar} alt="User avatar" />
        <StyledName>{username}</StyledName>
        <StyledTag>@{tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>
      </StyledDescription>

      <StyledStats>
        <li>
          <StyledLabel>Followers</StyledLabel>
          <StyledQuantity>{stats.followers}</StyledQuantity>
        </li>
        <li>
          <StyledLabel>Views</StyledLabel>
          <StyledQuantity>{stats.views}</StyledQuantity>
        </li>
        <li>
          <StyledLabel>Likes</StyledLabel>
          <StyledQuantity>{stats.likes}</StyledQuantity>
        </li>
      </StyledStats>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
