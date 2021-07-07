import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postData } from '../../actions'
const Form = props => {
    const [payload, setPayload] = useState({
        name: '',
        age:'',
        height: ''
    })
    const clickhandler = event => {
        event.preventDefault();
        console.log(payload)
        props.postData('smurfs', payload)
        setPayload({name:'', age:'',height:''})
    }
    const handleChange = event => {
        event.preventDefault();
        setPayload({
            ...payload, [event.target.name]: event.target.value
        })
    }
    return (
        <div className='smurf-form'>
            <button onClick={clickhandler}>
                <i className='fa fa-plus' />
            </button>
            <label>
                name:
                <input
                    name='name'
                    value={payload.name}
                    onChange={handleChange} />
            </label>
            <label>
                height:
                <input
                    name='height'
                    value={`${payload.height}`}
                    onChange={handleChange} />
            </label>
            <label>
                age:
                <input
                    name='age'
                    value={payload.age}
                    onChange={handleChange} />
            </label>
        </div>)
}
const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        data: state.data
    }
}
export default connect(mapStateToProps, {
    postData
})(Form);