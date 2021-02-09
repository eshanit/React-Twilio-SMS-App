import React, {useState} from 'react'

const Form = () => {

    //create form with inputs 

    const defaultFormInputValues = {
        firstName: '',
        lastName: '',
        gender: '',
        paymentDate: '',
        phone: '',
        email: ''
    }

    //define person state
    const [person, setPerson] = useState([])

    // define people state
    const [people, setPeople] = useState(defaultFormInputValues)

    //handleChange event

    const handleChange = (e) => {

        const name  = e.target.name
        const value = e.target.value

        setPerson({...person,[name]:value})

    }

    //handle the submit button

    const handleSubmit = (e) => {
         e.preventDefault //so that the form wont keep submitting and refreshing

        ///make sure all fields are filled in:

        if( person.firstName && person.lastName && person.gender && person.paymentDate && person.phone && person.email)
        {
            //add id for key to person (assuming email is unique)
            newPerson = {...person, id: person.email}

            setPeople(newPerson)

            //set person state back to default values 
            setPerson(defaultFormInputValues)
        }

    }

    return ( 
        <>
        <div className="w-full flex justify-center">
        <div className="p-4 flex justify-between items-center w-1/2">
        <div className="items-center w-full">
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto w-screen">
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto w-full">
                            <form className="form-horizontal" >
                                    <div className="divide-y divide-gray-200">
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <label className="block" htmlFor="firstName">
                                                    <span className="text-gray-700 text-sm font-bold">First Name</span>
                                                    <input
                                                        name="firstName"
                                                        id="firstName"
                                                        value={person.firstName}
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="mt-1 form-input block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                                        />
                                            </label>
                                            <label className="block" htmlFor="lastName">
                                                    <span className="text-gray-700 text-sm font-bold">Last Name</span>
                                                    <input
                                                        name="lastName"
                                                        id="lastName"
                                                        value={person.lastName}
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="mt-1 block form-input w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                                        />
                                            </label>
                                            <label className="block" htmlFor="gender">
                                                <span className="text-gray-700 text-sm font-bold">Gender</span>
                                                <select
                                                    id="gender" 
                                                    name="gender"
                                                    value={person.gender}
                                                    onChange={handleChange}
                                                    className="block form-select w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                                    >
                                                    <option>--Choose Gender--</option>
                                                    <option value='Male'>Male</option>
                                                    <option value='Female'>Female</option>
                                                </select>       
                                            </label>
                                            <label className="block" htmlFor="paymentDate">
                                                <span className="text-gray-700 text-sm font-bold">Date of Payment</span>
                                                <input
                                                    id="paymentDate"
                                                    name="paymentDate"
                                                    value={person.paymentDate}
                                                    onChange={handleChange}
                                                    type="date"
                                                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                                />
                                            </label>
                                            <label className="block" htmlFor="phone">
                                                <span className="text-coolGray-800 text-sm font-bold">Phone</span>
                                                <input
                                                    id ="phone"
                                                    name="phone"
                                                    value={person.phone}
                                                    onChange={handleChange}
                                                    type="number"
                                                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                                    placeholder=""
                                                    />
                                            </label>
                                            <label className="block" htmlFor="email">
                                                <span className="text-coolGray-800 text-sm font-bold">Email</span>
                                                <input
                                                    id = "email"
                                                    name="email"
                                                    value={person.email}
                                                    onChange={handleChange}
                                                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                                    placeholder=""
                                                    />
                                            </label>
                                        </div>
                                        <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                            <button 
                                                type="submit" 
                                                onClick = {handleSubmit}
                                                className="w-3/4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
   
        </>


    )
};

export default Form