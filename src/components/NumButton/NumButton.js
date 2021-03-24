import './NumButton.css'

export default function NumButton({content, Input, setInput}) {

    const handleClick = () => {
        setInput([...Input, content])
    }

    return (
        <div>
            <button className='NumButton' onClick={handleClick}>{content}</button>
        </div>
    )
}
