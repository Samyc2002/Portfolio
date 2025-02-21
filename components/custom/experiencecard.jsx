import { Separator } from "../ui/separator";
import SubText from "./subtext";
import Text from "./text";

const ExperienceCard = ({ experience }) => {
    const getDateDifference = (date1, date2) => {
        let d1 = new Date(date1);
        let d2 = new Date(date2);

        if (d1 > d2) {
            [d1, d2] = [d2, d1]; // Ensure d1 is earlier
        }

        let years = d2.getFullYear() - d1.getFullYear();
        let months = d2.getMonth() - d1.getMonth();
        let days = d2.getDate() - d1.getDate();
        if (days > 0) {
            months++;
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        if (years === 0) return `${months} month${months > 1 ? "s" : ""}`;
        if (months === 0) return `${years} year${years > 1 ? "s" : ""}`;

        return `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
    }

    return (
        <div className="bg-foreground pl-2 rounded-xl border-0">
            <div className="bg-background p-4 border-0">
                <div className="flex flex-col gap-2">
                    <Text content={experience.position} />
                    <div className="flex gap-2 items-center">
                        <Text content={experience.company} styles={{ fontSize: 18 }} />
                        {experience.from && (
                            <>
                                <Separator orientation="vertical" className="bg-teal-50 h-5" />
                                <SubText content={getDateDifference(experience.from, experience.to || new Date().toISOString())} styles={{ fontSize: 18 }} />
                            </>
                        )}
                    </div>
                    <ul className="ml-6 list-disc [&>li]:mt-2">
                        {experience.details.map((detail, index) => (
                            <li className="text-base" key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ExperienceCard;
