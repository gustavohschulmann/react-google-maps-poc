import styled from "styled-components";

import { Avatar } from "antd";
import { User } from "phosphor-react";

export const Container = styled.div`
    grid-area: APPCONTAINER;

    display: flex;
    flex-direction: row;
`;

export const AvatarDivContainer = styled.div`
    z-index: 10;
    position: relative;
`;

export const AvatarContainer = styled.div`
    position: absolute;
    top: 65px;
    right: 75px;
    display: flex;
    position: fixed;
`;

export const StyledAvatar = styled(Avatar)`
    background-color: #0987b5;
    height: 50px;
    width: 50px;

    &:hover {
        cursor: pointer;
        background-color: #369abf;
    }
`;

export const StyledUserIcon = styled(User)`
    height: 30px;
    width: 30px;

    margin-top: 8px;
    color: #fff;
`;

export const MYPAvatarDivContainer = styled.div`
    z-index: 10;
    position: relative;
`;

export const MYPAvatarContainer = styled.div`
    position: absolute;
    bottom: 25px;
    right: 65px;
    display: flex;
    position: fixed;
`;

export const StyledMYPAvatar = styled(Avatar)`
    background-color: #0987b5;
    height: 60px;
    width: 60px;

    &:hover {
        cursor: pointer;
        background-color: #509163;
    }
`;
