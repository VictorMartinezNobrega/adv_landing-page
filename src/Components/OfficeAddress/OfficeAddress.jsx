import Waze from "../../assets/waze-logo.png";
import Maps from "../../assets/google-maps.png";

const OfficeAddress = () => {
  return (
    <div className=" inline-flex bg-red-700">
      <div className="pr-2">
        <a
          href="https://www.waze.com/pt-BR/live-map/directions/estacionamento-litoral-plaza-shopping-av.-ayrton-senna-da-silva-1511-praia-grande?to=place.w.205522456.2055159024.10632504"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Waze}
            className="h-6"
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.google.com/maps/place/R.+Líbero+Badaró,+659+-+23+-+Vila+Assuncao,+Praia+Grande+-+SP,+11704-070/@-24.0229905,-46.4738742,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce1ef8edb3fbef:0x36b1449deea4589f!8m2!3d-24.0229954!4d-46.4712939?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Maps}
            className="h-6"
          />
        </a>
      </div>
    </div>
  )
}

export default OfficeAddress;