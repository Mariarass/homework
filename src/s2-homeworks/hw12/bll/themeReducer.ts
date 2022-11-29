
export type TypeInitialState={
    theme:string
}

const initState:TypeInitialState = {
    theme: '1',
}

type TypeChangeThemeId = {
    type: 'SET_THEME_ID'
    theme: string
}


export const themeReducer = (state = initState, action: TypeChangeThemeId): TypeInitialState => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {
                ...state,
                theme: action.theme
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (theme: string): TypeChangeThemeId => ({type: 'SET_THEME_ID', theme}) // fix any
