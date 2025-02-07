
export default function Word (props) {
    const wordElement = props.word.map((letterObj, index) => {
        return <div className="letterOfWord"key={index}>{letterObj.isFound ? letterObj.letter : null}</div>
    })
    return(
        <div className="currentWord">
            {wordElement}
        </div>
    )
}