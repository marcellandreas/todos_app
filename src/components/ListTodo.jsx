import "./home.css";

function ListTodo(props) {
   return (
   <div className="container d-flex justify-content-between container-list">
      <div className="border-bottom">
         <input type="checkbox" defaultChecked={props.data.completed} onChange={() => {props.handleChange(props.data);}}/>
         <label>{props.data.completed ? (
               <p className="font"><s>{props.data.title}</s></p>
               ) : (
               <p className="font">{props.data.title}</p>
               )}
         </label>
      </div>
      <div className="button-todo">
         <button onClick={() => {props.handleDel(props.data.id);}}> Delete </button>
      </div>
   </div>
   );
}

export default ListTodo;
