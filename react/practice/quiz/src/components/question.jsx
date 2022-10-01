const Question = ({data, action}) => {
    return(
        <div>
            <p className="question" onClick= {action}>{data.question}</p>
            {data.options.map((option,index) => (
                <p className={option.isCorrect.toString()}  onClick= {action} key={index}>{option.option}</p>
        )) }
        </div>
    )
}

export default Question