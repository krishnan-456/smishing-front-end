import axios from "axios";
import React, { useState } from "react";
import ModelCard from "../components/ModelCard";
import MessageCard from "../components/MessageCard";
import Loader from "../components/Loader";

const SmsDetection = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [model, setModel] = useState("");
  const [data, setData] = useState({});
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log(inputMessage);

  const changeHandler = (e) => {
    setModel(e.target.value);
    setShowModel(false);
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      // if (inputMessage.length < 10) {
      //   alert("Message Size is lessthan 10 Characters");
      //   return;
      // }
      const response = await axios.post("http://127.0.0.1:8000/sms", {
        message: inputMessage,
        model: model,
      });
      console.log(response);
      setData(response.data);
      setLoading(false);
      setShowModel(true);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(model);
  // console.log(data);

  return (
    <div className="w-full min-h-[80vh] text-xl">
      <form
        className="w-full flex items-center justify-center gap-8 mt-20"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter the SMS"
          onChange={(e) => setInputMessage(e.target.value)}
          className="w-full border px-4 py-3 rounded-md"
        />
        <select
          className="border px-2 py-3 rounded-md"
          onChange={changeHandler}
        >
          <option value={""}>Choose a ML Model</option>
          <option value={"mlp"}>MultiLayer Perceptron</option>
          <option value={"nbc"}>NaiveBayes Classifier</option>
          <option value={"rfc"}>RandomForest Classifier</option>
        </select>
        <input
          type="submit"
          value="Validate SMS"
          className="bg-black px-6 py-3 text-white rounded-md cursor-pointer"
        />
      </form>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <div className="mt-10">
            {showModel ? <MessageCard message={inputMessage} data={data}/> : null}
          </div>
          <div className="mt-10">
            {showModel ? <ModelCard model={model} /> : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmsDetection;
