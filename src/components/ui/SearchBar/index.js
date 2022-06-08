import React from "react";

import { StyledInput } from "./styles";
import { MagnifyingGlass, X } from "phosphor-react";

const SearchBar = () => {
    return <StyledInput placeholder="110 Yonge St. Toronto" prefix={<MagnifyingGlass />} suffix={<X style={{ color: "rgba(0,0,0,.45)" }} />} />;
};

export default SearchBar;
