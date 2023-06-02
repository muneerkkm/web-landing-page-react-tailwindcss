import React from "react";

function Header() {
  return (
    <div>
      <container>
        <header className="font-poppins relative w-[1404px] h-[60px]  ml-[210px] mt-6 flex">
          <img src="./assets/github.png" alt=""></img>
          <p className="font-bold top-[10px] absolute ml-[60px] mt-[10px]">
            windAesthetics
          </p>
          <ul className="flex gap-8 absolute top-[19px] left-[255px]">
            <li>Overview</li>
            <li>Features</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
          <img
            src="./assets/globe.png"
            alt=""
            className="ml-[60rem] mt-[20px] w-[18px] h-[18px]"
          />
          <p className="mt-[18px] ml-[5px] font-">English(UK)</p>
          <img
            src="./assets/Polygon.png "
            alt=""
            className="w-[5px] h-[5px] mt-[28px] ml-[5px]"
          />
          <button className="w-[100px] h-[40px] mt-[10px] ml-[10px] bg-violet-950 text-white rounded-lg">
            Sign up
          </button>
          <button className="w-[100px] h-[40px] text-violet-950 rounded-lg bg-white mt-[10px] ml-[15px] border-2">
            Sign up
          </button>
        </header>
        <div className="w-[1520px] h-[720px] bg-gradient-to-r from-purple-900 from-10% purple-800 via-30% to-purple-700 to-90% ... mt-[55px] ml-[190px] rounded-l-2xl rounded-br-[40%] rounded-tr-xl ">
          <h1 className="text-6xl text-white font-extrabold text-start pt-[200px] pl-[60px] leading-11">Practice your Photography <br /> skills with ease</h1>
          <h4 className="text-white text-left pl-[59px] pt-[15px]">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et velit <br /> interdum, ac aliquet odio mattis. </h4>
          <div className="flex ml-[65px] mt-[40px] gap-4">
          <button className="w-[168px] h-[50px] bg-purple-400 rounded-lg font-bold text-white">Get started</button>
          <button className="w-[168px] h-[50px] border border-purple-300 rounded-lg text-white font-bold">Discount</button>
          </div>
        </div>
        <img src="./assets/Saly.png" alt="" className="w-[625px] h-[604px] absolute top-[170px] left-[900px]"/>
      </container>
    </div>
  );
}

export default Header;
