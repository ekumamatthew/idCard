import { useState } from "react";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("Grace");
  const [secondName, setSecondName] = useState("Ugama");
  const [thirdName, setThirdName] = useState("Kalu");
  const [sex, setSex] = useState("female");
  const [age, setAge] = useState(24);
  const [department, setDepartment] = useState("Computer Science");
  const [image, setImage] = useState("");

  const value = {
    firstName: firstName,
    secondName: secondName,
    thirdName: thirdName,
    sex: sex,
    age: age,
    department: department,
    image: image,
  };
  async function generate(e) {
    e.preventDefault();
    try {
      localStorage.setItem("IdValue", JSON.stringify(value));
      alert("Details Changed");
    } catch (error) {
      console.log(error);
    }
  }

  const data = JSON.parse(localStorage?.getItem("IdValue"));
  console.log(data);

  return (
    <div className="w-full flex flex-col items-start">
      <div className="mb-32">
        <form
          action="SUBMIT"
          onSubmit={generate}
          method="POST"
          className="mt-8 space-y-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
              <label htmlFor="" className="sr-only">
                First Name
              </label>
              <div>
                <input
                  required
                  type="text"
                  name=""
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  id=""
                  placeholder="First Name"
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="sr-only">
                Second Name
              </label>
              <div>
                <input
                  required
                  type="text"
                  name=""
                  onChange={(e) => {
                    setSecondName(e.target.value);
                  }}
                  id=""
                  placeholder="Second Name"
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="sr-only">
                Third Name
              </label>
              <div>
                <input
                  required
                  type="text"
                  name=""
                  onChange={(e) => {
                    setThirdName(e.target.value);
                  }}
                  id=""
                  placeholder="Third Name"
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="" className="sr-only">
                Age
              </label>
              <div className="relative ">
                <input
                  name="age"
                  id=""
                  type="number"
                  placeholder="Age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md "
                />
                <div className="absolute right-5 top-[30%] cursor-pointer"></div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="sr-only">
                Sex
              </label>
              <div className="relative ">
                <input
                  name="sex"
                  id=""
                  type="text"
                  onChange={(e) => {
                    setSex(e.target.value);
                  }}
                  placeholder="Sex"
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md "
                />
                <div className="absolute right-5 top-[30%] cursor-pointer"></div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="sr-only">
                Department
              </label>
              <div className="relative ">
                <input
                  name="Department"
                  id=""
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                  type="Text"
                  placeholder="Department"
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md "
                />
                <div className="absolute right-5 top-[30%] cursor-pointer"></div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="sr-only">
                Image
              </label>
              <div className="relative ">
                <input
                  name="Department"
                  id=""
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                  type="file"
                  placeholder="Image"
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md "
                />
                <div className="absolute right-5 top-[30%] cursor-pointer"></div>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-5 py-4 text-base text-black transition-all duration-200 bg-white border border-transparent rounded-md hover:opacity-80"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex flex-row gap-10 ">
        <div className=" relative w-[700px] px-[10px] h-[350px] border-[1px] border-gray-100 rounded-[20px] flex flex-col items-start">
          <div className="text-[18px] px-4 py-2 font-[600] items-center text-center flex flex-col w-full">
            <p className="text-center capitalize">
              Student Union Government Ebonyi State University Abakaliki Ebonyi
              State (Nigeria)
            </p>
          </div>
          <div className="flex flex-row">
            <div className="relative top-[10%] ml-4 ">
              <img
                className="rounded-full h-[150px]  w-[150px] "
                src={
                  data
                    ? data.image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN1uPtAz1SVsV0SsMCYB9Lkd0VKTKOVIx69Q&usqp=CAU"
                }
              />
            </div>
            <div className="relative ml-[30px] items-start  flex-col flex gap-3 top-[20%]">
              <p className="font-bold text-[20px]">
                Name:{" "}
                <span className="text-[20px]">
                  {data
                    ? data.firstName +
                      " " +
                      data.secondName +
                      " " +
                      data.thirdName
                    : "John Doe Alex"}
                </span>
              </p>
              <p className="font-bold text-[20px]">
                Age: <span className="text-[20px]">{data ? data.age : 20}</span>
              </p>
              <p className="font-bold text-[20px]">
                Sex:{" "}
                <span className="text-[20px]">{data ? data.sex : "male"}</span>
              </p>
              <p className="font-bold text-[20px]">
                Department:{" "}
                <span className="text-[20px]">
                  {data ? data.department : "computer science"}
                </span>
              </p>
            </div>
          </div>
          <div className="relative w-full -bottom-20  ">
            <i>
              Motto: Excelence our virture, Raising future start for a greater
              generation
            </i>
          </div>
        </div>

        <div className=" relative w-[700px] h-[350px] px-[20px] border-[1px] border-gray-100 rounded-[20px] flex flex-col items-start">
          <div className="text-[20px] p-4 font-[600] items-center text-center flex flex-col w-full">
            <p className="text-center capitalize">
              Student Union Government Ebonyi State University Abakaliki Ebonyi
              State (Nigeria)
            </p>
          </div>
          <div className="text-[15px] p-4 font-[500] items-center text-center flex flex-col w-full">
            <p className="text-center capitalize">
              Holy Trinity College Of School and Sciencess Abakaliki Ebonyi
              State (Nigeria)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
