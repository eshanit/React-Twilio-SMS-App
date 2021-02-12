import React, {useState, useContext} from 'react';
import SendSMSModal from './modals/SendSMSModal'
import { PersonContext } from './context/PersonContext'



const SinglePerson = ({person}) => {
   
    const [showModal, setShowModal] = useState(false);
    const {id, firstName, lastName, gender , phone, email} = person
    const personData = { firstName, lastName, phone , setShowModal}
   
    const { removePerson } = useContext(PersonContext);


    return (
        <tr key={id}>
            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{firstName} {lastName}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span className="relative text-xs">{gender}</span>
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{email}</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(true)}
                >
                    {phone}
                </button>
                {showModal ? <SendSMSModal personData = {personData} /> : null}
                                                
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-red-500 border-red-500 text-sm leading-5 "> <button className="px-5 py-2 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={()=>removePerson(id)}
                 >
                    x
                </button> 
                </td>
        </tr> 
                                                                
    )



}

export default SinglePerson