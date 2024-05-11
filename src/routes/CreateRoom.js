import React from "react";
import { v1 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const navigate = useNavigate();

  function create() {
    const id = uuid();
    navigate(`/room/${id}`);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={create}
      >
        Create room
      </button>
    </div>
  );
};

export default CreateRoom;
