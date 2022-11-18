import styled from '@emotion/styled';

export const ContainerCard = styled.div`
  background-color: #9ec7f8;
  width: 200px;
  border: 1px solid grey;
  padding: 12px 20px;
  margin: 30px auto;
`;

export const ProfileCard = styled.div`
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 10px;
`;
export const ProfileImage = styled.img`
  background-color: #ffffff;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid black;
`;
export const ProfileName = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0 0 0;
`;
export const ProfileDetail = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 10px 0 0 0;
  color: #3a3a3a;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding: 0;
`;
export const StatsItem = styled.li`
  text-align: center;
  list-style: none;
`;
export const StatsLabel = styled.span`
  display: block;
  color: #3a3a3a;
`;
export const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
