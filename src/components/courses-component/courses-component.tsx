import './courses-component.css';
import {coursesAndDurationArray} from "../../array.ts";
import type {Course} from "../../array.ts";
import {CourseComponent} from "../course-component/course-component.tsx";


export const CoursesComponent = () => {


    return (
        <ul>
            {
                coursesAndDurationArray.map((course: Course, index: number) => {
                    return <CourseComponent course={course} key={index}/>;
                })
            }

        </ul>
    );
};