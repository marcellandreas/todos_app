import { useState } from "react";
import "./home.css";
import RoundedInput from "./RoundedInput";
import ListTodo from "./ListTodo";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "Mengerjakan Execise",
      completed: true,
    },
    {
      id: 2,
      title: "Mengerjakan Homework",
      completed: false,
    },
    {
      id: 3,
      title: "Marathon Nonton One Piece",
      completed: false,
    },
  ];

  const [dataTodo, setDataTodo] = useState(data);
  function handleSubmit(newTast) {
    let newTask;
    const updatedlist = [...dataTodo];
    if (dataTodo.length === 0) {
      newTask = { id: 1, ...newTast };
    } else {
      newTask = {
        id: (dataTodo[dataTodo.length - 1].id + 1),
        ...newTast,
      };
    }

    updatedlist.push(newTask);
    setDataTodo(updatedlist);
  }

  function handleChange(changes) {
    const newData = dataTodo.map((data) => {
      if (data.id === changes.id) {
        if (data.completed) {
          data.completed = false;
        } else {
          data.completed = true;
        }
      }
      return data;
    });
    setDataTodo(newData);
  }

  function handleDel(id) {
    const newData = dataTodo.filter((data) => data.id !== id);
    setDataTodo(newData);
  }

//   function handleEdit(id) {
//     let changeData = [...dataTodo];
//     let foundData = changeData.find((data) => data.id === id);
//     setDataTodo(foundData.title);
//   }

  return (
    <div className="container-todo">
      <div>
        <h1 className="title">TODOS</h1>
      </div>
      <RoundedInput handleSubmit={handleSubmit} />
      {dataTodo.map((data, ) => (
        <ListTodo
          key={data.id}
          data={data}
          handleChange={handleChange}
          handleDel={handleDel}
        />
      ))}
    </div>
  );
};

export default Home;
