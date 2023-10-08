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
                <label htmlFor="species">
                    Species:
                    <input type="text" />
                </label>
                <label htmlFor="bandNumber">
                    USFWS Band Number:
                    <input type="text" />
                </label>
                <label htmlFor="sex">
                    Sex:
                    <select name="" id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </label>
                <label htmlFor="sorce">
                    Source:
                    <select name="" id="">
                        <option value="wild">Wild</option>
                        <option value="captive-bred">Captive-Bred</option>
                    </select>
                </label>
                <label htmlFor="microchip">
                    Microchip Number (if applicable):
                    <input type="text" />
                </label>
                <label htmlFor="age">
                    Age:
                    <select name="" id="">
                        <option value="nestling">Nestling</option>
                        <option value="immature">Immature</option>
                        <option value="adult">Adult</option>
                    </select>
                </label>
                <label htmlFor="hatch">
                    Year of Hatch:
                    <input type="text" />
                </label>
            </div>

            <div className="section-2 form-section">
                <label htmlFor="senderPermitNumber">
                    Sender's USFWS Permit Number:
                    <input type="text" />
                </label>
                <label htmlFor="senderName">
                    Sender's Name:
                    <input type="text" />
                </label>
                <label htmlFor="senderName">
                    Sender's Name:
                    <input type="text" />
                </label>
                <label htmlFor="transferDate">
                    Date of Transfer (or other action):
                    <input type="text" />
                </label>
                <label htmlFor="senderAddress">
                    Sender's Address:
                    <input type="text" />
                </label>
                <label htmlFor="senderCity">
                    Sender's City:
                    <input type="text" />
                </label>
                <label htmlFor="senderState">
                    Sender's State:
                    <input type="text" />
                </label>
                <label htmlFor="senderZip">
                    Sender's Zip Code:
                    <input type="text" />
                </label>
                <label htmlFor="senderEmail">
                    Sender's Email Address:
                    <input type="text" />
                </label>
                <label htmlFor="senderPermit">
                    Sender's Permit Type:
                    <select name="" id="">
                        <option value="stateFalconry">State Falconry</option>
                        <option value="fwsRaptorPropagation">FWS Raptor Propagation</option>
                        <option value="fwsRehabilitation">FWS Rehabilitation (see instructions)</option>
                        <option value="other">Other</option>
                    </select>
                    If Other: <input type="text" />
                </label>
                <label htmlFor="ifTransfer">
                    If a Transfer:
                    <select name="" id="">
                        <option value="gift">Gift</option>
                        <option value="sale">Sale</option>
                        <option value="loan">Loan</option>
                    </select>
                </label>
                <label htmlFor="ifReleaseLoss">
                    If Release or Loss:
                    <select name="" id="">
                        <option value="release">Release</option>
                        <option value="escape">Escape</option>
                        <option value="theft">Theft</option>
                        <option value="death">Death</option>
                    </select>
                    Cause of Death: <input type="text" />
                </label>
            </div>

            <div className="section-3 form-section">
                <label htmlFor="recipientPermitNumber">
                    Recipient's USFWS Permit Number:
                    <input type="text" />
                </label>
                <label htmlFor="recipientName">
                    Recipient's Name:
                    <input type="text" />
                </label>
                <label htmlFor="recipientDateOfAcquisition">
                    Recipient's Date of Acquisition:
                    <input type="text" />
                </label>
                <label htmlFor="recipientAddress">
                    Recipient's Address:
                    <input type="text" />
                </label>
                <label htmlFor="recipientCity">
                    Recipient's City:
                    <input type="text" />
                </label>
                <label htmlFor="recipientState">
                    Recipient's State:
                    <input type="text" />
                </label>
                <label htmlFor="recipientZip">
                    Recipient's Zip Code:
                    <input type="text" />
                </label>
                <label htmlFor="recipientEmail">
                    Recipient's Email Address:
                    <input type="text" />
                </label>
                <label htmlFor="recipientPermit">
                    Recipient's Permit Type:
                    <select name="" id="">
                        <option value="stateFalconry">State Falconry</option>
                        <option value="fwsRaptorPropigation">FWS Raptor Prop</option>
                        <option value="other">Other</option>
                    </select>
                    If Other:
                    <input type="text" />
                </label>
                <label htmlFor="recipientTypeOfAcquisition">
                    Type of Acquisition:
                    <select name="" id="">
                        <option value="gift">Gift</option>
                        <option value="purchase">Purchase</option>
                        <option value="loan">Loan</option>
                        <option value="captureRecapture">Capture/Recapture (complete Section 4)</option>
                    </select>
                </label>
            </div>

            <div className="section-4 form-section">
                <label htmlFor="captureRecapture">
                    Capture or Recapture:
                    <select name="" id="">
                        <option value="capture">Capture</option>
                        <option value="recapture">Recapture</option>
                    </select>
                </label>
                <label htmlFor="county">
                    County of Capture:
                    <input type="text" />
                </label>
                <label htmlFor="state">
                    State of Capture:
                    {/* TODO - possibly switch this to a dropdown */}
                    <input type="text" />
                </label>
                <label htmlFor="colorPhase">
                    If you captured a Gyrfalcon, what color is it?
                    <select name="" id="">
                        <option value="grey">Grey</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="unknown">Unkown (nestling)</option>
                    </select>
                </label>
            </div>

            <div className="section-5 form-section">
                <label htmlFor="oldBandNumber">
                    Old Band Number:
                    <input type="text" />
                </label>
                <label htmlFor="oldBandType">
                    Old Band Type:
                    <select name="" id="">
                        <option value="seamlessMetal">Seamless Metal</option>
                        <option value="yellowPlastic">Yellow Plastic</option>
                        <option value="blackPlastic">Black Plastic</option>
                        <option value="microchip">Microchip</option>
                    </select>
                </label>
                <label htmlFor="newBandNumber">
                    New Band Number:
                    <input type="text" />
                </label>
                <label htmlFor="newBandType">
                    New Band Type:
                    <select name="" id="">
                        <option value="yellowPlastic">Yellow Plastic</option>
                        <option value="blackPlastic">Black Plastic</option>
                        <option value="microchip">Microchip</option>
                    </select>
                </label>
            </div>

            <div className="section-6 form-section">
                <label htmlFor="name">
                    Name:
                    <input type="text" />
                </label>
                <label htmlFor="phoneNumber">
                    Phone Number:
                    <input type="text" />
                </label>
                <label htmlFor="date">
                    Date:
                    <input type="date" name="" id="" />
                </label>
            </div>

            <button type="submit" className="submit-button">Submit</button>

        </form>
    </div>
  )
}

export default AddForm
