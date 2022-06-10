import React, { useState } from "react";

import { StyledInput, StyledX } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

const SearchBar = ({ onKeyDown }) => {
    const [value, setValue] = useState("");

    return (
        <StyledInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="110 Yonge St. Toronto"
            onKeyDown={onKeyDown}
            prefix={<MagnifyingGlass />}
            suffix={<StyledX onClick={() => setValue("")} />}
        />
    );
};

export default SearchBar;
