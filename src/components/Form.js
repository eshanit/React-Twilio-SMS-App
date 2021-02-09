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
    const [person, setPerson] = useState(defaultFormInputValues)

    // define people state
    const [people, setPeople] = useState([])

    //handleChange event

    const handleChange = (e) => {

        const name  = e.target.name
        const value = e.target.value

        setPerson({...person,[name]:value})

    }

    //handle the submit button

    const handleSubmit = (e) => {
         e.preventDefault() //so that the form wont keep submitting and refreshing

        ///make sure all fields are filled in:

        if( person.firstName && person.lastName && person.gender && person.paymentDate && person.phone && person.email)
        {
            //add id for key to person (assuming email is unique)
            const newPerson = {...person, id: person.email}

            setPeople([...people, newPerson])

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
        <div className="items-center w-1/2">
            <List people={people} />
        </div>  
    </div>
        </>


    )
};


// List Component

const List = ({people}) => {

    ///
    
    const [showModal, setShowModal] = React.useState(false);
    const [number, setNumber] = useState("");
    const [body, setBody] = useState("");

    const handleChange =(e)=>{
        setBody(e.target.value)
        setNumber(e.target.value)
    }

    const onSubmit = async (e) => {
        await e.preventDefault();

        const res = await fetch("/api/sendMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({phone:number, sms: body})
        });

    const data = await res.json();

    if (data.success){
        await setBody("");
        await setShowModal(false);

    }else{

        await setBody("An Error has occurred.");

    }

    }

    ///
    return (
        <>
          <div className="p-10 flex flex-col justify-center sm:py-12">              
                                {/* start */}
                                <table className="py-20">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Name</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Surname</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Gender</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                                        {/* <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Payment Date</th>
                                        <th class="px-6 py-3 border-b-2 border-gray-300"></th> */}
                                    </tr>
                                </thead>
                                <tbody class="bg-white">
                                {people.map((person) => {
                                        const {id, firstName, lastName, gender , phone, email} = person

                        
                                            return (


                                                            <tr key={id}>
                                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                                    <div className="flex items-center">
                                                                        <div>
                                                                            <div className="text-sm leading-5 text-gray-800">#1</div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{firstName}</td>
                                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{lastName}</td>
                                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                    <span class="relative text-xs">{gender}</span>
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

                                                                    {showModal ? (
                                                                        <>
                                                                        <div
                                                                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                                           
                                                                        >
                                                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                                            {/*content*/}
                                                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                                {/*header*/}
                                                                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                                                                <h4 className="font-semibold">
                                                                                    SMS to : {firstName} {lastName}: +1{phone}
                                                                                </h4>
                                                                                <button
                                                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                                    onClick={() => setShowModal(false)}
                                                                                >
                                                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                                    ×
                                                                                    </span>
                                                                                </button>
                                                                                </div>
                                                                                {/*body*/}
                                                                                <form>
                                                                                    <label className="block" htmlFor="phone">
                                                                                        <span className="text-gray-700 text-sm font-bold"></span>
                                                                                        <input
                                                                                            id="phone"
                                                                                            name="phone"
                                                                                            value={phone}
                                                                                            onChange={handleChange}
                                                                                            type="hidden"
                                                                                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                                                                        />
                                                                                    </label>
                                                                                    <div className="relative p-6 flex-auto">
                                                                                    <label className="block" htmlFor="sms">
                                                                                        <span className="text-gray-700 text-sm font-bold">SMS</span>
                                                                                            <textarea
                                                                                                name="sms"
                                                                                                id="sms"
                                                                                                value ={body}
                                                                                                onChange={handleChange}
                                                                                                type="text"
                                                                                                className="mt-1 block form-input w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                                                                                rows= "3"
                                                                                                cols="30"
                                                                                            >
                                                                                            </textarea>
                                                                                    </label>
                                                                                    </div>
                                                                                    {/*footer*/}
                                                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                                                                    <button
                                                                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                                                        type="submit"
                                                                                        style={{ transition: "all .15s ease" }}
                                                                                        onClick={onSubmit}
                                                                                    >
                                                                                        Send SMS
                                                                                    </button>
                                                                                    <button
                                                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                                                        type="button"
                                                                                        style={{ transition: "all .15s ease" }}
                                                                                        onClick={() => setShowModal(false)}
                                                                                    >
                                                                                        Close
                                                                                    </button>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                                        </>
      ) : null}
                                                
                                                                </td>
                                                            </tr> 

                                                            // modal
                                                            
                                                            
                                                )
                                                    
                                            
                                            }
                                        )}                 
                                </tbody>
                            </table>

                                
                                {/* end */}
{/* 
                            </div>
                        </div>
                    </div>
                </div> */}
                
       </div>


        </>
    )

}

export default Form