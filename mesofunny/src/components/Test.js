import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchData, addData } from '../store/actions'

const Test = (props) => {

    
    const logout = () => {
        localStorage.removeItem('token')
        props.history.push('/home')
    }

    useEffect(() => {
        props.fetchData()
    }, [])

    const addJoke = (e) => {
        e.preventDefault()
        addData()
    }
    
    return ( 
        <div>
            <p>test me</p>
            {props.jokes.map(joke => {
                return <div>
                    <p>{joke.title}</p>
                    <p>{joke.joke}</p>
                </div>
            })}
            <button onClick={logout}>Logout</button>
        </div>
     );
}


 
const mapStateToProps = state => {
    console.log(state)
    return {
        error: state.error,
        isFetching: state.isFetching,
        jokes: state.jokes,
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    { fetchData, addData }
)(Test)