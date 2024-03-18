import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const ModelCard = (props) => {
  const model = props.model;
  console.log(model);
  let modelName = "",
    desc = "",
    accuracy = 0,
    precision = 0,
    recall = 0,
    f1score = 0;
  if (model === "mlp") {
    modelName = "MultiLayer perceptron";
    desc =
      "A multi-layer perceptron (MLP) is a type of artificial neural network consisting of multiple layers of neurons. The neurons in the MLP typically use nonlinear activation functions, allowing the network to learn complex patterns in data.";
    accuracy = 0.9456066945606695;
    precision = 0.9764373232799246;
    recall = 0.9628252788104089;
    f1score = 0.9695835283107159;
  } else if (model === "rfc") {
    modelName = "Random Forest Classifier";
    desc =
      "Random Forest is a popular machine learning algorithm that belongs to the supervised learning technique. It can be used for both Classification and Regression problems in ML. It is based on the concept of ensemble learning, which is a process of combining multiple classifiers to solve a complex problem and to improve the performance of the model.";
    accuracy = 0.9414225941422594;
    precision = 0.9644194756554307;
    recall = 0.9698681732580038;
    f1score = 0.9671361502347418;
  } else if (model === "nbc") {
    modelName = "Naive Bayes Classifier";
    desc =
      "Naïve Bayes algorithm is a supervised learning algorithm, which is based on Bayes theorem and used for solving classification problems.Naïve Bayes algorithm is a supervised learning algorithm, which is based on Bayes theorem and used for solving classification problems.It is a probabilistic classifier, which means it predicts on the basis of the probability of an object.";
    accuracy = 0.9229910714285714;
    precision = 0.9952021932830706;
    recall = 0.9172457359444094;
    f1score = 0.9546351084812623;
  }

  const data = [
    { metric: "Accuracy", value: accuracy },
    { metric: "Precision", value: precision },
    { metric: "Recall", value: recall },
    { metric: "F1score", value: f1score },
  ];

  return (
    <div>
      {model.localeCompare("") === 0 ? (
        <div></div>
      ) : (
        <div className="w-full shadow-md px-6 py-6 text-xl flex items-start justify-center rounded-md">
          <div>
            <p className="text-3xl font-semibold mb-3">{modelName}</p>
            <p className="">{desc}</p>
          </div>
          <div>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#000" />
            </BarChart>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelCard;
