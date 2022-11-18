import PropTypes from 'prop-types';
import {
  ListFriend,
  ItemFriend,
  Status,
  Avatar,
  Name,
} from './Friendlist.styled';
export default function FriendList({ friends }) {
  return (
    <ListFriend>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <ItemFriend key={id}>
          <Status status={isOnline}>{isOnline}</Status>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </ItemFriend>
      ))}
    </ListFriend>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
