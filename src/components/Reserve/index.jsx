import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { supabase } from "../../utils/supabaseConfig";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Reserve = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState(0);
  const [noOfPeople, setPeople] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occassion, setOccassion] = useState("");
  const [message, setMessage] = useState("");

  const bookTable = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Booked Tables")
      .insert([
        {
          last_name: firstName,
          first_name: lastName,
          email: email,
          phone_number: phoneNumber,
          number_of_people: noOfPeople,
          date: date,
          time: time,
          occasion: occassion,
          Message: message,
        },
      ])
      .select();

    if (error) {
      console.log(error);
      toast.error("Error in booking reservation");
    } else {
      console.log("Booked successfully");
      toast.success("Booked successfully");
      setFirstName("")
    }
  };
  return (
    <>
      <ToastContainer />

      <div className="edit-100">
        <div className="edit-101">
          <div className="reserve-12">
            <div className="reserve-1">Reservation_______________</div>
            <div className="reserve-2">Book a Table</div>
          </div>
          <Link to="/">
            <button className="edit-102">Home</button>
          </Link>
        </div>
        <form onSubmit={bookTable} className="edit-105">
          <div className="edit-55">
            <div>
              <div>First Name</div>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <div>Last Name</div>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <div>Email</div>
              <input onChange={(e) => setEmail(e.target.value)} type="text" />
            </div>
          </div>
          <div className="edit-56">
            <div>
              <div>Phone Number</div>
              <input onChange={(e) => setPhone(e.target.value)} type="number" />
            </div>
            <div>
              <div>Number of People</div>
              <input
                onChange={(e) => setPeople(e.target.value)}
                type="number"
              />
            </div>
            <div>
              <div>Date</div>
              <input onChange={(e) => setDate(e.target.value)} type="date" />
            </div>
          </div>
          <div className="edit-57">
            <div>
              <div>Time</div>
              <input onChange={(e) => setTime(e.target.value)} type="text" />
            </div>
            <div>
              <div>Occasion</div>
              <input
                onChange={(e) => setOccassion(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <div>Message</div>
              <input onChange={(e) => setMessage(e.target.value)} type="text" />
            </div>
            {/* <div className='review-review'>
                <button className='review-review2'>Book</button>
            </div> */}
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </>
  );
};

export default Reserve;
