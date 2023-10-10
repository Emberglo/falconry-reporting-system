import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div>
      <Link to="/">Home</Link>

      <div className="form">
        
        <div className="section-1 form-section">
            <div className="item-1">Species:</div>
            <div className="item-2">Species Value</div>

            <div className="item-3">USFWS Band Number:</div>
            <div className="item-4">USFWS Band Number Value</div>

            <div className="item-5">Sex:</div>
            <div className="item-6">Sex Value</div>

            <div className="item-7">Source:</div>
            <div className="item-8">Source Value</div>

            <div className="item-9">Microchip Number (if applicable):</div>
            <div className="item-10">Microchip Number Value</div>

            <div className="item-11">Age:</div>
            <div className="item-12">Age Value</div>

            <div className="item-13">Year of Hatch:</div>
            <div className="item-14">Year of Hatch Value</div>
        </div>

        <div className="section-2 form-section">
            <div className="item-1">Sender's USFWS Permit Number:</div>
            <div className="item-2">Sender's USFWS Permit Number Value</div>

            <div className="item-3">Sender's Name:</div>
            <div className="item-4">Sender's Name Value</div>

            <div className="item-5">Date of Transfer (or other action):</div>
            <div className="item-6">Date Of Transfer Value</div>

            <div className="item-7">Sender's Address:</div>
            <div className="item-8">Sender's Address Value</div>

            <div className="item-9">Sender's City:</div>
            <div className="item-10">Sender's City Value</div>

            <div className="item-11">Sender's State:</div>
            <div className="item-12">Sender's State</div>

            <div className="item-13">Sender's Zip Code:</div>
            <div className="item-14">Sender's Zip Code Value</div>

            <div className="item-15">Sender's Email Address:</div>
            <div className="item-16">Sender's Email Address Value</div>

            <div className="item-17">Sender's Permit Type:</div>
            <div className="item-18">Sender's Permit Type Value</div>

            <div className="item-19">If Above Answer Was Other Please Specify:</div>
            <div className="item-20">If Other Value</div>

            <div className="item-21">If a Transfer:</div>
            <div className="item-22">If a Transfer Value</div>

            <div className="item-23">If Release or Loss:</div>
            <div className="item-24">If Release or Loss Value</div>

            <div className="item-25">If Above Answer Was Death, Cause of Death:</div>
            <div className="item-26">Cause of Death Value</div>
        </div>

        <div className="section-3 form-section">
            <div className="item-1">Recipient's USFWS Permit Number:</div>
            <div className="item-2">Recipient's USFWS Permit Number:</div>

            <div className="item-3">Recipient's Name:</div>
            <div className="item-4">Recipient's Name Value</div>

            <div className="item-5">Recipient's Date of Acquisition:</div>
            <div className="item-6">Recipient's Date of Acquisition Value</div>

            <div className="item-7">Recipient's Address:</div>
            <div className="item-8">Recipient's Address Value</div>

            <div className="item-9">Recipient's City:</div>
            <div className="item-10">Recipient's City Value</div>

            <div className="item-11">Recipient's State:</div>
            <div className="item-12">Recipient's State Value</div>

            <div className="item-13">Recipient's Zip Code:</div>
            <div className="item-14">Recipient's Zip Code Value</div>

            <div className="item-15">Recipient's Email Address:</div>
            <div className="item-16">Recipient's Email Address Value</div>

            <div className="item-17">Recipient's Permit Type:</div>
            <div className="item-18">Recipient's Permit Type Value</div>

            <div className="item-19">If Above Answer Was Other Please Specify:</div>
            <div className="item-20">If Other Value</div>

            <div className="item-21">Type of Acquisition:</div>
            <div className="item-22">Type of Acquisition Value</div>
        </div>

        <div className="section-4 form-section">
            <div className="item-1">Capture or Recapture:</div>
            <div className="item-2">Capture or Recapture Value</div>

            <div className="item-3">County of Capture:</div>
            <div className="item-4">County of Capture Value</div>

            <div className="item-5">State of Capture:</div>
            <div className="item-6">State of Capture Value</div>
            {/* TODO - possibly switch this to a dropdown */}

            <div className="item-7">If you captured a Gyrfalcon, what color is it?</div>
            <div className="item-8">Color Value</div>
        </div>

        <div className="section-5 form-section">
            <div className="item-1">Old Band Number:</div>
            <div className="item-2">Old Band Number Value</div>

            <div className="item-3">Old Band Type:</div>
            <div className="item-4">Old Band Type Value</div>

            <div className="item-5">New Band Number:</div>
            <div className="item-6">New Band Number Value</div>

            <div className="item-7">New Band Type:</div>
            <div className="item-8">New Band Type Value</div>
        </div>

        <div className="section-6 form-section">
            <div className="item-1">Name:</div>
            <div className="item-2">Name Value</div>

            <div className="item-3">Phone Number:</div>
            <div className="item-4">Phone Number Value</div>

            <div className="item-5">Date:</div>
            <div className="item-6">Date Value</div>
        </div>

      </div>
    </div>
  )
}

export default Form
