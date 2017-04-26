import React, {Component} from 'react'

class AddItem extends Component {
    
    onAdd(e) {
        e.preventDefault()
        this.props.onAdd(this.refs.myInput.value)
        this.refs.myInput.value=''
    }
    
    onCompleted() {
        this.props.onCompleted()
    }
    
    onActive() {
        this.props.onActive()
    }
    
    render() {
        
        return (
            <div>
                <form method="POST" onSubmit= {this.onAdd.bind(this)} >
                    <input style={styles.text} className="form-control" type="search" id="name" ref="myInput" placeholder="Search" />
                    <button style={styles.button} type="submit" className="btn btn-info" value="Submit"  >Submit</button>
                    <button style={styles.button} type="button" className="btn btn-success" value="completed"  onClick={this.onCompleted.bind(this)}>Completed</button>
                    <button style={styles.button} type="button" className="btn btn-danger" value="active"  onClick={this.onActive.bind(this)}>Active</button>
                </form>
            </div>
        )
    }
    
}

const styles = {
        button: {
            marginRight: 10,
            marginTop: 7,
            marginBottom: 7
            
        },
        text: {
            marginTop: 15
        }
    
    }

export default AddItem