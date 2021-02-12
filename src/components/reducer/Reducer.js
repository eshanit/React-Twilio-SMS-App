
export const reducer = (state, action) => {
    if (action.type === 'ADD_PERSON'){
 
        const newPeople = [...state.people, action.payload]

        return {
                ...state,
                 people: newPeople,
                 isPersonAddedModalOpen: true,
                 modalHeader: 'Success',
                 modalContent: 'Person Successifully Added!',
                 modalHeaderTextColor: 'text-green-500'
            }

    }

    if (action.type === 'MISSING_INPUT_VALUES'){

        return {
                ...state,
                isPersonAddedModalOpen: true,
                modalHeader: 'Fail',
                modalContent: 'Some values are missing, please fill all!',
                modalHeaderTextColor: 'text-red-500'
            }

    }

    if (action.type === 'CLOSE_MODAL'){
        
        return {
                ...state,
                isPersonAddedModalOpen: false,
                
        }

    }

    if (action.type === 'REMOVE_PERSON'){

        const newPeople = state.people.filter((person)=>person.id !== action.payload)

        return {
            ...state,
            people: newPeople,
            }
    }


}
