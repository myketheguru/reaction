import React from 'react'
import { FaRegComments } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { HiBell } from 'react-icons/hi'
import { IoMdCheckmark } from 'react-icons/io'
import { IoMdAddCircle } from 'react-icons/io'
import Man from '../pics/man.png'
import Girl from '../pics/girl.png'

const Contacts = () => {
  return (
    <div className='w-[350px] border-r border-[#202020] p-5'>
      {/* profile card section */}
        <div className="profile-card flex w-100% h-35 justify-between">
          <div className="card-pics border rounded-[40px] border-[#242527] border-8 object-contain h-20 w-20"><img src={Man} alt="image" /></div>
          <div className="msg-menu flex gap-4 items-center text-[30px]">
        <div className='text-blue-500'>
        <FaRegComments />
        </div>
        <div>
        <p>All</p>
        </div>
        <div>
        <RiArrowDropDownLine />
        </div>
          </div> 
        </div>

        {/* Workspace section */}
        <div className="workspace mt-10 bg-[#323337] rounded-[20px] flex-row">

          {/*thomas sec  */}
          <div className="thomas p-8 flex justify-between">
            <div className='thomas-img border-8 rounded-[40px] border-[#161719] h-20 w-20'> <img src={Girl} alt="image" /></div>
            <div className="thomas-name">
              <div>Thomas</div> 
            <div className='flex mt-5'>
            <HiBell />
            <p>219 <span>new</span></p>
            </div>
            </div>
            <div className='text-blue-500 flex items-center'> <IoMdCheckmark /> </div>
          </div>
            <hr />

            {/* Stuart sec */}
          <div className="stuart-books p-8 flex justify-between">
            <div className="av-img flex items-center justify-center bg-blue-600 text-[40px] rounded-[30px] w-20 h-20 ">S</div>
            <div className="stuart-name flex-row relative right-7 ">
            <div>
            Stuart Books
            </div> 
            <div>
            <p>1 <span>new request</span></p>
            </div>
            </div>
          </div>
          <hr />
          
          {/* create workspace */}
          <div className="worksection flex justify-center gap-2 p-5">
            <div className='flex items-center text-[#715bfc]'>
            <IoMdAddCircle />
            </div>
            <div>
              <p className='text-[15px]'>Create new workspace</p>
            </div>
          </div>
        </div>

        {/* Message section */}
        <div className="message m-5 text-[30px] text-bold">Messages</div>
    </div>
  )
}

export default Contacts