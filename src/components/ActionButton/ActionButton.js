import './ActionButton.css'

export default function ActionButton({content, Input, setInput}) {


    const handleClick = () => {
        try {
            if (content === "AC"){
                setInput([])
            }
            else if (content === 'DEL'){
                const newArray = [...Input]
                newArray.splice(-1,1)
                setInput(newArray)
            }
            else if (content !== '='){
                setInput([...Input, content])
            }
    
            else {
                const total = ((Input.join('')))
                setInput([eval(total)])
            }
        } catch {
            alert('Please Attempt A Correct Calculation')
            return
        }
        
    }

    return (
        <div>
            <button className="ActionButton" onClick={handleClick}>{content}</button>
        </div>
    )
}
