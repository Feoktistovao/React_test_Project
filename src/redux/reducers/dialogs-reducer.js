const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
      messagges: [
         {id: 1, message: "hello"},
         {id: 2, message: "Buy"},
         {id: 3, message: "Privet"}
      ],
      dialogs: [
         {id: 1, name: 'Alex'},
         {id: 2, name: 'Oleg'},
         {id: 3, name: 'Natali'}
      ],
      newMessageBody : ""
}


const dialogsReducer = (state = initialState, action)  => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY: {
         state.newMessageBody = action.body;
         return state;
      }
      case SEND_MESSAGE: {
         let body = state.newMessageBody;
         state.newMessageBody = '';
         state.messagges.push({id : 6, message: body});
         return state;
      }
      default : {
         return state;
      }
   }
}

export const sendMessageCreator = () => ({type : SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => {
   return (
       {
          type : UPDATE_NEW_MESSAGE_BODY,
          body: text
       }
   )
}

export default dialogsReducer;
