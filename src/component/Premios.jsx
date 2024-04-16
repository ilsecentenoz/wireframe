import MiniBanner from './Minibanner';
import CCard from './C_Card';
import Text from './Text';


function Premios() {
   
  
    return (
      <>
        <MiniBanner />
        <div className='Row'>
          <CCard />
          <CCard />
        </div>

        <div className='Row'>
          <CCard />
          <CCard />
          <CCard />
          <CCard />
        </div>
        <Text />

      </>
    )
  }
  
export default Premios