import React from "react";
import {Icon} from "@iconify/react";

interface IconProps {
    color?:string
    size?:string
    rotate?:number
}

export const DownArrow = ({color = "#000", size = "20", rotate = 0}: IconProps): JSX.Element => <Icon width={size} height={size} rotate={rotate} color={color} icon="material-symbols:expand-circle-down-rounded" />