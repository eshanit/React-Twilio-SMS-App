import React, {useState} from 'react'


const SendSMSModal = ({personData}) => {

    const {firstName, lastName, phone, setShowModal} = personData
    
       const [messageSet, setMessageSet] = useState({
           message:''
       })
   
       const handleChange =(e)=>{
           const name  = e.target.name
           const value = e.target.value
   
           setMessageSet({...messageSet,[name]:value})
   
           console.log(name,value)
       }
   
       const handleSubmit = async (e) => {
           await e.preventDefault();
   
           const phone = document.getElementById("phoneNumber").value;
   
   
           const res = await fetch("/api/HelloWorld", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({
                   to: phone,
                   body: messageSet.message
               })
           });
   
       const data = await res.json();
       //setShowModal(false);
    console.log(data.success)
   
       if (data.success){
           await setMessageSet("");
           await setShowModal(false);
   
       }else{
   
           await setMessageSet("An Error has occurred.");
   
       }
   
       }

return (
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
                <label className="block" htmlFor="phoneNumber">
                    <span className="text-gray-700 text-sm font-bold"></span>
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phone}
                        //onChange={handleChange}
                        type="hidden"
                        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                </label>
                <div className="relative p-6 flex-auto">
                <label className="block" htmlFor="message">
                    <span className="text-gray-700 text-sm font-bold">SMS</span>
                        <textarea
                            name="message"
                            id="message"
                            value ={messageSet.message}
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
                    onClick={handleSubmit}
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
)

}

export default SendSMSModal
