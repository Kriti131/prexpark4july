import "./ProfileCard.css"

function ProfileCard({userDetails}) {
    return (
        <div className="ProfileCard">
            <h2> {userDetails.name} </h2>
            <p>{userDetails.company}</p>
            <img src={userDetails.image} alt="Profile Picture"/>
        </div>
    )
}

export default ProfileCard;