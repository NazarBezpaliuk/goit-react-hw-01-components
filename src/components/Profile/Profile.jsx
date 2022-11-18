import PropTypes from 'prop-types';
import {
  ContainerCard,
  ProfileCard,
  ProfileImage,
  ProfileName,
  ProfileDetail,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';
export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ContainerCard>
      <ProfileCard>
        <ProfileImage src={avatar} alt="User avatar" width={180} />
        <ProfileName>{username}</ProfileName>
        <ProfileDetail>@{tag}</ProfileDetail>
        <ProfileDetail>{location}</ProfileDetail>
      </ProfileCard>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity> {views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity> {likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ContainerCard>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
