import NumButton from '../NumButton/NumButton'
import ActionButton from '../ActionButton/ActionButton'
import './ButtonList.css'

export default function ButtonList({ setInput, Input}) {

const contents = [1,2,3,4,5,6,7,8,9,0,'00','.']
const actions = ['AC','DEL','+','-','*','/','%','=']

    return (
        <div>
            <div className="flex-row-container">
                {actions.map((action,index) => <ActionButton key={index} content={action} setInput={setInput} Input={Input}> </ActionButton>)}

                {contents.map((content,index) => <NumButton key={index}  content={content} setInput={setInput} Input={Input}> </NumButton>)}
            </div>
            
        </div>
    )
}

