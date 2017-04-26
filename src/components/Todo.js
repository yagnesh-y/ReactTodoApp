import React, {Component} from 'react'
import AddItem from './AddItem'
import Items from './Items'

class TodoItems extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            items: ['#12345','#34567','#90784'],
            showCompleted: false,
            showActive: false,
            completed: []
        })
    }
    
    onAdd(item) {
        var items = this.state.items
        let updateItems = Object.assign([], items)
        if(item){
            updateItems.push(item)    
        }
        
        this.setState({
            
            items: updateItems
        })
    }
    
    onCompleted() {
        var showCompleted = this.state.showCompleted
        var showActive = this.state.showActive
        showCompleted= true
        showActive=false
        this.setState({
            showCompleted: showCompleted,
            showActive: showActive
        })
    }
    
     onActive() {
        var showActive = this.state.showActive
        var showCompleted = this.state.showCompleted
        showActive= true
        showCompleted= false
        this.setState({
            showCompleted: showCompleted,
            showActive: showActive
        })
    }
    
    onDelete(item) {
        
         if(this.state.showCompleted) {
            var items = this.state.items
            var completed = this.state.completed
            var that= this
            let updatedCompleted = Object.assign([], completed)
            updatedCompleted = updatedCompleted.filter(function(i, index){
                if(i !== item){
                    return true
                }
                updatedCompleted.push(i)
            })
            this.setState({
            completed: updatedCompleted
        })
            
        }
        else {
            var items = this.state.items
            var completed = this.state.completed
            var that= this
            let updateItems = Object.assign([], items)
            let updatedCompleted = Object.assign([], completed)
            updateItems = updateItems.filter(function(i, index){
                if(i !== item){
                    return true
                }
                updatedCompleted.push(i)
            })

            this.setState({

                items: updateItems,
                completed: updatedCompleted
            })
            }
    }    
        
    
    render() {
        
        var items = this.state.items
        var completed = false
        
        var todoitems = items.map(function(item, index){
            return <Items key={index} item= {item} onDelete= {this.onDelete.bind(this)} />
        }.bind(this))
        var that = this
        
        if(this.state.showCompleted ) {
            
            var completed = that.state.completed
            var completeditems = completed.map(function(item, index){
            return <Items key={index} item= {item} onDelete= {this.onDelete.bind(this)}/>
        }.bind(this))
             return (
            <div>
                <AddItem onAdd= {this.onAdd.bind(this)} onCompleted ={this.onCompleted.bind(this)}  onActive= {this.onActive.bind(this)}/>
                <ul className="list-group">
                    {completeditems}
                </ul>
            </div>
            ) 
            
        }
        else if(this.state.showActive){
            
            return (
            <div>
                <AddItem onAdd= {this.onAdd.bind(this)} onCompleted ={this.onCompleted.bind(this)} onActive= {this.onActive.bind(this)} />
            
                <ul className="list-group">
                    {todoitems}
                </ul>
            </div>
            )
        }
           
            
     return (
            <div>
                <AddItem onAdd= {this.onAdd.bind(this)} onCompleted ={this.onCompleted.bind(this)} onActive= {this.onActive.bind(this)} />
                <ul className="list-group">
                    {todoitems}
                </ul>
            </div>
            )
        
                   
       
    }
}

export default TodoItems