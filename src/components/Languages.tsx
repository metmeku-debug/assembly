import skull from '../assets/danger-skull-svgrepo-com.svg'

export default function Languages(props) {
    const languages = ['Html', 'Css', 'JavaScript', 'React', 'TypeScript', 'NodeJs', 'Python', 'Ruby', 'Assembly']
    const bgcolor = ["#E2680F","#328AF1","#F4EB13","#2ED3E9","#298EC6","#599137","#FFD742","#D02B2B","#2D519F"]
    const languagesui = languages.map((language, index) => {
        return <div
                    key={index} 
                    style={{ backgroundColor: bgcolor[index], opacity: props.incorrect < index + 1 ? 1 : 0.3, color: language == 'JavaScript' || language =='React' || language =='Python' ? 'black' : 'white'}} 
                    className="language"
                >
                {language}{props.incorrect < index + 1 ? null : <img className='skull' src={skull}/>}
                </div>
    })
    return(
        <div className='languages'>
            {languagesui}
        </div>
    )
}