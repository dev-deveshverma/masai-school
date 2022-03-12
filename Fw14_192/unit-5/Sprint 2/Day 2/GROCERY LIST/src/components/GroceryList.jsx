import '../App.css'
export const TodoItem = ({title,id, handleDelete})=>{
    return (
        <div id="grocery_div" >
            <div className="TodoItem" >
             <span className='Title'>{title}</span>
            <button onClick={()=>{
                handleDelete(id)
            }}>Delete</button>
         </div>
        </div>
    )
}