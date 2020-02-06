/**
 * This model will hold data which is coming from 
 * rest api
 */
export class ApplicationResponse {
    public url:String;
    public code:number; //we are setting did inside code at server side
    public message:String;
}