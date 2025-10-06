import React , {useState} from 'react'
import Intronav from './Intronav'
import Boxes from './Boxes'
const Text_area = ({box}) => {

  const [activeTab , setActiveTab] = useState('Introduction')

  const places = ["Introduction"]

  // console.log(box?.introduction)
  return (
    <div>
      <div className="text_area" >
        <Intronav 
        places={places} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
        <div className="text_item" >
          {activeTab === "Introduction" && <p className='text_para'>{box?.introduction}</p>}
          {activeTab === "History" && <p className='text_para'>{box?.history}</p>}
          {activeTab === "LifeStyle"  && <p className='text_para'>{box?.lifestyle}</p>}
        
      </div>  
      </div>
    </div>
  )
}

export default Text_area
