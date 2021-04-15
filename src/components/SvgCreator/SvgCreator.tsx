import React from 'react'

interface SvgCreatorProps{
    clsName:string,
    svgHref:string
}

export const SvgCreator:React.FC<SvgCreatorProps> = ({clsName,svgHref}) => {
    return (
        <svg className={clsName}>
            <use href={svgHref} />
        </svg>
    )
}
