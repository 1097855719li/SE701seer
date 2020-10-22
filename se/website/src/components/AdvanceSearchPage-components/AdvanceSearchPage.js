import React, { useState, useEffect } from "react";
import "./AdvanceSearchPage.css";
import "../../App.css";
import Axios from "axios";

const AdvanceSearchPage = (props) => {
    const [selectTitle, setSelectTitle] = useState("");
    const [selectStartDate, setSelectStartDate] = useState("");
    const [selectEndDate, setSelectEndDate] = useState("");
    const [selectMethod, setMethod] = useState("");
    const [selectBenefit, setSelectBenefit] = useState("");
    const [selectParticipants, setSelectParticipants] = useState("");

    const [reviewList2, setreviewList2] = useState([]);

    const postTarget2 = `http://localhost:3010/api/advanceSelect`;

    // when title change auto send post to backend
    useEffect(() => {
        if (selectTitle != "", selectStartDate != "", selectEndDate != "", selectBenefit != "") {

            submitReview2();
        } else {
            setreviewList2([])
        }
    }, [selectTitle]);

    useEffect(
        (e) => {
            console.log(reviewList2);
        },
        [reviewList2]
    );
    const submitReview2 = () => {
        var bodyData = {
            selectTitle: selectTitle,
            selectStartDate: selectStartDate,
            selectEndDate: selectEndDate,
            selectMethod: selectMethod,
            selectBenefit: selectBenefit,
            selectParticipants: selectParticipants

        };

        Axios.post(postTarget2, bodyData)
            .then((response) => {
                //200 for success
                if (response.status === 200) {
                    // when success set result
                    var processed = [];

                    response.data.map(el => {
                        console.log(el)
                        processed.push(el);
                    })


                    setreviewList2(processed);
                } else {
                    alert("Backend error => backend return is not 200");
                }
            })
            .catch((error) => {
                alert("Backend error=> post send but no resp");
            });
    };

    return (
        <div className="search-container">
            <p>
                search triger : input onBlur {"->"} triger update state {"=>"} triger
                useEffect {"=>"} triger submitReview2()
            </p>
            <p>search triger : form submit will directly triger submitReview2()</p>
            <h1 className="Header">Advance Search Options</h1>
            <form
                onSubmit={(e) => {
                    //stop page reflash on submit
                    e.preventDefault();

                    //triger submit logic
                    submitReview2();
                }}
            >
                <label htmlFor="Title">Title</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    onBlur={(e) => {
                        setSelectTitle(e.target.value);
                    }}
                />
                <br />

                <label htmlFor="Date">Date</label>
                <br />
                <p>
                    <input type="date" id="start_date" name="start_date" onBlur={(e) => {setSelectStartDate(e.target.value);}} />-
                    <input type="date" id="end_date" name="end_date" onBlur={(e) => {setSelectEndDate(e.target.value);}} />
                </p>
                <br />
                <label htmlFor="Method">Method</label>
                <br />
                <br />
                <div>
                    <input type="checkbox" id="TDD" name="method" value="TDD" />
                    <label for="TDD">TDD</label>
                    <br />

                    <input type="checkbox" id="BDD" name="method" value="BDD" />
                    <label for="BDD">BDD</label>
                    <br />

                    <input
                        type="checkbox"
                        id=" pair_programming"
                        name="method"
                        value=" pair programming"
                    />
                    <label for=" pair_programming"> pair programming</label>
                    <br />

                    <input
                        type="checkbox"
                        id="planning_poker"
                        name="method"
                        value="planning poker"
                    />
                    <label for="planning_poker">planning poker</label>
                    <br />

                    <input
                        type="checkbox"
                        id="daily_standup_meetings"
                        name="method"
                        value="daily standup meetings"
                    />
                    <label for="daily_standup_meetings">daily standup meetings</label>
                    <br />

                    <input
                        type="checkbox"
                        id="story_boards"
                        name="method"
                        value="story boards"
                    />
                    <label for="story_boards">story boards</label>
                    <br />

                    <input
                        type="checkbox"
                        id="user_story_mapping"
                        name="method"
                        value="user story mapping"
                    />
                    <label for="user_story_mapping">user story mapping</label>
                    <br />

                    <input
                        type="checkbox"
                        id=" continuous_integration"
                        name="method"
                        value=" continuous integration"
                    />
                    <label for=" continuous_integration">continuous integration</label>
                    <br />

                    <input
                        type="checkbox"
                        id="retrospectives"
                        name="method"
                        value="retrospectives"
                    />
                    <label for="retrospectives">retrospectives</label>
                    <br />

                    <input
                        type="checkbox"
                        id="burn_down_charts"
                        name="method"
                        value="burn down charts"
                    />
                    <label for="burn_down_charts">burn down charts</label>
                    <br />

                    <input
                        type="checkbox"
                        id="version_control"
                        name="method"
                        value="version control"
                    />
                    <label for="version_control">burn down charts</label>
                    <br />

                    <input
                        type="checkbox"
                        id="code_sharing"
                        name="method"
                        value="code sharing"
                    />
                    <label for="code_sharing"> code sharing</label>
                    <br />

                    <input
                        type="checkbox"
                        id="requirements_prioritisation"
                        name="method"
                        value="requirements prioritisation"
                    />
                    <label for="requirements_prioritisation">
                        requirements prioritisation
          </label>
                    <br />
                    <br />
                </div>
                <label htmlFor="Benefit">Benefit</label>
                <br />
                <input 
                    type="text" 
                    id="benefit" 
                    name="benefit" 
                    onBlur={(e) => {setSelectBenefit(e.target.value);}}
                />
                <br />
                <br />
                <label htmlFor="Participants">Participants</label>
                <br />
                <br />
                <div>
                    <input
                        type="checkbox"
                        id="undergraduate_students"
                        name="participants"
                        value="undergraduate students"
                    />
                    <label for="undergraduate_students">Undergraduate students</label>
                    <br />
                    <input
                        type="checkbox"
                        id="postgraduate_students"
                        name="participants"
                        value="postgraduate students"
                    />
                    <label for="postgraduate_students">Postgraduate students</label>
                    <br />
                    <input
                        type="checkbox"
                        id="practitioners"
                        name="participants"
                        value="practitioners"
                    />
                    <label for="practitioners">Practitioners</label>
                    <br />
                    <br />
                </div>

                <button type="submit">Submit</button>
            </form>
            <p>if result is not empty {"=>"} here will display the result</p>{" "}
            {reviewList2.map((el, i) => {
                return <div key={`display ${i}`}>
        
                    {Object.keys(el).map(k => {
                        return <p key={`display ${i} ${k}`}>{k}: {el[k]}</p>

                    })}

                </div>

            })}
        </div>
    );
};

export default AdvanceSearchPage;