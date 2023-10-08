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

    const [] = useState();



  return (
    <div className="add-form-page">
        <Link to="/">Home</Link>

        <form action="">

            <div>
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

            <div>
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

            <div>
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
                <label htmlFor="">
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </label>
            </div>

        </form>
    </div>
  )
}

export default AddForm
