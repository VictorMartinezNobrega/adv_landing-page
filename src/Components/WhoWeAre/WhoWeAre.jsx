import ShadowBoxes from "../ShadowBoxes/ShadowBoxes";
import adv1 from '../../assets/adv1.jpg';
import adv2 from '../../assets/adv2.jpg';
import adv3 from '../../assets/adv3.jpg';

export default function WhoWeAre(){
    return (
        <section className="w-full py-8">
            <h4 className="w-max text-blue-regular font-semibold text-[2rem] after:w-[calc(100%-4px)] after:absolute after:h-1 after:bottom-1 relative after:left-0 after:rounded-lg after:bg-blue-regular after:ml-6">Quem nós somos</h4>
            <div className="flex items-center py-4 justify-evenly">
                    <div className="w-[300px] bg-gold shadow-md mt-16 relative flex flex-col justify-between h-[500px] rounded-md">
                        <img src={adv1} className="w-full h-auto rounded-t-md" alt="Imagem de um advogado"/>
                        <div className="flex flex-col w-full p-2 text-blue-dark">
                            <h4 className="w-full font-semibold text-blue-dark text-[18px]">Advogado Fulano</h4>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit, temporibus eligendi suscipit animi</p>
                        </div>
                        <ShadowBoxes side='left'/>
                    </div>
                    <div className="w-[300px] bg-gold shadow-md mb-12 relative flex flex-col justify-between h-[500px] rounded-md">
                        <img src={adv2} className="w-full h-auto rounded-md" alt="Imagem de um advogado"/>
                        <div className="flex flex-col w-full h-full p-2 text-blue-dark">
                            <h4 className="w-full font-semibold text-blue-dark text-[18px]">Advogado Fulano</h4>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit, temporibus eligendi suscipit animi</p>
                        </div>
                        <ShadowBoxes side='bottom'/>
                    </div>
                    <div className="w-[300px] bg-gold shadow-md mt-16 relative flex flex-col justify-between h-[500px] rounded-md">
                        <img src={adv3} className="w-full h-auto rounded-t-md" alt="Imagem de um advogado"/>
                        <div className="flex flex-col w-full p-2 text-blue-dark">
                            <h4 className="w-full text-blue-dark font-semibold text-[18px]">Advogado Fulano</h4>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit, temporibus eligendi suscipit animi</p>
                        </div>
                        <ShadowBoxes side='right'/>
                    </div>
            </div>
        </section>
    )
}