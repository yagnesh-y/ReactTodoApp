import React, {Component} from 'react'

class Items extends Component {
    
    onDelete() {
        this.props.onDelete(this.props.item)
    }
    
    render() {
        var items = this.props.item
        return (
            <div>
                <li style= {styles.li} className="list-group-item" >
                    {items}
                    <span onClick= {this.onDelete.bind(this)} style={styles.span}>&#10006;</span>
                </li>
            </div>
        )
    }
}

export default Items

var styles= {
    
    li: {        
        height: 50
        
    },
    span: {
        textAlign: 'right',
        marginTop: -15,
        color: 'red',
        display: 'block'
    }
}