import React from 'react'
import Section_heading from './Section_heading'
import ScrollPhoto from './ScrollPhoto'
import "../style/Section2.css"
const Inner_section = ({scroll_data}) => {
    //  console.log(scroll_data)
    const scroll_bar =[{
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsMbFDceROBsptucFeQx3mjw9VR1UNShREYOPenIqJ9Ym2gm_sH00FxKS_9ByVAB_iwA&usqp=CAU",
      name:"New york"
    },
    {
      img :"https://images.unsplash.com/photo-1564754943164-e83c08469116?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D",
      name:"Unsplash"
    },{
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsMbFDceROBsptucFeQx3mjw9VR1UNShREYOPenIqJ9Ym2gm_sH00FxKS_9ByVAB_iwA&usqp=CAU",
      name:"New york"
    },{
      img :"https://images.unsplash.com/photo-1564754943164-e83c08469116?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D",
      name:"Unsplash"
    },{
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsMbFDceROBsptucFeQx3mjw9VR1UNShREYOPenIqJ9Ym2gm_sH00FxKS_9ByVAB_iwA&usqp=CAU",
      name:"New york"
    },{
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsMbFDceROBsptucFeQx3mjw9VR1UNShREYOPenIqJ9Ym2gm_sH00FxKS_9ByVAB_iwA&usqp=CAU",
      name:"New york"
    },{
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsMbFDceROBsptucFeQx3mjw9VR1UNShREYOPenIqJ9Ym2gm_sH00FxKS_9ByVAB_iwA&usqp=CAU",
      name:"New york"
    },{
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsMbFDceROBsptucFeQx3mjw9VR1UNShREYOPenIqJ9Ym2gm_sH00FxKS_9ByVAB_iwA&usqp=CAU",
      name:"New york"
    },{
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsMbFDceROBsptucFeQx3mjw9VR1UNShREYOPenIqJ9Ym2gm_sH00FxKS_9ByVAB_iwA&usqp=CAU",
      name:"New york"
    }
  ]
  return (
    <div >
      <Section_heading props={"Experience"}/>
      <ScrollPhoto scroll_data={scroll_data}/>
      
    </div>
  )
}

export default Inner_section
