const INITIAL_STATE = {
    activeMenu: "CLIPBOARDTEXT",
};

export default function menu(state = INITIAL_STATE, action) {
    if (action.type === "TOGGLE_MENU") {
        return { ...state, activeMenu: action.newMenu };
    }
    return state;
}
