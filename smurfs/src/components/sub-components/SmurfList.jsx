import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
const SmurfList = props => {
    useEffect(() => {
        props.getData('smurfs');
    }, [])
    return (
        <div className='smurf-list'>
            {props.isFetching ?
                <h1>hold on while infos is loading..</h1> :
                props.data.map(smurf => {
                    console.log(smurf);
                    return (
                        <div className='smurf-card'>
                            <h1 key={smurf.id}>{smurf.name}</h1>
                            <p>height: {smurf.height}</p>
                        </div>
                    )
                })}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        data: state.data
    }
}
export default connect(mapStateToProps, { getData })(SmurfList);