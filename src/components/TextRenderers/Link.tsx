import React from "react"

import { TextRenderer, renderWithInfo} from "./TextRenderer"
import { Text } from "./BasicText"

import { _get, _hasOwnProperty, _isNull } from "@common/utils";


const _renderLink = (value: string, url: string, newWindow: boolean=false) => {
    if (newWindow) {
        return <a href={url}  target="_blank" rel="noopener noreferrer">{value}</a>
    }
    return <a href={url}>{value}</a>
}

// TODO: handle target?
export const Link = <T,>({ props }: TextRenderer<T>) => {
    const url = _get('url', props)
    const value = _get('value', props)
    
    if (_isNull(url)) { // render as text
        return <Text props={props} />
    }

    const linkElement = _renderLink(value, url)
    const hasTooltip = _hasOwnProperty('tooltip', props)
    if (hasTooltip) {
        return renderWithInfo(linkElement, _get('tooltip', props), false)
    }
    
    return <>{linkElement}</>
}