

import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Button from './Button'
// import Female from '../assets/user_female.png'


function CardRight ({ stubg, StudentName, info, gender,pfp }) {
    let btnbg = '';
  
    if (gender === 'FEMale') {
      btnbg = 'Blue';
    } else if (gender === 'FEFemale') {
      btnbg = 'blue';
    } else if (gender === 'BEMale') {
      btnbg = '#eb6a2f';
    } else if (gender === 'BEFemale') {
      btnbg = '#eb6a2f';
    }
  
    return (
      <>
        <div className="CardRightBody" style={{background: stubg}}>
          <div className='ImgHold'><img src={pfp} alt="Curve" /></div>
          <h1>{StudentName}</h1>
          <p>{info}</p>
          <div className='SocialCont'>
            <div className='SocialBoard'><img src={Github} alt="Curve" /></div>
            <div className='SocialBoard'><img src={Linkedin} alt="Curve" /></div>
            <div className='SocialBoard'><img src={Twitter} alt="Curve" /></div>
            <div className='SocialBoard'><img src={Facebook} alt="Curve" /></div>
            <Button btnbg={btnbg} />  
          </div>
        </div>
      </>
    );
  }
  
  

export default CardRight