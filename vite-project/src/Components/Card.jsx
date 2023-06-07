import CardLeft from '../Components/CardLeft';
import CardRight from '../Components/CardRight';
import FrontEndLogo from '../assets/frontend.png';
import BackEndLogo from '../assets/backend.png';
import Malepfp from '../assets/user_male.png'
import FeMalepfp from '../assets/user_female.png'


function Card({ stack, Gender, StudentName, info, id}) {
  const stackgender = stack + Gender; 

  return (
    <>
      <div className="CardBody">
        {stack === 'FE' ? 
          <CardLeft stack='Front End Developer' id={id} stackbg="#023e8a" stacklogo={FrontEndLogo} />
         : 
          <CardLeft stack='Back End Developer' id={id} stackbg="#eb6a2f" stacklogo={BackEndLogo} />
        }
        {Gender === 'Male' ? 
          <CardRight stubg="#48cae4" StudentName={StudentName} info={info} gender={stackgender} pfp={Malepfp}/>
         : 
          <CardRight stubg="#72e072" StudentName={StudentName} info={info} gender={stackgender} pfp={FeMalepfp}/>
        }
      </div>
    </>
  );
}


export default Card;
