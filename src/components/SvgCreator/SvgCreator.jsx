import React from 'react'

export const SvgCreator = ({clsName,svgHref}) => {
    return (
        <svg className={clsName}>
            <use href={svgHref} />
        </svg>
    )
}
