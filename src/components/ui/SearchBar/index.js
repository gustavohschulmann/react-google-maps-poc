import React, { useState } from "react";

import { StyledInput, StyledX } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

const SearchBar = () => {
    const [value, setValue] = useState("");

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) setValue("");
    };

    return (
        <StyledInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="110 Yonge St. Toronto"
            prefix={<MagnifyingGlass />}
            suffix={<StyledX onClick={() => setValue("")} />}
        />
    );
};

export default SearchBar;
