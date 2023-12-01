import PropTypes from 'prop-types';
import { getRandomBgColor } from 'components/helpers/getRandomBgColor';
import {
  StyledStatistics,
  StyledTitle,
  StyledStatList,
  StyledItem,
  StyledLabel,
  StyledPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats = [] }) => {
  return (
    <StyledStatistics>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledStatList>
        {stats.map(el => (
          <StyledItem key={el.id} backgroundColor={getRandomBgColor()}>
            <StyledLabel>{el.label}</StyledLabel>
            <StyledPercentage>{el.percentage}%</StyledPercentage>
          </StyledItem>
        ))}
      </StyledStatList>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
