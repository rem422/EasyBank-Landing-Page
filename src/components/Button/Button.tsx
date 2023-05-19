interface Props {
    text: string;
    clicked: () => void;
}

const Button = ({text, clicked}: Props) => {
    return <button type='button' onClick={clicked}>{text}</button>
}

export default Button