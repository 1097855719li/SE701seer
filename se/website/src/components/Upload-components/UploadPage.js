import React, {useState, useEffect} from 'react'
import './UploadPage.css'
import '../../App.css'
import Axios from 'axios'

function Uploadhpage(){

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [journal, setJournal] = useState('');
    const [year, setYear] = useState('');
    const [volume, setVolume] = useState('');
    const [number, setNumber] = useState('');
    const [pages, setPages] = useState('');
    const [month, setMonth] = useState("");
    const [participants, setParticipants] = useState('');
    const [uploaddate, setUploaddate]= useState('');

    const submitReview = () => {
        Axios.post("http://localhost:3010/api/insert", {
            author: author,
            title: title,
            journal: journal,
            year: year,
            volume: volume,
            number: number,
            pages: pages,
            month: month,
            participants: participants,
            uploaddate: uploaddate
        }).then(() => {
            alert("successful insert");
        });
    };

        return(
            <div className = 'upload-container'>
                <h1 className = "Header">Upload</h1>
                <form>
                <h2 className = "SubHeader">Uploader</h2>< br/>
                <label htmlFor = "Participants">Participants</label>< br/>< br/>
                    <div>
                        <input type = "radio" id = "undergraduate_students" name = "participants"  onChange={(e)=>{setParticipants("undergraduate students");}} />
                        <label for = "undergraduate_students" >Undergraduate students</label>< br/>
                        <input type = "radio" id = "postgraduate_students" name = "participants"  onChange={(e)=>{setParticipants("postgraduate students");}} />
                        <label for = "postgraduate_students" >Postgraduate students</label>< br/>
                        <input type = "radio" id = "practitioners" name = "participants"  onChange={(e)=>{setParticipants("practitioners");}} />
                        <label for = "practitioners" >Practitioners</label>< br/>< br/>
                    </div>
                <label htmlFor = "Date">Upload Date</label>< br/>< br/>
                <p><input type = "date" id="uploaddate" name="uploaddate" onChange = {(e)=>{setUploaddate(e.target.value);}} /></p>< br/>
                <h2 className = "SubHeader">Evidence Source</h2>< br/>
                    <label htmlFor = "author">Author</label>< br/>
                    <input type = "text" id="author" name="author" onChange={(e)=>{setAuthor(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "title">Title</label>< br/>
                    <input type = "text" id="title" name="title" onChange={(e)=>{setTitle(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "journal">Journal</label>< br/>
                    <input type = "text" id="journal" name="journal" onChange={(e)=>{setJournal(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "year">Year</label>< br/>
                    <input type = "text" id="year" name="year" onChange={(e)=>{setYear(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "volume">Volume</label>< br/>
                    <input type = "text" id="volume" name="volume" onChange={(e)=>{setVolume(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "number">Number</label>< br/>
                    <input type = "text" id="number" name="number" onChange={(e)=>{setNumber(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "pages">Pages</label>< br/>
                    <input type = "text" id="pages" name="pages" onChange={(e)=>{setPages(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "month">Month</label>< br/>
                    <input type = "text" id="month" name="month" onChange={(e)=>{setMonth(e.target.value);}} />< br/>< br/>
                    <button onClick = {submitReview} >Submit</button>
                </form>
            </div>
        )
}

export default Uploadhpage;