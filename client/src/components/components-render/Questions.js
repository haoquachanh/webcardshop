import React from "react";
import {AiOutlineCaretRight} from 'react-icons/ai'

export default function Question({questionSet}){
    return (
        <div className="questions">
            <div className="questions-title">
                <hr/>
                <div className="title">
                    <p className="main-title">Câu hỏi thường gặp</p>
                    <p className="sub-title">Các câu hỏi thường gặp khi đặt in Card giấy C300</p>
                </div>
                <hr/>
            </div>
            <div className="question-content">
                {questionSet.map((question, index) => {
                    return (
                        <div className='question-item' key={index}>
                            <div className="question-text">
                                {index+1}. {question.ques}
                            </div>
                            <div className="answer-text">
                                <AiOutlineCaretRight/>{question.ans}
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}