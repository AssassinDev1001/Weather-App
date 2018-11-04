export const DELETECITY='DELETECITY';
export function deletecity(id){
    return{
        type:DELETECITY,
        payload:id
    };
}