import ActiveGenerator from "../services/ActiveGenerator";
import { Resource } from "../services/VariableStore";
//test for active generator
export const IncrementButtonComponent: React.FC<Resource> = (resource: Resource) => {
    const generator = new ActiveGenerator(resource.resourceName, 1);
    const handleClick = () => {
        generator.handleClick();
    }

    return (
        <button onClick={() => handleClick()}>{resource.resourceName}</button>
    );
}