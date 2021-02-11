import React, {useState} from 'react'
import Modal from './Modal'

const List = ({people}) => {

 

    const [showModal, setShowModal] = React.useState(false);


    ///
    return (
        <>
          <div className="p-10 flex flex-col justify-center sm:py-12">              
                                {/* start */}
                                <table className="py-20">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Name</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Surname</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Gender</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                {people.map((person) => {
                                        const {id, firstName, lastName, gender , phone, email} = person

                                    const personData = { firstName, lastName, phone , setShowModal}

                                            return (

                                                            <tr key={id}>
                                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{firstName}</td>
                                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{lastName}</td>
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

                                                                    {showModal ? <Modal personData = {personData} /> : null}
                                                
                                                                </td>
                                                            </tr> 
                                                )
                                                          
                                            }
                                        )}                 
                                </tbody>
                            </table>                      
                
       </div>


        </>
    )

}




export default List