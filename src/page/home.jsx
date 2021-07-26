import React, {useEffect, useState} from 'react';
import "./home.css";
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai';
import { ImQuotesRight } from "react-icons/im";
import sliderData from "../component/data";


export default function Home() {

    const [sliderContent, setSliderContent] = useState(sliderData);

    console.log(sliderContent.length - 1)

    const [sliderIndex, setSliderIndex] = useState(0)

   
    const next = () =>{
        if(sliderIndex === sliderContent.length - 1){
            return setSliderIndex(0)
        } else{
           return setSliderIndex(sliderIndex + 1)
        }

    }
    
const prev = () =>{
    if(sliderIndex === setSliderContent.length - 1){
        return setSliderIndex(sliderContent.length - 1)
    } else{
       return setSliderIndex(sliderIndex -1)
    }
   
}
    useEffect(()=>{
        if(sliderIndex === sliderContent.length){
            return setSliderIndex(0)
        }

      const intervalSlider =  setInterval(() => {
            setSliderIndex(sliderIndex + 1)
        }, 3000);

        return  () =>{
            return clearInterval(intervalSlider)
        }
    }, [sliderIndex])

    return (
        <div className="container">
             <h2 className="pageTitle">React Review Slider</h2>
            <div className="wrapper">
               

                    {sliderData.map((individualData, index) => {
                         const {id, image, Fullname, jobTitle, review} = individualData;

                            let currentPosition = "nextSlide";

                            if(index === sliderIndex){
                                currentPosition = 'activeSlide'
                            }

                           if(index === sliderIndex - 1 || (sliderIndex === 0 && index === sliderContent.length -1)){
                               currentPosition = 'lastSlide'
                           }
                                    

                         return(
                            <div key={id} className={`contentContainer ${currentPosition}`}  >
                                 <div className="imgContainer "><img src={image }  alt="" /></div>
                                 <h3 className="nameTag">{ Fullname}</h3>
                                    <h4 className="jobTitle">{jobTitle}</h4>
                                    <div className="pageInfo"><p >{review}</p></div>

                                        <ImQuotesRight  className="quotes" />
                       
                             </div>
                         ) 
                    })}

                    <button> </button>
                <div className="iconclass">
                    <AiFillCaretLeft className="iconL"  onClick={prev}/>
                    <AiFillCaretRight className="iconR" onClick={next} />

                </div>


            </div>
        </div>
    )
}
