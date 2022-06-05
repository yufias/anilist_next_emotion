/** @jsxImportSource @emotion/react */
import { ButtonStyle } from "./ButtonStyle"

const Button = ({children, variant, buttonTrigger}) => {
    return(
        <button
            css={variant == 'danger' ? [ButtonStyle.button, ButtonStyle.danger] : ButtonStyle.button}
            onClick={() => buttonTrigger()}
        >
            {children}
        </button>
    )
}

export default Button