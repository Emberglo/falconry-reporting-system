import { Link } from "react-router-dom";
import { useState } from "react";

const AddForm = () => {

    const [species, setSpecies] = useState("");
    const [bandNumber, setBandNumber] = useState("");
    const [sex, setSex] = useState();
    const [source, setSource] = useState();
    const [microchip, setMicrochip] = useState();
    const [age, setAge] = useState();
    const [hatch, setHatch] = useState();

    const [senderPermitNumber, setSenderPermitNumber] = useState();
    const [senderName, setSenderName] = useState();
    const [transferDate, setTransferDate] = useState();
    const [senderAddress, setSenderAddress] = useState();
    const [senderCity, setSenderCity] = useState();
    const [senderState, setSenderState] = useState();
    const [senderZip, setSenderZip] = useState();
    const [senderEmail, setSenderEmail] = useState();
    const [senderPermit, setSenderPermit] = useState();
    const [ifTransfer, setIfTransfer] = useState();
    const [ifReleaseLoss, setIfReleaseLoss] = useState();

    const [recipientPermitNumber, setRecipientPermitNumber] = useState();
    const [recipientName, setRecipientName] = useState();
    const [recipientDateOfAcquisition, setRecipientDateOfAcquisition] = useState();
    const [recipientAddress, setRecipientAddress] = useState();
    const [recipientCity, setRecipientCity] = useState();
    const [recipientState, setRecipientState] = useState();
    const [recipientZip, setRecipientZip] = useState();
    const [recipientEmail, setRecipientEmail] = useState();
    const [recipientPermit, setRecipientPermit] = useState();
    const [recipientTypeOfAcquisition, setRecipientTypeOfAcquisition] = useState();

    const [captureRecapture, setCaptureRecapture] = useState();
    const [county, setCounty] = useState();
    const [state, setState] = useState();
    const [colorPhase, setColorPhase] = useState();
    
    const [oldBandNumber, setOldBandNumber] = useState();
    const [oldBandType, setOldBandType] = useState();
    const [newBandNumber, setNewBandNumber] = useState();
    const [newBandType, setNewBandType] = useState();

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [date, setDate] = useState();

  return (
    <div className="add-form-page">
        <Link to="/">Home</Link>

        <form action="" className="form">

            <div className="section-1 form-section">
                <div className="section-1-item-1">Species:</div>
                <input type="text" className="section-1-item-2" />

                <div className="section-1-item-3">USFWS Band Number:</div>
                <input type="text" className="section-1-item-4" />

                <div className="section-1-item-5">Sex:</div>
                <select name="" id="" className="section-1-item-6">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">Unknown</option>
                </select>

                <div className="section-1-item-7">Source:</div>
                <select name="" id="" className="section-1-item-8">
                    <option value="wild">Wild</option>
                    <option value="captive-bred">Captive-Bred</option>
                </select>

                <div className="section-1-item-9">Microchip Number (if applicable):</div>
                <input type="text" className="section-1-item-10" />

                <div className="section-1-item-11">Age:</div>
                <select name="" id="" className="section-1-item-12">
                    <option value="nestling">Nestling</option>
                    <option value="immature">Immature</option>
                    <option value="adult">Adult</option>
                </select>

                <div className="section-1-item-13">Year of Hatch:</div>
                <input type="text" className="section-1-item-14" />


            </div>

            <div className="section-2 form-section">
                <div className="section-2-item-1">Sender's USFWS Permit Number:</div>
                <input type="text" className="section-2-item-2" />

                <div className="section-2-item-3">Sender's Name:</div>
                <input type="text" className="section-2-item-4" />

                <div className="section-2-item-5">Sender's Name:</div>
                <input type="text" className="section-2-item-6" />

                <div className="section-2-item-7">Date of Transfer (or other action):</div>
                <input type="text" className="section-2-item-8" />

                <div className="section-2-item-9">Sender's Address:</div>
                <input type="text" className="section-2-item-10" />

                <div className="section-2-item-11">Sender's City:</div>
                <input type="text" className="section-2-item-12" />

                <div className="section-2-item-13">Sender's State:</div>
                <input type="text" className="section-2-item-14" />

                <div className="section-2-item-15">Sender's Zip Code:</div>
                <input type="text" className="section-2-item-16" />

                <div className="section-2-item-17">Sender's Email Address:</div>
                <input type="text" className="section-2-item-18" />

                <div className="section-2-item-19">Sender's Permit Type:</div>
                <select name="" id="" className="section-2-item-20">
                    <option value="stateFalconry">State Falconry</option>
                    <option value="fwsRaptorPropagation">FWS Raptor Propagation</option>
                    <option value="fwsRehabilitation">FWS Rehabilitation (see instructions)</option>
                    <option value="other">Other</option>
                </select>

                <div className="section-2-item-21">If Above Answer Was Other Please Specify:</div>
                <input type="text" className="section-2-item-22" />

                <div className="section-2-item-23">If a Transfer:</div>
                <select name="" id="" className="section-2-item-24">
                    <option value=""></option>
                    <option value="gift">Gift</option>
                    <option value="sale">Sale</option>
                    <option value="loan">Loan</option>
                </select>

                <div className="section-2-item-25">If Release or Loss:</div>
                <select name="" id="" className="section-2-item-26">
                    <option value=""></option>
                    <option value="release">Release</option>
                    <option value="escape">Escape</option>
                    <option value="theft">Theft</option>
                    <option value="death">Death</option>
                </select>

                <div className="section-2-item-27">If Above Answer Was Death, Cause of Death:</div>
                <input type="text" className="section-2-item-28" />

            </div>

            <div className="section-3 form-section">
                <div className="section-3-item-1">Recipient's USFWS Permit Number:</div>
                <input type="text" className="section-3-item-2" />

                <div className="section-3-item-3">Recipient's Name:</div>
                <input type="text" className="section-3-item-4" />

                <div className="section-3-item-5">Recipient's Date of Acquisition:</div>
                <input type="text" className="section-3-item-6" />

                <div className="section-3-item-7">Recipient's Address:</div>
                <input type="text" className="section-3-item-8" />

                <div className="section-3-item-9">Recipient's City:</div>
                <input type="text" className="section-3-item-10" />

                <div className="section-3-item-11">Recipient's State:</div>
                <input type="text" className="section-3-item-12" />

                <div className="section-3-item-13">Recipient's Zip Code:</div>
                <input type="text" className="section-3-item-14" />

                <div className="section-3-item-15">Recipient's Email Address:</div>
                <input type="text" className="section-3-item-16" />

                <div className="section-3-item-17">Recipient's Permit Type:</div>
                <select name="" id="" className="section-3-item-18">
                    <option value="stateFalconry">State Falconry</option>
                    <option value="fwsRaptorPropigation">FWS Raptor Prop</option>
                    <option value="other">Other</option>
                </select>

                <div className="section-3-item-19">If Above Answer Was Other Please Specify:</div>
                <input type="text" className="section-3-item-20" />

                <div className="section-3-item-21">Type of Acquisition:</div>
                <select name="" id="" className="section-3-item-22">
                    <option value="gift">Gift</option>
                    <option value="purchase">Purchase</option>
                    <option value="loan">Loan</option>
                    <option value="captureRecapture">Capture/Recapture (complete Section 4)</option>
                </select>
            </div>

            <div className="section-4 form-section">
                <div className="section-4-item-1">Capture or Recapture:</div>
                <select name="" id="" className="section-4-item-2">
                    <option value="capture">Capture</option>
                    <option value="recapture">Recapture</option>
                </select>

                <div className="section-4-item-3">County of Capture:</div>
                <input type="text" className="section-4-item-4" />

                <div className="section-4-item-5">State of Capture:</div>
                {/* TODO - possibly switch this to a dropdown */}
                <input type="text" className="section-4-item-6" />

                <div className="section-4-item-7">If you captured a Gyrfalcon, what color is it?</div>
                <select name="" id="" className="section-4-item-8">
                    <option value="grey">Grey</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="unknown">Unkown (nestling)</option>
                </select>
            </div>

            <div className="section-5 form-section">
                <div className="section-5-item-1">Old Band Number:</div>
                <input type="text" className="section-5-item-2" />

                <div className="section-5-item-3">Old Band Type:</div>
                <select name="" id="" className="section-5-item-4">
                    <option value="seamlessMetal">Seamless Metal</option>
                    <option value="yellowPlastic">Yellow Plastic</option>
                    <option value="blackPlastic">Black Plastic</option>
                    <option value="microchip">Microchip</option>
                </select>

                <div className="section-5-item-5">New Band Number:</div>
                <input type="text" className="section-5-item-6" />

                <div className="section-5-item-7">New Band Type:</div>
                <select name="" id="" className="section-5-item-8">
                    <option value="yellowPlastic">Yellow Plastic</option>
                    <option value="blackPlastic">Black Plastic</option>
                    <option value="microchip">Microchip</option>
                </select>
            </div>

            <div className="section-6 form-section">
                <div className="section-6-item-1">Name:</div>
                <input type="text" className="section-6-item-2" />

                <div className="section-6-item-3">Phone Number:</div>
                <input type="text" className="section-6-item-4" />

                <div className="section-6-item-5">Date:</div>
                <input type="date" className="section-6-item-6" />
            </div>

            <button type="submit" className="submit-button">Submit</button>

        </form>
    </div>
  )
}

export default AddForm
