import Image from "next/image";
import LinkText from "./linktext";

const Profile = ({ image, link }) => {
    return (
        <a href={`https://${link}`}>
            <div className="flex gap-2 align-middle justify-start">
                <img src={image} alt={link} className="w-6 max-w-md h-fit" />
                <LinkText content={link} />
            </div>
        </a>
    )
};

export default Profile;
