import './сourse-сomponent.css'
import type {FC} from "react";
import type {Course} from "../../array.ts";


type PropsType = {
    course: Course
}
export const CourseComponent: FC<PropsType> = ({course}) => {
    return (
        <li>{course.title} {course.monthDuration}</li>
    );
};