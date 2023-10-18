import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("Computer Science");
  const [image, setImage] = useState("");

  const value = {
    name: name,
    regNo: regNo,
    expiryDate: expiryDate,
    phone: phone,
    email: email,
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
                Name
              </label>
              <div>
                <input
                  required
                  type="text"
                  name=""
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id=""
                  placeholder="Name"
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="sr-only">
                Reg No
              </label>
              <div>
                <input
                  required
                  type="text"
                  name=""
                  onChange={(e) => {
                    setRegNo(e.target.value);
                  }}
                  id=""
                  placeholder="Reg No"
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="sr-only">
                Department
              </label>
              <div>
                <input
                  required
                  type="text"
                  name=""
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                  id=""
                  placeholder="Department"
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="" className="sr-only">
                Phone
              </label>
              <div className="relative ">
                <input
                  name="age"
                  id=""
                  type="number"
                  placeholder="Phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md "
                />
                <div className="absolute right-5 top-[30%] cursor-pointer"></div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="sr-only">
                Email
              </label>
              <div className="relative ">
                <input
                  name="email"
                  id=""
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md "
                />
                <div className="absolute right-5 top-[30%] cursor-pointer"></div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="sr-only">
                Expiry Date
              </label>
              <div className="relative ">
                <input
                  name="Department"
                  id=""
                  onChange={(e) => {
                    setExpiryDate(e.target.value);
                  }}
                  type="Text"
                  placeholder="Expiry Date"
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
      <div className="w-full flex flex-col md:flex-row gap-10 ">
        <div className=" relative  w-full md:w-[700px] h-[220px] md:h-[350px]   border-gray-100 bg-white rounded-[20px] flex flex-col items-start">
          <div className="w-full flex flex-row items-start">
            <div className="md:flex-[15%] flex-[20%] flex p-1">
              <img src="/logomatins.jpg" className="rounded-[20px]" />
            </div>
            <div className="md:text-[22px] text-[11px] text-green-800  py-2 font-[800] items-center text-center flex flex-col w-full">
              <p className="text-center uppercase leading-[6px] md:leading-4 ">
                Blessed martins international
              </p>
              <p className="text-center uppercase text-[9px] md:text-[20px] leading-2">
                institute of science and technology
              </p>
              <p className="text-center text-[9px] md:text-[12px] capitalize leading-[8px] md:leading-3">
                Ohatewe-Amagu ikwo, ebonyi state
              </p>
              <p className="text-center capitalize text-[8px] md:text-[10px] text-red-500">
                P.O. box 824 abakaliki
              </p>
            </div>
          </div>
          <div className="flex flex-row text-black relative">
            <div className="absolute left-[15px] md:left-[30px] top-[17px] md:top-[25px] w-full items-start  gap-1 flex-col flex">
              <p className="font-bold whitespace-nowrap text-[13px] md:text-[25px]">
                Name: {data ? data.name : "John Alex Philips"}
              </p>
              <p className="whitespace-nowrap font-bold text-[11px] md:text-[16px]">
                Reg-No: {data ? data.regNo : "17384-3764-3874"}
              </p>
              <p className="whitespace-nowrap font-bold text-[11px] md:text-[16px]">
                Department: {data ? data.department : "Computer Science"}
              </p>
            </div>
          </div>
          <div className="absolute w-full h-[38%] md:h-[40%] bottom-0 rounded-b-[20px] flex items-start flex-col bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-900 to-green-600 ">
            <div className="w-full flex gap-2 md:gap-4 absolute left-[15px] top-[10px] flex-col items-start">
              <p className="font-400 text-[12px] md:text-[18px]">
                <i className="fa fa-phone" />{" "}
                <span className="ml-[15px]">
                  {data ? data.phone : "+234 7485 455"}
                </span>
              </p>
              <p className="font-400 text-[12px] md:text-[18px]">
                <i className="fa fa-envelope" />
                <span className="ml-[15px]">
                  {data ? data.email : "ifenkweifeanyi@gmail.com"}
                </span>
              </p>
              <p className="font-400 text-[12px] md:text-[18px]">
                Expiry Date:
                <span className="ml-[15px]">
                  {data ? data.expiryDate : "October 17 2023 "}
                </span>
              </p>
            </div>
          </div>
          <div className="absolute top-[33%]  right-[15px] md:top-[30%] md:right-[28px]">
            <div className=" rounded-full md:h-[150px] h-[100px] w-[100px]  md:w-[150px] p-[10px] ml-4 bg-gradient-to-r from-green-800 to-red-500">
              <img
                className="rounded-full h-full w-full "
                src={data ? data.image : "/logomatins.jpg"}
              />
            </div>
            <p className="font-[800] text-[15px] md:text-[25px] text-transparent/20">
              STUDENT ID
            </p>
          </div>
        </div>

        <div className=" relative w-full md:w-[700px] h-[220px] md:h-[350px] px-[20px] bg-white border-gray-100 rounded-[20px] flex gap-[-20px] flex-col items-center justify-center">
          <div className=" ">
            <img
              src="/logomatins.jpg"
              className="rounded-[20px] md:h-[90px] w-[50px] h-[50px] md:w-full"
            />
          </div>
          <div className="md:text-[20px] text-[10px] p-4 font-[400] mb-4 text-black items-center text-center flex flex-col w-full">
            <i className="text-center md:leading-6 text-[10px]  md:text-[18px]">
              The person whose name and photograph appeared at the front of this
              card is a student of
            </i>
            <p className="text-center uppercase text-[11px] md:text-[22px] font-[700] md:font-[800] md:leading-6 text-green-800 ">
              Blessed martins international institute of scienceand technology
            </p>
            <i className="text-center md:leading-6 text-[10px] md:text-[18px]">
              In case of lost or found, please report to the school
              <br /> at the address overleaf or call the number
              <br />
              <span className="md:text-[20px] text-[12px] font-[500]">
                08125410120
              </span>
            </i>
          </div>
          <div className="absolute bottom-0 bg-green-800 w-full rounded-b-[20px] h-[14%]">
            Barcode
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
