import React from "react";
import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
const SendOrder = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const datosEnviadosConfirmado = () => {
    Swal.fire(
      "Datos Enviados EXITOSO",
      `Gracias por su compra`,
      "success"
    );
  };

  const alertaCamposVacios = () => {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Es necesario llenar los campos!",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alertaCamposVacios();
    } else {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    }
    setEmail(" ");
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const order = {
    name,
    email,
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">
        Enviar Formulario de Compra
      </h1>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nombre</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Correo Electronico
          </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
           onClick={datosEnviadosConfirmado}
          >
            Enviar
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center mb-4">
        <p className="font-bold mr-3">Numero de Orden:</p>
        <p
          className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-md text-lg"
          id="orderId"
        >
          {orderId}
        </p>
      </div>
    </div>
  );
};

export default SendOrder;
