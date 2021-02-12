import React from 'react'
import SinglePerson from './SinglePerson'


const RegisteredPeopleList = ({people}) => {



    ///
    return (
        <>
                <div className="p-10 flex flex-col justify-center sm:py-12">              
                                {/* start */}
                                <table className="py-20">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"> Full Name</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Gender</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                {people.map((person) => {
                                            return (
                                                    
                                                   <SinglePerson key={person.id} person = { person }/> 

                                                )
                                                          
                                            }
                                        )}                 
                                </tbody>
                            </table>                                 
                </div>
        </>
    )

}




export default RegisteredPeopleList