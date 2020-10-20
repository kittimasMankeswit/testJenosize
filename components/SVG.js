import React, { Fragment } from 'react'
import {ReactSVG} from 'react-svg'

function Comp (
    {
        src,
    }
) 
{
    return (
        <div>
            <ReactSVG src={src} />
            <style jsx>{`
                div,
                div :global(div)
                {
                    width: 100%;
                    height: 100%;

                    display: flex;

                    flex-direction: row;

                    align-items: center;
                    justify-content: center;
                }

                div :global(svg)
                {
                    fill: currentColor;

                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}

export default Comp