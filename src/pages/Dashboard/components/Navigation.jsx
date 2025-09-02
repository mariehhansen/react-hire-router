import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/view">Employees</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;