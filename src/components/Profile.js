import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  padding: 0 24px;
`;

const Avatar = styled(Link)`
    width: 44px;
    height: 44px;
    position: relative;
    text-decoration: none;
    img {
      display: block;
      width: 100%;
    }
`;

const OnlineStatus = styled.i`
  background-color: ${(props) => props.online ? '#17c06d' : '#fe0623'};
  width: 7px;
  height: 7px;
  border-radius: 4px;
  display: block;
  position: absolute;
  right: -3.5px;
  top: -3.5px;
`;

const ProfileInfo = styled.div`
  padding: 0 0 0 16px;
  font-weight: 400;
`;

const ProfileName = styled(Link)`
  color: #27303b;
  font-size: 16px;
  text-decoration: none;
`;

const ProfileBalance = styled.div`
  color: #17c06d;
  font-size: 19px;
`;


function Profile() {
  return (
    <Wrap>
      <Avatar to="/profile">
        <img src="/images/avatar.png" alt=""/>
        <OnlineStatus online={false}/>
      </Avatar>
      <ProfileInfo>
        <ProfileName to="/profile">Виктор Павлов</ProfileName>
        <ProfileBalance>8 608.50 Р</ProfileBalance>
      </ProfileInfo>
    </Wrap>
  );
}

export default Profile;