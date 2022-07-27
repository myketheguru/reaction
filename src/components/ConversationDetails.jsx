import React from 'react'
import {BsChatSquareDots} from 'react-icons/bs'
import {ImCancelCircle} from 'react-icons/im'
import {IoIosArrowDown} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'
import {FiPhoneCall} from 'react-icons/fi'
import {BsChatRight} from 'react-icons/bs'
import {BiCheckbox} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'
import {BsFileEarmarkMinus} from 'react-icons/bs'
import {AiFillCheckSquare} from 'react-icons/ai'
import Img from '../images/profile photo.jpeg'



const ConversationDetails = () => {
  return (
    <div className='w-[300px] bg-[#191D1E]'>

        <div className="header">
          <BsChatSquareDots size={25} />
          <h2>Chat Details</h2>
          {/* <ImCancelCircle size={25} color= "gray" /> */}
          <div className='cancel'>X</div>
        </div>
        
        <div  className='members'>

            <div className = "member-title">
              <p class="text-sm text-stone-500" > Members <span class = "text-lg text-white" > 8 </span> </p>

              <IoIosArrowDown color='yellow' />
            </div>

            <div className= "user">
              <CgProfile />
              <h3> Ingrid Krol <span>Creator</span> </h3>
              <FiPhoneCall />
              <BsChatRight />
            </div>

            <div className='user'>
              <CgProfile />
              <h3> Thomas Hayes  </h3>
              <FiPhoneCall />
              <BsChatRight />
            </div>

            <div className='user'>
              <CgProfile />
              <h3> Colddecember  </h3>
              <BsChatRight />
            </div>

        </div>

        <div className='media'>

    
              <div className='media-details'>
                <p class="text-sm text-stone-500"> Media <span class = "text-lg text-white"> 1369 </span> </p>
                <IoIosArrowDown color='yellow'/>
              </div>

              <div className='image-card'>
                  <img src={Img} alt="image" />
                  <img src={Img} alt="image" />
                  <img src={Img} alt="image" />
                  <div className='media-count'>+1366</div>
              </div>
    

        </div>

        <div className='tasks'>

          <div className='task-details'>
            <p class="text-sm text-stone-500">Tasks <span class = "text-lg text-white" > 19 </span> </p>
            <IoIosArrowDown color='yellow'/>
          </div>

          <div className='task-list'>
            <BiCheckbox />
            <AiOutlineStar color='yellow'/>
            <h3>Design System</h3>
            <BsFileEarmarkMinus />
          </div>

          <div className='task-list'>
            <AiFillCheckSquare color= 'blue' />
            <AiOutlineStar />
            <h3>Dark Mode</h3>
           
          </div>

          <div className='task-list'>
            <BiCheckbox />
            <AiOutlineStar />
            <h3>New Content Page</h3>
          </div>

          <div className='new-task'>
            <div className='two'>2</div>
            <h3>New task</h3>
            <IoIosArrowDown color='yellow'/>
          </div>
        </div>


    </div>
  )
}

export default ConversationDetails