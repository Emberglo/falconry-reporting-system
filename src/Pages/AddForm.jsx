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
    const [ifSenderPermitOther, setIfSenderPermitOther] = useState();
    const [ifTransfer, setIfTransfer] = useState();
    const [ifReleaseLoss, setIfReleaseLoss] = useState();
    const [ifDeath, setIfDeath] = useState();

    const [recipientPermitNumber, setRecipientPermitNumber] = useState();
    const [recipientName, setRecipientName] = useState();
    const [recipientDateOfAcquisition, setRecipientDateOfAcquisition] = useState();
    const [recipientAddress, setRecipientAddress] = useState();
    const [recipientCity, setRecipientCity] = useState();
    const [recipientState, setRecipientState] = useState();
    const [recipientZip, setRecipientZip] = useState();
    const [recipientEmail, setRecipientEmail] = useState();
    const [recipientPermit, setRecipientPermit] = useState();
    const [ifRecipientPermitOther, setIfRecipientPermitOther] = useState();
    const [recipientTypeOfAcquisition, setRecipientTypeOfAcquisition] = useState();

    const [captureRecapture, setCaptureRecapture] = useState();
    const [captureCounty, setCaptureCounty] = useState();
    const [captureState, setCaptureState] = useState();
    const [colorPhase, setColorPhase] = useState();
    
    const [oldBandNumber, setOldBandNumber] = useState();
    const [oldBandType, setOldBandType] = useState();
    const [newBandNumber, setNewBandNumber] = useState();
    const [newBandType, setNewBandType] = useState();

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [date, setDate] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(test);
    };

  return (
    <div className="add-form-page">
        <Link to="/">Home</Link>

        <form onSubmit={handleSubmit} className="form">

            <div className="section-1 form-section">
                <div className="item-1">Species:</div>
                <input type="text" className="item-2" value={species} onChange={setSpecies} />

                <div className="item-3">USFWS Band Number:</div>
                <input type="text" className="item-4" value={bandNumber} onChange={setBandNumber} />

                <div className="item-5">Sex:</div>
                <select name="" id="" className="item-6" value={sex} onChange={setSex}>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">Unknown</option>
                </select>

                <div className="item-7">Source:</div>
                <select name="" id="" className="item-8" value={source} onChange={setSource}>
                    <option value=""></option>
                    <option value="wild">Wild</option>
                    <option value="captive-bred">Captive-Bred</option>
                </select>

                <div className="item-9">Microchip Number (if applicable):</div>
                <input type="text" className="item-10" value={microchip} onChange={setMicrochip} />

                <div className="item-11">Age:</div>
                <select name="" id="" className="item-12" value={age} onChange={setAge}>
                    <option value=""></option>
                    <option value="nestling">Nestling</option>
                    <option value="immature">Immature</option>
                    <option value="adult">Adult</option>
                </select>

                <div className="item-13">Year of Hatch:</div>
                <input type="text" className="item-14" value={hatch} onChange={setHatch} />
            </div>

            <div className="section-2 form-section">
                <div className="item-1">Sender's USFWS Permit Number:</div>
                <input type="text" className="item-2"  value={senderPermitNumber} onChange={setSenderPermitNumber}/>

                <div className="item-3">Sender's Name:</div>
                <input type="text" className="item-4" value={senderName} onChange={setSenderName} />

                <div className="item-5">Date of Transfer (or other action):</div>
                <input type="text" className="item-6" value={transferDate} onChange={setTransferDate} />

                <div className="item-7">Sender's Address:</div>
                <input type="text" className="item-8" value={senderAddress} onChange={setSenderAddress} />

                <div className="item-9">Sender's City:</div>
                <input type="text" className="item-10" value={senderCity} onChange={setSenderCity} />

                <div className="item-11">Sender's State:</div>
                <input type="text" className="item-12" value={senderState} onChange={setSenderState} />

                <div className="item-13">Sender's Zip Code:</div>
                <input type="text" className="item-14" value={senderZip} onChange={setSenderZip} />

                <div className="item-15">Sender's Email Address:</div>
                <input type="text" className="item-16" value={senderEmail} onChange={setSenderEmail} />

                <div className="item-17">Sender's Permit Type:</div>
                <select name="" id="" className="item-18" value={senderPermit} onChange={setSenderPermit}>
                    <option value=""></option>
                    <option value="stateFalconry">State Falconry</option>
                    <option value="fwsRaptorPropagation">FWS Raptor Propagation</option>
                    <option value="fwsRehabilitation">FWS Rehabilitation (see instructions)</option>
                    <option value="other">Other</option>
                </select>

                <div className="item-19">If Above Answer Was Other Please Specify:</div>
                <input type="text" className="item-20" value={ifSenderPermitOther} onChange={setIfSenderPermitOther} />

                <div className="item-21">If a Transfer:</div>
                <select name="" id="" className="item-22" value={ifTransfer} onChange={setIfTransfer}>
                    <option value=""></option>
                    <option value="gift">Gift</option>
                    <option value="sale">Sale</option>
                    <option value="loan">Loan</option>
                </select>

                <div className="item-23">If Release or Loss:</div>
                <select name="" id="" className="item-24" value={ifReleaseLoss} onChange={setIfReleaseLoss}>
                    <option value=""></option>
                    <option value="release">Release</option>
                    <option value="escape">Escape</option>
                    <option value="theft">Theft</option>
                    <option value="death">Death</option>
                </select>

                <div className="item-25">If Above Answer Was Death, Cause of Death:</div>
                <input type="text" className="item-26" value={ifDeath} onChange={setIfDeath} />
            </div>

            <div className="section-3 form-section">
                <div className="item-1">Recipient's USFWS Permit Number:</div>
                <input type="text" className="item-2" value={recipientPermitNumber} onChange={setRecipientPermitNumber} />

                <div className="item-3">Recipient's Name:</div>
                <input type="text" className="item-4" value={recipientName} onChange={setRecipientName} />

                <div className="item-5">Recipient's Date of Acquisition:</div>
                <input type="text" className="item-6" value={recipientDateOfAcquisition} onChange={setRecipientDateOfAcquisition} />

                <div className="item-7">Recipient's Address:</div>
                <input type="text" className="item-8" value={recipientAddress} onChange={setRecipientAddress} />

                <div className="item-9">Recipient's City:</div>
                <input type="text" className="item-10" value={recipientCity} onChange={setRecipientCity} />

                <div className="item-11">Recipient's State:</div>
                <input type="text" className="item-12" value={recipientState} onChange={setRecipientState} />

                <div className="item-13">Recipient's Zip Code:</div>
                <input type="text" className="item-14" value={recipientZip} onChange={setRecipientZip} />

                <div className="item-15">Recipient's Email Address:</div>
                <input type="text" className="item-16" value={recipientEmail} onChange={setRecipientEmail} />

                <div className="item-17">Recipient's Permit Type:</div>
                <select name="" id="" className="item-18" value={recipientPermit} onChange={setRecipientPermit}>
                    <option value=""></option>
                    <option value="stateFalconry">State Falconry</option>
                    <option value="fwsRaptorPropigation">FWS Raptor Prop</option>
                    <option value="other">Other</option>
                </select>

                <div className="item-19">If Above Answer Was Other Please Specify:</div>
                <input type="text" className="item-20" value={ifRecipientPermitOther} onChange={setIfRecipientPermitOther} />

                <div className="item-21">Type of Acquisition:</div>
                <select name="" id="" className="item-22" value={recipientTypeOfAcquisition} onChange={setRecipientTypeOfAcquisition}>
                    <option value=""></option>
                    <option value="gift">Gift</option>
                    <option value="purchase">Purchase</option>
                    <option value="loan">Loan</option>
                    <option value="captureRecapture">Capture/Recapture (complete Section 4)</option>
                </select>
            </div>

            <div className="section-4 form-section">
                <div className="item-1">Capture or Recapture:</div>
                <select name="" id="" className="item-2" value={captureRecapture} onChange={setCaptureRecapture}>
                    <option value=""></option>
                    <option value="capture">Capture</option>
                    <option value="recapture">Recapture</option>
                </select>

                <div className="item-3">County of Capture:</div>
                <input type="text" className="item-4" value={captureCounty} onChange={setCaptureCounty} />

                <div className="item-5">State of Capture:</div>
                {/* TODO - possibly switch this to a dropdown */}
                <input type="text" className="item-6" value={captureState} onChange={setCaptureState} />

                <div className="item-7">If you captured a Gyrfalcon, what color is it?</div>
                <select name="" id="" className="item-8" value={colorPhase} onChange={setColorPhase}>
                    <option value=""></option>
                    <option value="grey">Grey</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="unknown">Unkown (nestling)</option>
                </select>
            </div>

            <div className="section-5 form-section">
                <div className="item-1">Old Band Number:</div>
                <input type="text" className="item-2" value={oldBandNumber} onChange={setOldBandNumber} />

                <div className="item-3">Old Band Type:</div>
                <select name="" id="" className="item-4" value={oldBandType} onChange={setOldBandType}>
                    <option value=""></option>
                    <option value="seamlessMetal">Seamless Metal</option>
                    <option value="yellowPlastic">Yellow Plastic</option>
                    <option value="blackPlastic">Black Plastic</option>
                    <option value="microchip">Microchip</option>
                </select>

                <div className="item-5">New Band Number:</div>
                <input type="text" className="item-6" value={newBandNumber} onChange={setNewBandNumber} />

                <div className="item-7">New Band Type:</div>
                <select name="" id="" className="item-8" value={newBandType} onChange={setNewBandType}>
                    <option value=""></option>
                    <option value="yellowPlastic">Yellow Plastic</option>
                    <option value="blackPlastic">Black Plastic</option>
                    <option value="microchip">Microchip</option>
                </select>
            </div>

            <div className="section-6 form-section">
                <div className="item-1">Name:</div>
                <input type="text" className="item-2" value={name} onChange={setName} />

                <div className="item-3">Phone Number:</div>
                <input type="text" className="item-4" value={phoneNumber} onChange={setPhoneNumber} />

                <div className="item-5">Date:</div>
                <input type="date" className="item-6" value={date} onChange={setDate} />
            </div>

            <button type="submit" className="submit-button">Submit Form</button>

        </form>
    </div>
  )
}

export default AddForm
