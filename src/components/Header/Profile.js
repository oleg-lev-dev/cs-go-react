import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import breakpoints from 'utils/breakpoints';

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
  max-width: 150px;
  ${breakpoints.large}{
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ${breakpoints.medium}{
    max-width: 100%;
  }
`;

const ProfileName = styled(Link)`
  color: #27303b;
  font-size: 16px;
  text-decoration: none;
  display: block;
  max-height: 36px;
  overflow: hidden;
  ${breakpoints.medium}{
    max-height: 18px;
  }
  ${breakpoints.large}{
    font-size: 14px;
  }
`;

const ProfileBalance = styled.div`
  color: #17c06d;
  font-size: 19px;
  ${breakpoints.large}{
    font-size: 14px;
  }
`;

function Profile({className}) {
  return (
    <Wrap className={className}>
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