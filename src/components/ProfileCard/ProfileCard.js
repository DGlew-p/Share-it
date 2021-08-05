import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "../../pages/ProfilesPage/ProfilesPage.styles";
import SingleProfileCard from "../SingleProfileCard/SingleProfileCard";
export default function ProfileCard(props, showProfile) {
  return (
    <React.Fragment>
      <Card>
        <h1>{props.name}</h1>
        <h2>{props.location}</h2>
        <p>{props.bio}</p>
        <p>{props.skills}</p>

        <button
          className="button is-link is-small is-warning is-rounded"
          onClick={() => props.toggleDetailShow(props)}
        >
          More Details
        </button>
        <SingleProfileCard
          toggleDetailShow={props.toggleDetailShow}
          showDetail={props.showDetail}
          handleDetailClose={props.handleDetailClose}
          profileDetails={props.profileDetails}
          user={props.user}
          showMine={props.showMine}
          showDetail={props.showDetail}
        />

        <div>
          {props.user._id === props._id ? (
            <Button
              className="button is-link is-small is-warning is-rounded"
              onClick={() => props.handleProfileDelete(props._id)}
            >
              Delete your Profile
            </Button>
          ) : (
            <></>
          )}
        </div>
      </Card>
    </React.Fragment>
  );
}
