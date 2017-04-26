var React = require('react')
import ReactDOM from 'react-dom'
import AddItem from './components/AddItem'
import App from './components/App'

const app = (
    <div>
        <h2>Todo App using React</h2> 
        <App />
    </div>
    
)

ReactDOM.render(app, document.getElementById('root'));
   

