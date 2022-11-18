import styled from '@emotion/styled';

export const ListFriend = styled.ul`
  min-width: 500px;
  padding-inline-start: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ItemFriend = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  min-width: 200px;
  padding-left: 15px;
  border: 1px solid black;
  margin-bottom: 10px;
  list-style: none;
`;
export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
export const Name = styled.p`
  font-size: 24px;
`;