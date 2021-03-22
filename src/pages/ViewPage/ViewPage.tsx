import { useParams } from "react-router-dom";

export default function ViewPage (props: any) {
    let { view } = useParams() as Record<string, any>;
    return (
        <div>You are in view {view}</div>
    );
}