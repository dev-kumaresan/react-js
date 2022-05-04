import "./profile-card.css";
function ProfileCard(props)
{
    return(
        <div className="profile-card">
            <h1>{props.userData.name}</h1>
        </div>
    );
}
export default ProfileCard;