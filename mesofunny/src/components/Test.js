import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchData, addData, deleteData, editData } from '../store/actions'

const Test = (props) => {
    const [input, setInput] = useState({
        form: {
            title: '',
            joke: '',
            status: ''
        }
    })

    // const [state, setState] = useState([props.jokes])
    
    const logout = () => {
        localStorage.removeItem('token')
        props.history.push('/')
    }

    useEffect(() => {
        props.fetchData()
    }, [])

    const addJoke = (e) => {
        e.preventDefault()
        props.addData(input.form)
        setInput({
            form: {
                title: '',
                joke: '',
                status: ''
            }
        })
    }

    const handleChanges = e => {
    setInput({
      form: {
        ...input.form,
        [e.target.name]: e.target.value
      }
    });
  };
    console.log(props.jokes)
    return ( 
        <div>
            <p>test me</p>
            {props.jokes ? props.jokes.map((joke,i) => {
                return <div key={i}>
                    <p>{joke.title}</p>
                    <p>{joke.joke}</p>
                    {console.log(joke.id)}
                    <button onClick={() => props.deleteData(joke.id)}>Delete</button>
                    <button>Edit</button>
                </div>
            }) : <p>Loading...</p>}
            <form>
                <input
                    type="text"
                    name="title"
                    value={input.form.title}
                    placeholder="title"
                    onChange={handleChanges}
                />
                <input
                    type="text"
                    name="joke"
                    value={input.form.joke}
                    placeholder="joke"
                    onChange={handleChanges}
                />
                <input
                    type="text"
                    name="status"
                    value={input.form.status}
                    placeholder="public or private"
                    onChange={handleChanges}
                />
            <button onClick={addJoke}>Add</button>
            </form>
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
    { fetchData, addData, deleteData, editData }
)(Test)