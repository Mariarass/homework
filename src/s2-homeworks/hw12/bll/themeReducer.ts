
export type TypeInitialState={
    themeId:number
}

const initState:TypeInitialState = {
    themeId: 1,
}

type TypeChangeThemeId = {
    type: 'SET_THEME_ID'
    id: number


}


export const themeReducer = (state = initState, action: TypeChangeThemeId): TypeInitialState => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): TypeChangeThemeId => ({type: 'SET_THEME_ID', id}) // fix any
