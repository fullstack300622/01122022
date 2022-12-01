import React, { useState } from 'react'
import { useParams, useHistory, Prompt, useLocation } from 'react-router-dom'


const Item = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [isStartedFillForm, setIsStartedFillForm] = useState(false);

    const params = useParams()
    const history = useHistory()
    const location = useLocation()

    console.log(location)

    const urlSearchParams = new URLSearchParams(location.search);
    const color = urlSearchParams.get('color');
    console.log(color)
    const year = urlSearchParams.get('year');
    console.log(year)



    const beforeSubmitHandler = () => {
        setIsStartedFillForm(false)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        history.replace('/items')
    }

    const changeNameHandler = (e) => {
        setName(e.target.value)
    }

    const changeReviewHandler = (e) => {
        setReview(e.target.value)
    }

    const startFillForm = () => {
        setIsStartedFillForm(true)
    }

    return (
        <div>
            <Prompt when={isStartedFillForm} message={() => "Are you sure, all data will be lost"} />
            Item with id {params.id}
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input onFocus={startFillForm} onChange={changeNameHandler} value={name} className='name' id='name' type="text" />
                </div>
                <div>
                    <label htmlFor='review'>review</label>
                    <input onFocus={startFillForm} onChange={changeReviewHandler} id='review' type="text" ></input>
                </div>
                <input onClick={beforeSubmitHandler} type="submit" />
            </form>
        </div>
    )
}

export default Item