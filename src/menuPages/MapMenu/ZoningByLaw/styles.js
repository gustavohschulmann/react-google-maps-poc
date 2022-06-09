import styled from "styled-components";

import { Typography } from "antd";

import { BookmarkSimple, BookOpen, SquaresFour } from "phosphor-react";

const { Title } = Typography;

export const Container = styled.div`
    display: flex;

    flex-direction: column;

    gap: 5px;

    width: 100%;
`;

export const CircleTitleContainer = styled.div`
    display: flex;

    margin-left: 37px;

    width: 100%;
`;

export const StyledTitle = styled(Title)`
    margin-left: 26px;

    &.ant-typography {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
    }
`;

export const IconTitleContainer = styled.div`
    display: flex;

    gap: 20px;

    margin-left: 38px;
    width: 100%;
`;

export const StyledBookmarIcon = styled(BookmarkSimple)`
    height: 25px;
    width: 25px;

    margin-top: 3px;
    color: #fff;
`;

export const StyledBookOpenIcon = styled(BookOpen)`
    height: 25px;
    width: 25px;

    margin-top: 3px;
    color: #fff;
`;

export const StyledSquareFourIcon = styled(SquaresFour)`
    height: 25px;
    width: 25px;

    margin-top: 3px;
    color: #fff;
`;
