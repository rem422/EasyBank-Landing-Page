
interface Props {
    text: string;
}

const Button = ({text}: Props) => {
    return <button type='button'>{text}</button>
}

export default Button