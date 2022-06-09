import styled from "styled-components";

import { MapTrifold, Book } from "phosphor-react";

export const Container = styled.div`
    display: flex;

    flex-direction: column;

    gap: 5px;

    width: 100%;
    margin-bottom: 25px;
`;

export const CircleTitleContainer = styled.div`
    display: flex;

    margin-left: 37px;

    width: 100%;
`;

export const MapPolicyContainer = styled.div`
    display: flex;

    margin-left: 75px;
    width: 100%;
`;

export const StyledMapIcon = styled(MapTrifold)`
    height: 25px;
    width: 25px;

    margin-top: 3px;
    color: #fff;
`;

export const StyledBookIcon = styled(Book)`
    height: 25px;
    width: 25px;

    margin-top: 3px;
    margin-left: 7px;
    color: #fff;
`;
