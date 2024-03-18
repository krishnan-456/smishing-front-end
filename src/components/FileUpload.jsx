import axios from "axios";
import React, { useState } from "react";
import MessageCard from "./MessageCard";
import Loader from "./Loader";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState();
  // const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0].name);
    setFileName(event.target.files[0].name);
    alert("file upload Successfully ");
    setShow(true);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      console.log("No file selected");
      alert("No file selected");
      return;
    }
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append("xml_file", selectedFile);

      const response = await axios.post(
        "http://127.0.0.1:8000/multiplesms",
        formData
      );
      console.log(response)
      console.log(response.data.predictedList);
      setData(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-[80vh] text-xl py-10">
      <div>
        <div>
          <label
            for="uploadFile1"
            className="bg-white text-black rounded w-full h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 mb-2 fill-black"
              viewBox="0 0 32 32"
            >
              <path
                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                data-original="#000000"
              />
              <path
                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                data-original="#000000"
              />
            </svg>
            {show ? <p>Reupload file</p> : <p>Upload file</p>}
            <input
              type="file"
              id="uploadFile1"
              className="hidden"
              onChange={handleFileChange}
            />
            <p className="text-lg text-gray-400 mt-2">XML files are Allowed.</p>
          </label>
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            {show ? (
              <p className="">
                uploaded file:
                <span className="font-semibold text-2xl"> {fileName}</span>
              </p>
            ) : null}
          </div>
          <button
            className="bg-black px-6 py-3 text-white flex items-center btnAnimation rounded-md"
            onClick={handleSubmit}
          >
            Validate SMS
          </button>
        </div>
      </div>
      <div>
        {/* {data.predictedList?.map((predList,i)=>(<div>
          {console.log(predList)}
        </div>))} */}
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div>
            {data?.predictedList?.map((predList, i) => (
              <div>
                {console.log(predList.prediction)}
                <div className="mt-10">
                  {show ? (
                    <MessageCard message={predList?.message} data={predList} />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
