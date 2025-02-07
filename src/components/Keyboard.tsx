export default function Keyboard(props){
    const keyboardElemets = props.letters.map((letterObj, index: number) => {
        return <button 
                    key={index} 
                    className="letter" 
                    onClick={() => props.keyBoardClick(letterObj.word)}
                    style={{backgroundColor: letterObj.isSelected ? letterObj.answer ? "#10A95B" : "#EC5D49" : "#FCBA29"}}
                >
                    {letterObj.word}
                </button>
    })
    return (
        <div className="keyboard" >
            {keyboardElemets}
        </div>
    )
}