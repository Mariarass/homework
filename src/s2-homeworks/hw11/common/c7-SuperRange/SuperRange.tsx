import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {Simulate} from "react-dom/test-utils";


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ width:400
            }}
            onChange={props.onChange}


            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
