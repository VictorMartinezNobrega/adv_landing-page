import Tribunal from "../../assets/Images/tribunal.jpg";
import Balanca from "../../assets/Images/balanca edit.png";

export default function Hero() {
  return (
    <div className="z-0 h-72">
      <div className="absolute left-0 w-full bg-blue-regular z-[-1]">
        <img
          src={Tribunal}
          alt="Imagem de um tribunal com efeito de borrado"
          className="left-0 object-cover w-full h-72 blur-sm contrast-125"
        />
      </div>
      <div className="flex items-center w-full h-full px-2 py-4 justify-evenly">
        {/* TITULO E TEXTO SOBRE A ADVOCACIA */}
        <article className="flex flex-col items-start max-w-[500px] p-2 backdrop-blur-md rounded-md">
          <h3 className="text-[28px] font-[600] text-gold after:w-[calc(100%-4px)] after:absolute after:h-[3px] after:bottom-[3px] relative after:left-0 after:rounded-lg after:bg-gold after:ml-4">
            Advocacia dos Fulanos
          </h3>
          <p className="text-gold text-[18px] font-[300]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nostrum cumque sit laboriosam perspiciatis ullam quia sequi, maxime
            deleniti sapiente, doloremque sed dicta eveniet veritatis possimus
            corrupti! Esse, quo minima?
          </p>
        </article>
        {/* BALANÇA DA JUSTICA */}
        <div className="relative group">
          <img
            src={Balanca}
            alt="Quadr de uma Balança da Justiça"
            className="h-56 rounded-sm rounded-bl-[20%] -rotate-[8deg] backdrop-blur-md group-hover:rotate-0 group-hover:scale-[1.05] transition-all duration-[400ms] z-10"
          />
        </div>
      </div>
    </div>
  );
}
