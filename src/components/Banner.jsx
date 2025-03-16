import React,{ useState, useEffect } from "react";




function Banner(){
    const [ wins, setWins ] = useState(0);
    const [ nominations, setNominations] = useState(0);


    useEffect(() => {
        
        const intervalWins = setInterval(() => {
            if(wins < 136){
                setWins(Prewins=> Prewins + 1);  
            }else{
                clearInterval(intervalWins)
            };
        }, 5);


        const intervalNomi = setInterval(() => {
            if(nominations < 340){
                setNominations(PreNomi=> PreNomi + 1);  
            }else{
                clearInterval(intervalNomi)
            };
        }, 2)
      
          
        return () => {clearInterval(intervalWins); clearInterval(intervalNomi)};

    },[wins, nominations]);

    


    return(
        <div className="">
            {/* banner tagline section */}
            <div className="w-full bg-black p-[1rem] border-b-[1px] border-white overflow-x-auto">
        	    <ul className="w-full min-w-[768px] text-white flex justify-around rajdhani-regular text-[1.25rem]">
                    <li className="uppecase cursor-pointer">Monumental</li>
                    <li className="uppecase cursor-pointer">Concrete</li>
                    <li className="uppecase cursor-pointer">Visionary</li>
                    <li className="uppecase cursor-pointer">Immigrant</li>
                    <li className="uppecase cursor-pointer">Sculpted</li>
                </ul>
            </div>

            {/* banner context section */}
            <div className="flex justify-around items-center px-[1rem] bg-gray-200 h-[91vh]">
                {/* banner context left section */}
                <div className="select-none w-[1/2]">
                    <div className="roboto-500">
                        <h1 className="uppercase text-[2rem] lg:text-[3rem] md:ml-2">the</h1>
                        <h1 className="uppercase text-[3rem] md:text-[4rem] lg:text-[5rem] md:leading-30"><span className="md:text-[12rem]">b</span>rutalist</h1>
                    </div>
                    <div className="md:ml-4 bg-[#45583a] w-fit px-[1rem]">
                        <p className="rajdhani-regular text-[1.5rem] md:text-[2rem] text-white">{`${wins} wins & ${nominations} nominations`}</p>
                    </div>
                </div>

                {/* banner context right section */}
                <div className="hidden xl:block md:w-[1/2] ">
                    <div className="bg-[#45583a] pr-4 pb-4 rounded-lg">
                        <img src="./bannerImg.avif" alt="" className="rounded-r-lg" />
                    </div>
                </div>

            </div>
        
        </div>
    );
};




export default Banner;