import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { PRIVATE_ROUTES } from "../../Urls";
import { ArrowLeft } from "lucide-react";
import { IHeader } from "../../Interfaces/IHeader";

const ShowButton = ({ active }: { active?: boolean }) => {
  const navigate = useNavigate();
  const isBackActive = active ?? false;
  if(isBackActive){
    return(
      <button 
            onClick={() => navigate(-1)}
            className=""
            >
            <ArrowLeft className="w-10 h-10" /> 
              </button>
    );
  }

  return(<></>);
  
}

const Header = (props: IHeader) => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-white shadow-md" >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <ShowButton active={props.isBackActive}></ShowButton>
        <div
          onClick={() => navigate(PRIVATE_ROUTES.Home.url)}
          className="text-2xl font-bold text-gray-800"
        >
          WebCraft
        </div>
        <nav>
          <a
            href="#servicios"
            className="mx-3 text-gray-600 hover:text-blue-600"
          >
            Servicios
          </a>
          <a href="#precios" className="mx-3 text-gray-600 hover:text-blue-600">
            Precios
          </a>
          <Button
            handleClick={() => {
              navigate(PRIVATE_ROUTES.Services.url);
            }}
            buttonClass="mx-3 text-blue-600 font-semibold"
          >
            Servicios
          </Button>
          <Button
            handleClick={() => {
              navigate(PRIVATE_ROUTES.Contacts.url);
            }}
            buttonClass="mx-3 text-blue-600 font-semibold"
          >
            Contactar
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
