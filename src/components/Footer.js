import React from "react";

function Footer() {
  return (
    <div>
      <container>
        <div className="relative ">
          <div className="w-[1600px] h-[478px]  ml-[170px] shadow-lg shadow-black/40 flex">
            <img
              src="./assets/future12.png"
              alt=""
              className="absolute w-[387px] h-[541px] left-[230px]"
            />
            <div className="w-[739px] h-[136px]  mt-[110px] ml-[500px] text-left">
              <p className="text-4xl font-bold ">
                We have been{" "}
                <span className="text-purple-400">
                  improving our <br /> product for years
                </span>
              </p>
              <p className="text-purple-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit <br /> interdum, ac aliquet odio
                mattis. Class aptent taciti.
              </p>
            </div>
            <div className="w-[168px] h-[50px] bg-purple-300 text-white flex items-center justify-center rounded-md absolute top-[280px] left-[670px] font-bold text-lg">
              Get Started
            </div>
          </div>
          <div className="w-[1600px] h-[478px]  ml-[170px] shadow-lg shadow-black/40 mt-[5px] ">
            <img src="./assets/pop.png" alt="" className="w-[455px] h-[589px] absolute left-[1225px] top-[350px]"/>
            <div className="w-[634px] h-[238px] absolute top-[600px] left-[520px] text-left">
              <p className="text-4xl font-bold">You can practice at <span className="text-purple-300"> anytime <br /> convenient for you</span></p>
              <p className="text-purple-300">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Facilis ea recusandae fugiat est labore alias <br /> ratione accusamus, enim exercitationem architecto, <br /> nisi sunt, quas at ipsam. Quae quibusdam molestiae <br /> incidunt maxime!</p>
            </div>
            <div className="w-[168px] h-[50px] bg-purple-300 text-white flex items-center justify-center rounded-md absolute top-[830px] left-[525px] font-bold text-lg">
              Get Started
            </div>
          </div>
        </div>
      </container>
    </div>
  );
}

export default Footer;
