import {useState} from 'react'

const NewAuctionForm =(props) => {

    const [state, setState] = useState({
        auction_name: "",
        auction_starttime: "",
        auction_endtime: "",
        auction_description: "",
        auction_address: "",
        auction_email:"",
        auction_phone: ""
 })

 const onChange =(event)=>{
    console.log(event.target.value)
    setState((state)=> {
        return {
            ...state,
            [event.target.name]:event.target.value
        }
    })
 }

const onSubmit =(event) =>{
    event.preventDefault()
    let auction ={
        ...state
    }
props.addNewAuction(auction)
setState({
    auction_name: "",
    auction_starttime: "",
    auction_endtime: "",
    auction_description: "",
    auction_address: "",
    auction_email:"",
    auction_phone: ""
})
}



return (
    
<div>

<form className="mb-3" onSubmit={onSubmit}>
	<label htmlFor="auction_name" className="form-label"><b>Tapahtuman nimi</b></label>
	<input type="text"
    className="form-control"
    name="auction_name"
	id="auction_name" 
    onChange={onChange}
	value={state.auction_name}/>


    <label htmlFor="auc_starttime" className="form-label"><b>Alkaa</b></label>
	<input type="datetime-local"
	className="form-control"
	id="auction_starttime" 
    onChange={onChange}
	value={state.auction_starttime}/>

<label htmlFor="auc_endttime" className="form-label"><b>Päättyy</b></label>
	<input type="datetime-local"
	className="form-control"
	id="auction_endtime" 
    onChange={onChange}
	value={state.auction_endtime}/>

<label htmlFor="auction_description" className="form-label"><b>Tietoja tapahtumasta</b></label>
	<input type="text"
    className="form-control"
    name="auction_description"
	id="auction_descriptopn" 
    onChange={onChange}
	value={state.auction_description}/>

<label htmlFor="auction_address" className="form-label"><b>Osoite: </b></label>
	<input type="text"
    className="form-control"
    name="auction_address"
	id="auction_address" 
    onChange={onChange}
	value={state.auction_address}/>

<label htmlFor="auction_phone" className="form-label"><b>Puhelinnumero: </b></label>
	<input type="text"
    className="form-control"
    name="auction_phone"
	id="auction_phone" 
    onChange={onChange}
	value={state.auction_phone}/>

<button type="submit" className="btn btn-primary">Tallenna ja jatka</button>

</form>

</div>

)}


export default NewAuctionForm