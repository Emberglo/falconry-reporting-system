import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../data";

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

    const formData = {
        species: species,
        bandNumber: bandNumber,
        sex: sex,
        source: source,
        microchip: microchip,
        age: age,
        hatch: hatch,
        senderPermitNumber: senderPermitNumber,
        senderName: senderName,
        transferDate: transferDate,
        senderAddress: senderAddress,
        senderCity: senderCity,
        senderState: senderState,
        senderZip: senderZip,
        senderEmail: senderEmail,
        senderPermit: senderPermit,
        ifSenderPermitOther: ifSenderPermitOther,
        ifTransfer: ifTransfer,
        ifReleaseLoss: ifReleaseLoss,
        ifDeath: ifDeath,
        recipientPermitNumber: recipientPermitNumber,
        recipientName: recipientName,
        recipientDateOfAcquisition: recipientDateOfAcquisition,
        recipientAddress: recipientAddress,
        recipientCity: recipientCity,
        recipientState: recipientState,
        recipientZip: recipientZip,
        recipientEmail: recipientEmail,
        recipientPermit: recipientPermit,
        ifRecipientPermitOther: ifRecipientPermitOther,
        recipientTypeOfAcquisition: recipientTypeOfAcquisition,
        captureRecapture: captureRecapture,
        captureCounty: captureCounty,
        captureState: captureState,
        colorPhase: colorPhase,
        oldBandNumber: oldBandNumber,
        oldBandType: oldBandType,
        newBandNumber: newBandNumber,
        newBandType: newBandType,
        name: name,
        phoneNumber: phoneNumber,
        date: date
    }

    function handleSubmit() {
        console.log(formData);
        data.push(formData);
    };

  return (
    <div className="add-form-page">
        <Link to="/">Home</Link>

        <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}} className="form">

            <div className="section-1 form-section">
                <div className="item-1">Species:</div>
                <input type="text" className="item-2" name='species' value={species} onChange={e => setSpecies(e.target.value)} />

                <div className="item-3">USFWS Band Number:</div>
                <input type="text" className="item-4" name='bandNumber' value={bandNumber} onChange={e => setBandNumber(e.target.value)} />

                <div className="item-5">Sex:</div>
                <select id="" className="item-6" name='sex' value={sex} onChange={e => setSex(e.target.value)}>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">Unknown</option>
                </select>

                <div className="item-7">Source:</div>
                <select id="" className="item-8" name="source" value={source} onChange={e => setSource(e.target.value)}>
                    <option value=""></option>
                    <option value="wild">Wild</option>
                    <option value="captive-bred">Captive-Bred</option>
                </select>

                <div className="item-9">Microchip Number (if applicable):</div>
                <input type="text" className="item-10" name='microchip' value={microchip} onChange={e => setMicrochip(e.target.value)} />

                <div className="item-11">Age:</div>
                <select id="" className="item-12" name="age" value={age} onChange={e => setAge(e.target.value)}>
                    <option value=""></option>
                    <option value="nestling">Nestling</option>
                    <option value="immature">Immature</option>
                    <option value="adult">Adult</option>
                </select>

                <div className="item-13">Year of Hatch:</div>
                <input type="text" className="item-14" name='hatch' value={hatch} onChange={e => setHatch(e.target.value)} />
            </div>

            <div className="section-2 form-section">
                <div className="item-1">Sender's USFWS Permit Number:</div>
                <input type="text" className="item-2" name='senderPermitNumber' value={senderPermitNumber} onChange={e => setSenderPermitNumber(e.target.value)}/>

                <div className="item-3">Sender's Name:</div>
                <input type="text" className="item-4" name='senderName' value={senderName} onChange={e => setSenderName(e.target.value)} />

                <div className="item-5">Date of Transfer (or other action):</div>
                <input type="date" className="item-6" name='transferDate' value={transferDate} onChange={e => setTransferDate(e.target.value)} />

                <div className="item-7">Sender's Address:</div>
                <input type="text" className="item-8" name='senderAddress' value={senderAddress} onChange={e => setSenderAddress(e.target.value)} />

                <div className="item-9">Sender's City:</div>
                <input type="text" className="item-10" name='senderCity' value={senderCity} onChange={e => setSenderCity(e.target.value)} />

                <div className="item-11">Sender's State:</div>
                <input type="text" className="item-12" name='senderState' value={senderState} onChange={e => setSenderState(e.target.value)} />

                <div className="item-13">Sender's Zip Code:</div>
                <input type="text" className="item-14" name='senderZip' value={senderZip} onChange={e => setSenderZip(e.target.value)} />

                <div className="item-15">Sender's Email Address:</div>
                <input type="text" className="item-16" name='senderEmail' value={senderEmail} onChange={e => setSenderEmail(e.target.value)} />

                <div className="item-17">Sender's Permit Type:</div>
                <select id="" className="item-18" name="senderPermit" value={senderPermit} onChange={e => setSenderPermit(e.target.value)}>
                    <option value=""></option>
                    <option value="stateFalconry">State Falconry</option>
                    <option value="fwsRaptorPropagation">FWS Raptor Propagation</option>
                    <option value="fwsRehabilitation">FWS Rehabilitation (see instructions)</option>
                    <option value="other">Other</option>
                </select>

                <div className="item-19">If Above Answer Was Other Please Specify:</div>
                <input type="text" className="item-20" name='ifSenderPermitOther' value={ifSenderPermitOther} onChange={e => setIfSenderPermitOther(e.target.value)} />

                <div className="item-21">If a Transfer:</div>
                <select id="" className="item-22" name="ifTransfer" value={ifTransfer} onChange={e => setIfTransfer(e.target.value)}>
                    <option value=""></option>
                    <option value="gift">Gift</option>
                    <option value="sale">Sale</option>
                    <option value="loan">Loan</option>
                </select>

                <div className="item-23">If Release or Loss:</div>
                <select id="" className="item-24" name="ifReleaseLoss" value={ifReleaseLoss} onChange={e => setIfReleaseLoss(e.target.value)}>
                    <option value=""></option>
                    <option value="release">Release</option>
                    <option value="escape">Escape</option>
                    <option value="theft">Theft</option>
                    <option value="death">Death</option>
                </select>

                <div className="item-25">If Above Answer Was Death, Cause of Death:</div>
                <input type="text" className="item-26" name='ifDeath' value={ifDeath} onChange={e => setIfDeath(e.target.value)} />
            </div>

            <div className="section-3 form-section">
                <div className="item-1">Recipient's USFWS Permit Number:</div>
                <input type="text" className="item-2" name='recipientPermitNumber' value={recipientPermitNumber} onChange={e => setRecipientPermitNumber(e.target.value)} />

                <div className="item-3">Recipient's Name:</div>
                <input type="text" className="item-4" name='recipientName' value={recipientName} onChange={e => setRecipientName(e.target.value)} />

                <div className="item-5">Recipient's Date of Acquisition:</div>
                <input type="date" className="item-6" name='recipientDateOfAcquisition' value={recipientDateOfAcquisition} onChange={e => setRecipientDateOfAcquisition(e.target.value)} />

                <div className="item-7">Recipient's Address:</div>
                <input type="text" className="item-8" name='recipientAddress' value={recipientAddress} onChange={e => setRecipientAddress(e.target.value)} />

                <div className="item-9">Recipient's City:</div>
                <input type="text" className="item-10" name='recipientCity' value={recipientCity} onChange={e => setRecipientCity(e.target.value)} />

                <div className="item-11">Recipient's State:</div>
                <input type="text" className="item-12" name='recipientState' value={recipientState} onChange={e => setRecipientState(e.target.value)} />

                <div className="item-13">Recipient's Zip Code:</div>
                <input type="text" className="item-14" name='recipientZip' value={recipientZip} onChange={e => setRecipientZip(e.target.value)} />

                <div className="item-15">Recipient's Email Address:</div>
                <input type="text" className="item-16" name='recipientEmail' value={recipientEmail} onChange={e => setRecipientEmail(e.target.value)} />

                <div className="item-17">Recipient's Permit Type:</div>
                <select id="" className="item-18" name="recipientPermit" value={recipientPermit} onChange={e => setRecipientPermit(e.target.value)}>
                    <option value=""></option>
                    <option value="stateFalconry">State Falconry</option>
                    <option value="fwsRaptorPropigation">FWS Raptor Prop</option>
                    <option value="other">Other</option>
                </select>

                <div className="item-19">If Above Answer Was Other Please Specify:</div>
                <input type="text" className="item-20" name='ifRecipientPermitOther' value={ifRecipientPermitOther} onChange={e => setIfRecipientPermitOther(e.target.value)} />

                <div className="item-21">Type of Acquisition:</div>
                <select id="" className="item-22" name="recipientTypeOfAqcuisition" value={recipientTypeOfAcquisition} onChange={e => setRecipientTypeOfAcquisition(e.target.value)}>
                    <option value=""></option>
                    <option value="gift">Gift</option>
                    <option value="purchase">Purchase</option>
                    <option value="loan">Loan</option>
                    <option value="captureRecapture">Capture/Recapture (complete Section 4)</option>
                </select>
            </div>

            <div className="section-4 form-section">
                <div className="item-1">Capture or Recapture:</div>
                <select id="" className="item-2" name="captureRecapture" value={captureRecapture} onChange={e => setCaptureRecapture(e.target.value)}>
                    <option value=""></option>
                    <option value="capture">Capture</option>
                    <option value="recapture">Recapture</option>
                </select>

                <div className="item-3">County of Capture:</div>
                <input type="text" className="item-4" name='captureCounty' value={captureCounty} onChange={e => setCaptureCounty(e.target.value)} />

                <div className="item-5">State of Capture:</div>
                {/* TODO - possibly switch this to a dropdown */}
                <input type="text" className="item-6" name='captureState' value={captureState} onChange={e => setCaptureState(e.target.value)} />

                <div className="item-7">If you captured a Gyrfalcon, what color is it?</div>
                <select id="" className="item-8" name='colorPhase' value={colorPhase} onChange={e => setColorPhase(e.target.value)}>
                    <option value=""></option>
                    <option value="grey">Grey</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="unknown">Unkown (nestling)</option>
                </select>
            </div>

            <div className="section-5 form-section">
                <div className="item-1">Old Band Number:</div>
                <input type="text" className="item-2" name='oldBandNumber' value={oldBandNumber} onChange={e => setOldBandNumber(e.target.value)} />

                <div className="item-3">Old Band Type:</div>
                <select id="" className="item-4" name="oldBandType" value={oldBandType} onChange={e => setOldBandType(e.target.value)}>
                    <option value=""></option>
                    <option value="seamlessMetal">Seamless Metal</option>
                    <option value="yellowPlastic">Yellow Plastic</option>
                    <option value="blackPlastic">Black Plastic</option>
                    <option value="microchip">Microchip</option>
                </select>

                <div className="item-5">New Band Number:</div>
                <input type="text" className="item-6" name='newBandNumber' value={newBandNumber} onChange={e => setNewBandNumber(e.target.value)} />

                <div className="item-7">New Band Type:</div>
                <select id="" className="item-8" name="newBandType" value={newBandType} onChange={e => setNewBandType(e.target.value)}>
                    <option value=""></option>
                    <option value="yellowPlastic">Yellow Plastic</option>
                    <option value="blackPlastic">Black Plastic</option>
                    <option value="microchip">Microchip</option>
                </select>
            </div>

            <div className="section-6 form-section">
                <div className="item-1">Name:</div>
                <input type="text" className="item-2" name='name' value={name} onChange={e => setName(e.target.value)} />

                <div className="item-3">Phone Number:</div>
                <input type="text" className="item-4" name='phoneNumber' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />

                <div className="item-5">Date:</div>
                <input type="date" className="item-6" name='date' value={date} onChange={e => setDate(e.target.value)} />
            </div>

            <button type="submit" className="submit-button">Submit Form</button>

        </form>
    </div>
  )
}

export default AddForm
