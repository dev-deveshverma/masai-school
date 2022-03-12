import '../App.css'
export const TodoItem = ({title,id, handleDelete})=>{
    return (
        <div >
            <div className="TodoItem" >
             <span className='Title'>{title}</span>
           
         </div>
        </div>
    )
}